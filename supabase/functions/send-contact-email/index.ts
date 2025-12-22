import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Honeypot field to catch bots
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 submissions per minute per IP

const isRateLimited = (clientIP: string): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(clientIP);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
};

// Basic spam detection patterns
const containsSpamPatterns = (text: string): boolean => {
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|winner|prize|free money)\b/i,
    /<script/i,
    /javascript:/i,
    /onclick=/i,
    /https?:\/\/[^\s]+\.(ru|cn|tk)/i, // Suspicious TLDs
  ];
  return spamPatterns.some(pattern => pattern.test(text));
};

// Input validation
const validateInput = (name: string, email: string, message: string): string | null => {
  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
    return 'Invalid name provided';
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
    return 'Invalid email address';
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) {
    return 'Message must be between 10 and 5000 characters';
  }
  return null;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';

    // Check rate limit
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Received contact form submission from IP:", clientIP);
    const { name, email, message, honeypot }: ContactEmailRequest = await req.json();

    // Honeypot check - if filled, it's likely a bot
    if (honeypot && honeypot.trim().length > 0) {
      console.warn("Honeypot triggered, likely bot submission");
      // Return success to not alert the bot, but don't send email
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate input
    const validationError = validateInput(name, email, message);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check for spam patterns
    if (containsSpamPatterns(name) || containsSpamPatterns(message)) {
      console.warn("Spam pattern detected in submission");
      return new Response(
        JSON.stringify({ error: 'Your message was flagged as spam. Please try again.' }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize HTML in message to prevent XSS in email
    const sanitizedMessage = message
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>');

    const sanitizedName = name
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    console.log("Sending email from:", sanitizedName, email);

    // Send email to yourself
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["amaan-619@hotmail.co.uk"],
      replyTo: email,
      subject: `Portfolio Contact: Message from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    // Log detailed error server-side for debugging
    console.error("Error in send-contact-email function:", error);
    
    // Return generic error message to client (no internal details exposed)
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

import { useState } from "react";
import { ArrowUpRight, Linkedin, Mail, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  message: z.string().trim().min(1, "Please enter a message").max(1000, "Message must be under 1,000 characters"),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const nextErrors: FormErrors = {};
      result.error.errors.forEach((error) => { const field = error.path[0] as keyof FormData; if (!nextErrors[field]) nextErrors[field] = error.message; });
      setErrors(nextErrors);
      toast.error(result.error.errors[0]?.message ?? "Please check your details");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", { body: { ...result.data, honeypot } });
      if (error) {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again or email me directly.");
        return;
      }
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "min-h-12 rounded-md border-feature-foreground/25 bg-feature-foreground/5 text-feature-foreground placeholder:text-feature-foreground/45 focus-visible:ring-secondary";
  return (
    <section id="contact" className="feature-surface scroll-mt-16 py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase text-secondary" style={{ letterSpacing: ".14em" }}>Get in touch</p>
          <h2 className="font-display text-4xl font-medium sm:text-5xl">Let’s build dependable systems.</h2>
          <p className="mt-5 max-w-md leading-relaxed text-feature-foreground/70">I’m open to full-time software engineering opportunities where operational understanding and thoughtful delivery matter.</p>
          <div className="mt-8 space-y-2">
            <a href="mailto:amaan-619@hotmail.co.uk" className="flex min-h-12 items-center gap-3 border-b border-feature-foreground/20 text-sm"><Mail className="h-4 w-4 text-secondary" /> amaan-619@hotmail.co.uk</a>
            <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center gap-3 border-b border-feature-foreground/20 text-sm"><Linkedin className="h-4 w-4 text-secondary" /> LinkedIn <ArrowUpRight className="ml-auto h-4 w-4" /></a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-feature-foreground/20 p-5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div><Label htmlFor="name" className="text-feature-foreground">Name</Label><Input id="name" name="name" autoComplete="name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={`mt-2 ${inputClass}`} />{errors.name && <p id="name-error" className="mt-2 text-sm text-secondary">{errors.name}</p>}</div>
            <div><Label htmlFor="email" className="text-feature-foreground">Email</Label><Input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={`mt-2 ${inputClass}`} />{errors.email && <p id="email-error" className="mt-2 text-sm text-secondary">{errors.email}</p>}</div>
          </div>
          <div className="mt-5"><Label htmlFor="message" className="text-feature-foreground">Message</Label><Textarea id="message" name="message" rows={6} placeholder="Tell me about the role or opportunity…" value={formData.message} onChange={(e) => updateField("message", e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={`mt-2 resize-y ${inputClass}`} />{errors.message && <p id="message-error" className="mt-2 text-sm text-secondary">{errors.message}</p>}</div>
          <div className="absolute -left-[9999px]" aria-hidden="true"><Label htmlFor="website">Website</Label><Input id="website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></div>
          <Button type="submit" size="lg" disabled={isSubmitting} className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"><Send /> {isSubmitting ? "Sending…" : "Send message"}</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
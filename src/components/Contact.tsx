import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const headerAnimation = useScrollAnimation(0.1);
  const formAnimation = useScrollAnimation<HTMLFormElement>(0.1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const firstError = result.error.errors[0];
      toast.error(firstError.message);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: { ...formData, honeypot },
      });

      if (error) {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again or email me directly.");
        return;
      }

      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            ref={headerAnimation.ref}
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>Get in Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Interested in working together? Drop me a message.
            </p>
          </motion.div>

          <motion.form 
            ref={formAnimation.ref}
            onSubmit={handleSubmit} 
            className="glass-card p-6 md:p-8 rounded-2xl space-y-5"
            initial={{ opacity: 0, y: 40 }}
            animate={formAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -10 }}
              animate={formAnimation.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Label htmlFor="name" className="font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/50 border-border focus:border-primary transition-all"
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -10 }}
              animate={formAnimation.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Label htmlFor="email" className="font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/50 border-border focus:border-primary transition-all"
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -10 }}
              animate={formAnimation.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Label htmlFor="message" className="font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/50 border-border focus:border-primary transition-all resize-none"
              />
            </motion.div>

            {/* Honeypot field */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <Input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={formAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button 
                type="submit" 
                size="lg" 
                className="w-full btn-luxury text-primary-foreground font-medium gap-2" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

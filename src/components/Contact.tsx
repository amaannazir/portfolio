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
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            ref={headerAnimation.ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight font-serif">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Let's discuss how I can contribute to your team's success
            </p>
          </motion.div>

          <motion.form 
            ref={formAnimation.ref}
            onSubmit={handleSubmit} 
            className="glass-card p-8 rounded-2xl space-y-6"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={formAnimation.isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -10 }}
              animate={formAnimation.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Label htmlFor="name" className="font-light tracking-wide">
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card/50 border-border/50 focus:border-primary/50 transition-all duration-300 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -10 }}
              animate={formAnimation.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Label htmlFor="email" className="font-light tracking-wide">
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="youremailaddress@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card/50 border-border/50 focus:border-primary/50 transition-all duration-300 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -10 }}
              animate={formAnimation.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Label htmlFor="message" className="font-light tracking-wide">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card/50 border-border/50 focus:border-primary/50 transition-all duration-300 resize-none focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
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
                className="w-full btn-luxury text-primary-foreground font-medium" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

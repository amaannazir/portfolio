import { Linkedin, Mail, Phone, Github, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/amaan-nazir-033463225",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/amaan-nazir",
      icon: Github,
    },
    {
      name: "Email",
      href: "mailto:amaan-619@hotmail.co.uk",
      icon: Mail,
    },
    {
      name: "Phone",
      href: "tel:07388874723",
      icon: Phone,
    },
  ];

  return (
    <footer className="relative z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      {/* Decorative top border */}
      <div className="section-divider" />
      
      <div className="container mx-auto px-6 py-12 relative">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
              <span className="text-foreground">Amaan</span>{" "}
              <span className="gradient-text">Nazir</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-2 font-light tracking-wide">
              Full Stack Developer & Solutions Architect
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                rel={link.name !== "Email" && link.name !== "Phone" ? "noopener noreferrer" : undefined}
                className="group relative p-3 rounded-full glass-card hover:border-primary/40 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </a>
            ))}
          </div>

          <Separator className="w-24 bg-border/50" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-center">
            <p className="text-muted-foreground text-sm font-light tracking-wide">
              © {currentYear} Amaan Nazir. All rights reserved.
            </p>
            <span className="hidden md:inline text-muted-foreground/50">•</span>
            <p className="text-muted-foreground text-sm font-light tracking-wide flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-primary fill-primary" /> in the UK
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

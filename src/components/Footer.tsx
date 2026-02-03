import { Linkedin, Mail, Phone, Github, Heart, ArrowUp } from "lucide-react";
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

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 via-background to-background" />
      
      {/* Decorative top border */}
      <div className="section-divider" />
      
      <div className="container mx-auto px-6 py-12 md:py-16 relative">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-foreground">Amaan</span>{" "}
              <span className="gradient-text">Nazir</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              Full Stack Developer
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-muted-foreground hover:text-primary text-sm font-medium link-elegant transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Separator className="w-32 bg-border/50" />

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                rel={link.name !== "Email" && link.name !== "Phone" ? "noopener noreferrer" : undefined}
                className="group p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          <Separator className="w-24 bg-border/50" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Amaan Nazir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

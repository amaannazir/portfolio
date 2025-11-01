import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-3 text-xl font-medium text-foreground hover:text-primary transition-colors tracking-wide"
          >
            <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            AMAAN NAZIR
          </button>

          <div className="flex items-center gap-12">
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-light tracking-wider"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors font-light tracking-wider"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-light tracking-wider"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer">
                  Connect
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

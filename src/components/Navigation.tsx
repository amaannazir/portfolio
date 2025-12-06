import { useState, useEffect } from "react";
import { User, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Stack", id: "stack" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-medium text-foreground hover:text-primary transition-colors tracking-wide"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-foreground flex items-center justify-center">
                <User className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="hidden xs:inline">AMAAN NAZIR</span>
              <span className="xs:hidden">AN</span>
            </button>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-primary transition-colors font-light tracking-wider"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <ThemeToggle />
                <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                  <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-16">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-light text-foreground hover:text-primary transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <Button size="lg" className="mt-4" asChild>
            <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navigation;

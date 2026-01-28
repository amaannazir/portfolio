import { useState, useEffect } from "react";
import { User, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

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
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-2xl border-b border-border/30 shadow-sm" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection("about")}
              className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-medium text-foreground hover:text-primary transition-all duration-300 tracking-wide group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-foreground/80 flex items-center justify-center group-hover:border-primary group-hover:scale-105 transition-all duration-300">
                <User className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="hidden xs:inline font-serif">AMAAN NAZIR</span>
              <span className="xs:hidden font-serif">AN</span>
            </motion.button>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="link-elegant text-foreground hover:text-primary transition-colors font-light tracking-wider text-sm uppercase"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <ThemeToggle />
                <Button variant="outline" size="sm" asChild className="hidden sm:flex backdrop-blur-sm hover:border-primary/40 transition-all">
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
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 pt-16">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-light text-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
              >
                <Button size="lg" className="mt-4 btn-luxury text-primary-foreground" asChild>
                  <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

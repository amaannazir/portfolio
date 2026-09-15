import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="flex min-h-11 items-center gap-3" aria-label="Amaan Nazir, home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-foreground font-display text-sm font-bold text-background">AN/</span>
          <span className="hidden leading-tight xs:block">
            <span className="block font-display text-sm font-semibold">Amaan Nazir</span>
            <span className="block text-xs text-muted-foreground">Systems Software Engineer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="flex min-h-11 items-center px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>)}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex"><a href="#contact">Contact</a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <div className="section-shell flex flex-col py-4">
            {[...navItems, { label: "Contact", href: "#contact" }].map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-border text-lg font-medium last:border-0">{item.label}</a>)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
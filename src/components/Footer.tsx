import { ArrowUp, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import cvAsset from "@/assets/Amaan_Nazir_CV.pdf.asset.json";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="section-shell flex flex-col gap-7 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="font-display font-semibold">AN/ Amaan Nazir</p><p className="mt-1 text-xs text-muted-foreground">© {new Date().getFullYear()} Full-Stack Systems Software Engineer</p></div>
      <nav aria-label="Footer links" className="flex flex-wrap items-center gap-1">
        <Button variant="ghost" size="icon" asChild><a href="https://github.com/amaannazir" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a></Button>
        <Button variant="ghost" size="icon" asChild><a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button>
        <Button variant="ghost" size="icon" asChild><a href="mailto:amaan-619@hotmail.co.uk" aria-label="Email"><Mail /></a></Button>
        <Button variant="ghost" asChild><a href={cvAsset.url} download="Amaan_Nazir_CV.pdf"><Download /> CV</a></Button>
        <Button variant="ghost" size="icon" asChild><a href="#top" aria-label="Back to top"><ArrowUp /></a></Button>
      </nav>
    </div>
  </footer>
);

export default Footer;
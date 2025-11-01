const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-muted-foreground font-light tracking-wide">
            © Amaan Nazir {currentYear}
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/amaan-nazir-033463225"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:amaan-619@hotmail.co.uk"
              className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide text-sm"
            >
              Email
            </a>
            <a
              href="tel:07388874723"
              className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide text-sm"
            >
              Phone
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

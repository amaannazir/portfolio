const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground">
          © Alex Thompson {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

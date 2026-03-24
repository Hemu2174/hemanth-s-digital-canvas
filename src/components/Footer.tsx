const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kattamuri Hemanth. Built with passion.
      </p>
      <p className="mono-text text-xs text-muted-foreground">
        Designed & Developed by <span className="text-primary">KH</span>
      </p>
    </div>
  </footer>
);

export default Footer;

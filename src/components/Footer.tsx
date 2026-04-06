import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="glass-dark py-8 md:py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Elaneeru Homestay" className="h-10 w-10 object-contain brightness-200" width={40} height={40} />
          <div>
            <span className="font-display text-primary-foreground font-bold">Elaneeru Homestay</span>
            <p className="text-xs text-primary-foreground/50">Chikkamagaluru, Karnataka</p>
          </div>
        </div>
        <div className="flex gap-6 text-sm text-primary-foreground/60">
          <a href="#home" className="hover:text-primary-foreground transition-colors">Home</a>
          <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
          <a href="#host" className="hover:text-primary-foreground transition-colors">Host</a>
          <a href="#food" className="hover:text-primary-foreground transition-colors">Food</a>
          <a href="#stay-gallery" className="hover:text-primary-foreground transition-colors">Stay</a>
          <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-6 pt-5 border-t border-primary-foreground/10 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Elaneeru Homestay. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

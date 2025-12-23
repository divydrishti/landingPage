import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img src={logo} alt="DivyDrishti" className="h-16 w-auto" />
          </div>
          
          <p className="text-muted-foreground text-sm mb-6 italic">
            Rooted in ancient wisdom, designed to guide you.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground/60 mt-8">
            © {new Date().getFullYear()} DivyDrishti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

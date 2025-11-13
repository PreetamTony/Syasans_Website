import { Facebook, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary/5 py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="https://www.facebook.com/SYASANS/about" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="https://x.com/SyasansCA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="mailto:askus@syasans.com" 
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Created with SYASAN'S Career Analytics
        </p>
      </div>
    </footer>
  );
};

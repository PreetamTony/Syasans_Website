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
        <p className="text-center text-muted-foreground flex flex-wrap items-center justify-center gap-1 text-sm">
          <span>© {new Date().getFullYear()} Created with</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300 inline-flex items-center">
            SYASAN&apos;S
            <span className="inline-flex items-center justify-center text-[8px] font-black w-3.5 h-3.5 rounded-full border border-slate-400 dark:border-slate-500 text-slate-500 dark:text-slate-400 ml-1 select-none transform scale-90 translate-y-[-1px]" title="Registered Trademark">
              R
            </span>
          </span>
          <span>Career Analytics</span>
        </p>
      </div>
    </footer>
  );
};

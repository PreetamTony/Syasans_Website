import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/syasans-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Referring To", path: "/referring-to" },
  { name: "Inquiries Into", path: "/inquiries" },
  { name: "Our Products", path: "/products" },
  { name: "Endorsement", path: "/endorsement" },
  { name: "Core Team", path: "/team" },
  { name: "Feedbacks", path: "/feedback" },
  { name: "Join us", path: "/join" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a nav item is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Syasan's Logo" 
                className="h-12 sm:h-16 w-auto hover:opacity-90 transition-opacity"
              />
              <div className="ml-3 sm:ml-5">
                <div className="text-xl sm:text-3xl font-extrabold text-foreground leading-none gradient-text">SYASAN'S</div>
                <div className="text-xs sm:text-base font-semibold text-muted-foreground tracking-wider mt-0.5 sm:mt-1">CAREER ANALYTICS</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="nav-link text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    activeClassName="active text-primary"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out z-40 ${
            mobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          style={{ marginTop: scrolled ? '4rem' : '6rem' }}
        >
          <div className="container mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="block px-4 py-3 text-lg font-medium text-foreground/90 hover:bg-accent/50 rounded-lg transition-colors"
                    activeClassName="bg-accent/20 text-primary"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

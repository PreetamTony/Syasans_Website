import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/syasans-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Referring To", path: "/referring-to" },
  { name: "Inquiries Into", path: "/inquiries" },
  { name: "Endorsement", path: "/endorsement" },
  { name: "Core Team", path: "/team" },
  { name: "Join us", path: "/join" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Syasan's Logo" 
              className="h-16 w-auto hover:opacity-90 transition-opacity"
            />
            <div className="ml-5">
              <div className="text-3xl font-extrabold text-foreground leading-none gradient-text">SYASAN'S</div>
              <div className="text-base font-semibold text-muted-foreground tracking-wider mt-1">CAREER ANALYTICS</div>
            </div>
          </div>
          
          <ul className="hidden md:flex items-center gap-8">
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
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

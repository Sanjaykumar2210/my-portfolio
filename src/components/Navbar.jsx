import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center gap-2 group"
          href="#hero"
        >
          <div className="w-12 h-12 group-hover:scale-110 transition-transform duration-300">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Outer ring with dashes */}
              <g>
                {[...Array(12)].map((_, i) => (
                  <rect
                    key={i}
                    x="15"
                    y="2"
                    width="2"
                    height="6"
                    className="fill-primary"
                    style={{
                      transform: `rotate(${i * 30}deg)`,
                      transformOrigin: '16px 16px',
                      opacity: i % 3 === 0 ? 1 : i % 3 === 1 ? 0.8 : 0.6,
                    }}
                  />
                ))}
              </g>
              
              {/* Middle hexagon */}
              <g>
                {[...Array(6)].map((_, i) => (
                  <path
                    key={i}
                    d="M16 6L16 14"
                    className="stroke-primary"
                    style={{
                      strokeWidth: 2,
                      strokeOpacity: 0.6,
                      transform: `rotate(${i * 60}deg)`,
                      transformOrigin: '16px 16px',
                    }}
                  />
                ))}
              </g>
              
              {/* Inner core */}
              <circle cx="16" cy="16" r="4" className="fill-primary" fillOpacity="0.2" />
              <circle cx="16" cy="16" r="3" fill="none" className="stroke-primary" strokeOpacity="0.4" />
            </svg>
          </div>
          <span className="relative z-10">
            
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1)); // Remove #
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
          <a
            className="flex items-center justify-center font-unbounded text-xl font-bold text-foreground"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            tabIndex={0}
            aria-label="Go to homepage"
          >
            Ruvishan Maleesha
          </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-1" role="menubar">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={`px-4 py-2 rounded-full transition-all duration-300 relative text-foreground/70 hover:text-foreground hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary ${
                activeSection === item.href.substring(1) 
                  ? "text-primary font-medium bg-primary/10" 
                  : "hover:scale-105"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              tabIndex={0}
              role="menuitem"
              aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Download CV Button and Mobile menu */}
        <div className="flex items-center space-x-2">
          <a
            href="/cv.pdf" // Update this path to your actual CV file
            download
            className="hidden md:block px-4 py-1.5 rounded-full bg-foreground text-background font-medium 
                   transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,0.3)] hover:scale-105 active:scale-95 text-sm"
            aria-label="Download CV"
          >
            Download CV
          </a>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 rounded-md hover:bg-foreground/5 transition-colors duration-300"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} color="hsl(var(--primary))" /> : <Menu size={24} color="hsl(var(--primary))" />}{" "}
          </button>
        </div>


        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsMenuOpen(false);
              }
            }}
            className="absolute top-6 right-6 p-2 text-foreground z-50 rounded-md hover:bg-foreground/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-foreground"
            aria-label="Close Menu"
          >
            <X size={24} color="hsl(var(--primary))" />
          </button>
          
          <div className="flex flex-col items-center space-y-8 text-xl mt-12" role="menu">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={`px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden text-foreground/70 hover:text-foreground hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary ${
                  activeSection === item.href.substring(1) ? "text-primary font-medium bg-primary/10" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                tabIndex={0}
                role="menuitem"
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

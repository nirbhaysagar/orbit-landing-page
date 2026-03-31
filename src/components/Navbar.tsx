import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import brandLogo from "../assets/showcase/ADARSH LOGO-01.svg";

const navItems = [
  { name: "Process", id: "#process" },
  { name: "Showcase", id: "#showcase" },
  { name: "Stories", id: "#stories" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 px-6 md:px-[112px] ${
      scrolled 
        ? "py-4 bg-black/80 backdrop-blur-md md:bg-transparent md:mix-blend-difference" 
        : "py-6 bg-transparent md:mix-blend-difference"
    }`}>
      <nav className="flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 md:h-24 md:w-24 flex items-center justify-center">
             <img src={brandLogo} alt="Orbit" className="h-full w-auto object-contain brightness-110" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-inconsolata">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.id}
              className="text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:block">
          <Button
            className="bg-white text-black hover:bg-white/90 px-4 py-1.5 text-[10px] font-bold font-inter rounded-full tracking-tighter"
          >
            GET STARTED
          </Button>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-6 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-6 md:hidden animate-fade-up">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.id}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.4em] text-white/70 hover:text-white transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button
              className="bg-white text-black hover:bg-white/90 px-6 py-4 text-xs font-bold font-inter rounded-full tracking-tight w-full mt-4"
            >
              GET STARTED
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

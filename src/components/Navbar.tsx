import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import brandLogo from "../assets/showcase/ADARSH LOGO-01.svg";

const navItems = [
  { name: "Process", id: "#process" },
  { name: "Showcase", id: "#showcase" },
  { name: "Stories", id: "#stories" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 px-[112px] ${
      scrolled 
        ? "py-4 bg-black/70 backdrop-blur-lg border-b border-white/5" 
        : "py-6 bg-transparent mix-blend-difference"
    }`}>
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-24 w-24 flex items-center justify-center">
             <img src={brandLogo} alt="Orbit" className="h-full w-auto object-contain brightness-110" />
          </div>
        </div>

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

        <Button
          className="bg-white text-black hover:bg-white/90 px-4 py-1.5 text-[10px] font-bold font-inter rounded-full tracking-tighter"
        >
          GET STARTED
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;

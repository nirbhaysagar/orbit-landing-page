import React, { useState } from "react";
import transglobal from "../assets/showcase/image.png";
import newReign from "../assets/showcase/image copy.png";
import joinCrowd from "../assets/showcase/image copy 2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ShowcaseSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const designs = [
    { title: "TransGlobal", subtitle: "Dashboard", image: transglobal },
    { title: "New Reign", subtitle: "Editorial", image: newReign },
    { title: "Join the Crowd", subtitle: "Web3 Landing", image: joinCrowd },
    { title: "Zenith Docs", subtitle: "Documentation", image: "/showcase_4.png" },
    { title: "Orbit Studio", subtitle: "SaaS Platform", image: transglobal },
    { title: "NightSoar", subtitle: "Portfolio", image: newReign },
    { title: "SoftBlaze", subtitle: "Branding", image: joinCrowd },
    { title: "CloudPeak", subtitle: "Analytics", image: "/showcase_4.png" },
  ];

  const cardW = 280;
  const cardH = 360;

  const nextCard = () => {
    setActiveIndex((prev) => Math.min(designs.length - 1, prev + 1));
  };

  const prevCard = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const getTranslateXPercent = (offset: number) => {
    if (offset === 0) return 0;
    const abs = Math.abs(offset);
    const direction = offset > 0 ? 1 : -1;
    // Step amounts to create the tightly tucked overlap effect
    const jumps = [0, 65, 115, 155, 185]; 
    const percent = jumps[abs] || (185 + (abs - 4) * 20);
    return direction * percent;
  };

  const getScale = (offset: number) => {
    const abs = Math.abs(offset);
    if (abs === 0) return 1;
    if (abs === 1) return 0.85;
    if (abs === 2) return 0.7;
    return Math.max(0.5, 1 - abs * 0.15);
  };

  return (
    <section id="showcase" className="bg-transparent py-10 md:py-16 relative overflow-hidden font-inconsolata mix-blend-difference">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C084FC]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[400px] h-[400px] bg-[#F472B6]/5 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

      <div className="mx-auto px-[50px] md:px-[100px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-15 gap-7">
          <div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C084FC] mb-3.5 block font-bold">SHOWCASE // 003</span>
            <h2 className="text-[32px] md:text-[45px] font-black tracking-tighter uppercase text-white leading-[0.9] font-inter">
              Built at <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">Orbit.</span>
            </h2>
          </div>
          <p className="text-white/50 text-[11px] uppercase tracking-[0.1em] max-w-sm md:text-right font-bold mix-blend-difference">
            From high-fidelity dashboards to minimalist aesthetics, Orbit scales with your vision. Every design is built directly into production-ready code.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[450px] flex items-center justify-center mt-10">
          {designs.map((design, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;
            const isHovered = hoveredIndex === index;

            const tx = getTranslateXPercent(offset);
            let scale = getScale(offset);
            let zIndex = 50 - absOffset;
            const opacity = absOffset > 3 ? 0 : 1;
            
            if (isHovered) {
              scale = 1.4; // Pop out significantly
              zIndex = 100; // Always render on top when hovered
            }
            
            let brightnessClass = "brightness-100";
            if (!isHovered) {
              if (absOffset === 1) brightnessClass = "brightness-75";
              if (absOffset === 2) brightnessClass = "brightness-50";
              if (absOffset >= 3) brightnessClass = "brightness-50 opacity-0 pointer-events-none";
            }

            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${brightnessClass}`}
                style={{
                  width: `${cardW}px`,
                  height: `${cardH}px`,
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + ${tx}%), -50%) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Reverting to the requested dark glassmorphism card styling inside the cover-flow layout */}
                <div 
                  className={`relative w-full h-full rounded-2xl border ${isActive || isHovered ? 'border-white/30 shadow-[0_0_40px_rgba(192,132,252,0.3)]' : 'border-white/10 shadow-2xl'} overflow-hidden bg-[#0A0A0A] transition-all duration-500`}
                >
                  <img
                    src={design.image}
                    alt={design.title}
                    className={`absolute inset-0 w-full h-full transition-all duration-500 ${isHovered ? 'object-contain bg-black/90 scale-100 opacity-100' : (isActive ? 'object-cover opacity-100 scale-105' : 'object-cover opacity-60 scale-100')}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none" />
                  
                  {(isActive || isHovered) && (
                    <div className="absolute inset-0 opacity-100 transition-opacity duration-500 bg-gradient-to-t from-purple-500/15 via-transparent to-transparent pointer-events-none" />
                  )}

                  <div className={`absolute bottom-0 left-0 right-0 p-5 font-inconsolata transition-opacity duration-500 ${isActive || isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="text-white text-[12px] font-bold uppercase tracking-widest">{design.title}</h4>
                    <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] mt-1">{design.subtitle}</p>
                  </div>

                  {isActive && (
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-[#C084FC] to-[#F472B6] shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-12 z-20 relative">
          <button 
            onClick={prevCard} 
            disabled={activeIndex === 0}
            className={`p-2 rounded-full border border-white/10 bg-white/5 transition-all duration-300 ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white/20'}`}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          
          <div className="flex gap-2">
            {designs.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-gradient-to-r from-[#C084FC] to-[#F472B6] w-6' : 'bg-white/20 w-1.5 hover:bg-white/40'}`} 
              />
            ))}
          </div>

          <button 
            onClick={nextCard} 
            disabled={activeIndex === designs.length - 1}
            className={`p-2 rounded-full border border-white/10 bg-white/5 transition-all duration-300 ${activeIndex === designs.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white/20'}`}
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default ShowcaseSection;

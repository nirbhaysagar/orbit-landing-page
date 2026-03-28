import React, { useState } from "react";

const AboutSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="process" 
      className="bg-transparent py-10 md:py-16 relative flex flex-col items-center select-none"
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 mb-14 text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-4 block font-medium">HOW IT WORKS // 001</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white leading-[0.9] mb-6">
          From prompt to <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">production.</span>
        </h2>
        <p className="text-base md:text-lg text-white/50 max-w-2xl font-light leading-relaxed mx-auto">
          Describe what you want in plain English. Orbit's multi-agent system plans the architecture, generates every component, validates the output, and serves a live preview — all in one shot.
        </p>
      </div>

      {/* Arc Container - Using non-isolating positioning for blending */}
      <div 
        className="relative w-full max-w-7xl h-[650px] flex items-center justify-center "
        style={{
          marginLeft: `${mousePos.x * 0.4}px`,
          marginTop: `${mousePos.y * 0.6}px`, // Increased for more vertical motion
        }}
      >
        {/* Central Core Text */}
        <div className="absolute z-20 text-center pointer-events-none translate-y-[210px] mix-blend-difference">
          <p className="text-xl md:text-3xl font-light text-white leading-relaxed tracking-tight mix-blend-difference opacity-70">
            One prompt. Five agents.
          </p>
          <div className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent font-black text-4xl md:text-7xl uppercase tracking-tighter mt-2 drop-shadow-[0_0_30px_rgba(192,132,252,0.3)]">
            A live app.
          </div>
        </div>

        {/* Orbital Modules */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Animated Connection Line */}
          <svg className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[550px] pointer-events-none" viewBox="0 0 1000 500">
             <path 
               d="M 100 400 Q 500 -50 900 400" 
               fill="none" 
               stroke="url(#arcGradient)" 
               strokeWidth="1.5" 
               strokeDasharray="4,8"
               className="animate-pulse opacity-40"
             >
               <animate attributeName="stroke-dashoffset" from="0" to="100" dur="10s" repeatCount="indefinite" />
             </path>
             <defs>
               <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#C084FC" />
                 <stop offset="50%" stopColor="#F472B6" />
                 <stop offset="100%" stopColor="#FB923C" />
               </linearGradient>
             </defs>
          </svg>

          {[
            { step: "01", label: "Describe", text: "Turns prompt into task graph" },
            { step: "02", label: "Planner", text: "Maps component dependencies" },
            { step: "03", label: "Reasoner", text: "Decides logic composition" },
            { step: "04", label: "Executor", text: "Emits real file writes" },
            { step: "05", label: "Pre-flight", text: "Scans for bad imports" },
            { step: "06", label: "AutoHealer", text: "Patches failure in 0.8s" },
            { step: "07", label: "Running App", text: "Production-ready code" },
          ].map((item, idx) => {
            const total = 7;
            const sweep = 160; 
            const angle = (idx - Math.floor(total / 2)) * (sweep / (total - 1));
            const radian = (angle * Math.PI) / 180;
            const radius = 540; 
            const x = Math.sin(radian) * radius;
            const y = (1 - Math.cos(radian)) * (radius * 0.7) - 100;
            const z = Math.cos(radian) * -200 + 100;
            const scale = 1.05 + (Math.cos(radian) * 0.05); // unified scale factor
            
            const w = 240 * scale;
            const h = 300 * scale;

            return (
              <div 
                key={idx} 
                className="group absolute p-6 rounded-2xl bg-white/[0.1] border border-white/10 hover:bg-white/[0.15] hover:border-purple-400/40 transition-all duration-700 flex flex-col select-none hover:z-[100] mix-blend-difference"
                style={{
                  left: `50%`,
                  top: `50%`,
                  marginLeft: `${x - w/2}px`,
                  marginTop: `${y - h/2}px`,
                  width: `${w}px`,
                  height: `${h}px`,
                }}
              >
                {/* Module Header */}
                <div className="flex justify-between items-start mb-5 mix-blend-difference">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-white/40 group-hover:text-purple-400/80 transition-colors uppercase mix-blend-difference">
                    SYS // {item.step}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400/40 group-hover:bg-green-400 group-hover:shadow-[0_0_10px_rgba(74,222,128,0.5)] animate-pulse" />
                </div>

                {/* Corner Markers */}
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/10 group-hover:border-purple-400/50 transition-colors" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/10 group-hover:border-purple-400/50 transition-colors" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/10 group-hover:border-purple-400/50 transition-colors" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/10 group-hover:border-purple-400/50 transition-colors" />

                {/* Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-white/0 group-hover:from-white/[0.02] transition-all duration-1000 pointer-events-none" />

                {/* Main Label */}
                <h5 className="text-white text-lg md:text-xl font-black uppercase tracking-tighter mb-4 mix-blend-difference group-hover:translate-x-1 transition-transform duration-500">
                  {item.label}
                </h5>
                
                <p className="text-[13px] text-white/70 group-hover:text-white transition-colors uppercase tracking-[0.05em] leading-relaxed mix-blend-difference">
                  {item.text}
                </p>

                {/* Bottom Stats */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-end justify-between mix-blend-difference">
                  <div className="flex gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1 h-3 bg-white/5 group-hover:bg-purple-400/30 transition-all" style={{ transitionDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <span className="text-[8px] font-mono text-white/20 group-hover:text-white/40 uppercase tracking-[0.3em] mix-blend-difference">Online</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="mt-10 overflow-hidden py-7 w-full border-t border-white/5">
        <div className="flex animate-marquee whitespace-nowrap gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-3xl md:text-4xl font-black font-inter tracking-tighter uppercase text-white/10">
              <span>Websites</span>
              <span className="text-white/5 text-lg">●</span>
              <span>Web Apps</span>
              <span className="text-white/5 text-lg">●</span>
              <span>Landing Pages</span>
              <span className="text-white/5 text-lg">●</span>
              <span>SaaS</span>
              <span className="text-white/5 text-lg">●</span>
              <span>Dashboards</span>
              <span className="text-white/5 text-lg">●</span>
              <span>AI Tools</span>
              <span className="text-white/5 text-lg">●</span>
              <span>Portfolios</span>
              <span className="text-white/5 text-lg">●</span>
              <span>E-Commerce</span>
              <span className="text-white/5 text-lg">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

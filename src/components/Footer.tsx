import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-transparent">
      {/* CTA Section with Premium Cloud Effect */}
      <div className="relative min-h-[400px] md:min-h-[490px] w-full flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-28 pb-20 md:pb-40 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* Drifting Clouds Layer - Oversized and centered to guarantee coverage */}
          <div className="absolute inset-[-10%] w-[120%] h-[120%] animate-drift-slow scale-110 origin-center">
            <img
              src="/premium_clouds_bg_v3.png"
              alt="Premium clouds"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Sophisticated Blending Layers */}
          {/* 1. Deep Black to Transparent (Top) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent h-1/2" />

          {/* 2. Soft Radial Glow behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

          {/* 3. Bottom Fade for a clean finish */}
          <div className="absolute bottom-0 left-0 w-full h-22 bg-gradient-to-t from-[#B0D4F5]/20 to-transparent" />
        </div>

        {/* CTA Content */}
        <div className="relative z-10 max-w-4xl mx-auto pt-10 md:pt-14">
          <div className="inline-flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-6xl font-black font-inter tracking-tighter text-white mb-6 drop-shadow-2xl leading-[1.1] md:leading-[0.95]">
              Free while we're in <br /> <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">early access.</span>
            </h2>
          </div>

          <p className="text-sm md:text-lg text-slate-800 mb-11 max-w-xl mx-auto font-inconsolata font-bold leading-relaxed px-4">
            We're onboarding developers in batches. <br className="hidden md:block" /> Claim your spot to start building working apps, not debugging sessions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-6 md:px-0">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90 px-8 py-6 text-base md:text-lg font-black rounded-full w-full sm:w-auto min-w-[168px] shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20 uppercase tracking-widest"
            >
              Start building
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-2xl text-slate-900 border-slate-900/40 hover:bg-white/20 px-8 py-6 text-base md:text-lg font-black rounded-full w-full sm:w-auto min-w-[168px] hover:scale-105 transition-all duration-300 uppercase tracking-widest"
            >
              Open Orbit
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

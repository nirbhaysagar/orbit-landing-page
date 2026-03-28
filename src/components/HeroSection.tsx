import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import Moon3D from "./Moon3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center min-h-screen pt-32">
        <h1 className="text-5xl md:text-[7rem] font-black text-white leading-[0.95] tracking-tighter animate-fade-up mix-blend-difference">
          Software, at <br />
          <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">
            orbital speed.
          </span>
        </h1>

        <div className="mt-auto mb-[32px] flex flex-col items-center">
          <p className="text-[20px] md:text-[25px] max-w-2xl mx-auto opacity-0 animate-fade-up [animation-delay:200ms] font-inconsolata font-bold leading-snug mb-8 mix-blend-difference">
            <span className="text-white">
              Go from idea to a live, production-ready app in seconds.
            </span>{" "}
            <span className="text-white/50">
              Orbit turns your prompts into full-stack React + TypeScript + Tailwind projects — with real-time preview, instant iteration, and zero config.
            </span>
          </p>

          <div className="opacity-0 animate-fade-up [animation-delay:400ms] translate-y-[13px]">
            <Button
              size="lg"
              className="bg-black text-white border border-white/20 hover:bg-white/10 px-8 py-6 text-base font-bold rounded-full tracking-tight transition-all hover:scale-105 no-mix"
            >
              Start building
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-xs tracking-widest uppercase opacity-0 animate-fade-up [animation-delay:600ms] font-inconsolata mix-blend-difference">
            <Lock className="w-3 h-3" />
            <span>Privacy-first. No data resold.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

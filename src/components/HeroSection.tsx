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

      <div className="relative z-10 text-center flex flex-col items-center min-h-screen pt-20 md:pt-32">
        <h1 className="text-4xl md:text-[7rem] font-black text-white leading-[1.1] md:leading-[0.95] tracking-tighter animate-fade-up mix-blend-difference px-4">
          Software, at <br />
          <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">
            orbital speed.
          </span>
        </h1>

        <div className="mt-auto mb-8 md:mb-[32px] flex flex-col items-center px-6">
          <p className="text-[16px] md:text-[25px] max-w-2xl mx-auto opacity-0 animate-fade-up [animation-delay:200ms] font-inconsolata font-bold leading-snug mb-8 mix-blend-difference text-white/90">
            <span className="text-white">
              Go from idea to a live, production-ready app in seconds.
            </span>{" "}
            <span className="text-white/50 block md:inline mt-2 md:mt-0">
              Orbit turns your prompts into full-stack React + TypeScript + Tailwind projects — with real-time preview, instant iteration, and zero config.
            </span>
          </p>

          <div className="opacity-0 animate-fade-up [animation-delay:400ms] translate-y-[13px]">
            <Button
              size="lg"
              className="bg-black text-white border border-white/20 hover:bg-white/10 px-8 py-6 text-sm md:text-base font-bold rounded-full tracking-tight transition-all hover:scale-105 no-mix"
            >
              Start building
            </Button>
          </div>

          <div className="mt-8 md:mt-6 flex items-center justify-center gap-2 text-white/40 text-[10px] md:text-xs tracking-widest uppercase opacity-0 animate-fade-up [animation-delay:600ms] font-inconsolata mix-blend-difference">
            <Lock className="w-3 h-3" />
            <span>Privacy-first. No data resold.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

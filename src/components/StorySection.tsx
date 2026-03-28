import React from "react";

const StorySection = () => {
  return (
    <section id="stories" className="bg-transparent text-foreground overflow-hidden">
      {/* Top Part: Orbit Narrative */}
      <div className="py-15 md:py-30 relative">
        <div className="relative">
          {/* Main Heading: The Mission */}
          <div className="grid md:grid-cols-12 gap-7 items-start mb-[36px] font-inconsolata">
            <div className="md:col-span-8 flex flex-col gap-3.5">
              <div className="text-[9px] uppercase tracking-[0.4em] bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-transparent italic mb-2.5 font-bold">Mission: 001</div>
              <h2 className="text-[32px] md:text-[45px] font-black font-inter leading-[0.95] tracking-tighter uppercase text-white mix-blend-difference">
                The end of the <br /> <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">waiting list.</span>
              </h2>
              <p className="text-[13px] md:text-[14.5px] text-white font-light leading-relaxed max-w-sm mix-blend-difference">
                Orbit was born from a simple frustration: turning an idea into a live app still takes too long. We built a multi-agent system that thinks like a senior engineer — plans the architecture, writes the code, and gives you a live preview you can iterate on instantly.
              </p>
            </div>
          </div>

          {/* Live Pipeline Visualization */}
          <div className="mb-[36px]">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-white/5 bg-white/[0.02]">
                <div className="w-[7px] h-[7px] rounded-full bg-red-500/60" />
                <div className="w-[7px] h-[7px] rounded-full bg-yellow-500/60" />
                <div className="w-[7px] h-[7px] rounded-full bg-green-500/60" />
                <span className="ml-2.5 text-[9px] text-white/30 font-inconsolata uppercase tracking-widest">orbit — pipeline output</span>
              </div>
              
              {/* Terminal Body */}
              <div className="p-5 md:p-7 font-inconsolata text-[11px] md:text-[12.5px] leading-relaxed space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-white/70">Prompt parsed → task graph with <span className="text-white font-bold">12 nodes</span> generated</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-white/70">Planner mapped <span className="text-white font-bold">8 components</span>, <span className="text-white font-bold">3 hooks</span>, <span className="text-white font-bold">1 context provider</span></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-white/70">Executor wrote <span className="text-white font-bold">14 files</span> in <span className="bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-transparent font-bold">2.4s</span></span>
                </div>
                <div className="h-px bg-white/5 my-1" />
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 shrink-0">⚠</span>
                  <span className="text-white/70">Pre-flight caught <span className="text-red-400 font-bold">2 hallucinated imports</span> → <span className="text-white/40 line-through">lucide-react/ArrowUpRight</span></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 shrink-0">⚠</span>
                  <span className="text-white/70">Pre-flight caught <span className="text-red-400 font-bold">1 broken JSX</span> → self-closing {'<img>'} in .tsx</span>
                </div>
                <div className="h-px bg-white/5 my-1" />
                <div className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-white/70">AutoHealer patched all 3 issues in <span className="bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-transparent font-bold">0.8s</span></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-white/70">npm run dev → <span className="text-green-400 font-bold">compiled successfully</span></span>
                </div>
                <div className="flex items-start gap-2 mt-2.5">
                  <span className="text-green-400 shrink-0">→</span>
                  <span className="text-white font-bold">App running at <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">localhost:5173</span> — 0 errors, 0 warnings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="grid md:grid-cols-12 gap-10 pt-[36px] border-t border-white/5">
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-12">
              <div className="font-inconsolata">
                <span className="text-[7.5px] uppercase tracking-[0.4em] text-white mb-5 block font-medium mix-blend-difference">01 // STEP_ONE</span>
                <h4 className="text-[32px] md:text-[2.3rem] font-black font-inter mb-5 tracking-tighter uppercase leading-[0.85] mix-blend-difference bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">Generate</h4>
                <p className="text-[12.5px] md:text-[14.5px] leading-relaxed text-white font-light mix-blend-difference">
                  Describe your app in plain English. Orbit plans the architecture, builds every component, and writes production-ready files — from a single prompt to full source code.
                </p>
              </div>

              {/* Pillar 02: Validation Engine */}
              <div className="font-inconsolata">
                <span className="text-[7.5px] uppercase tracking-[0.4em] text-white mb-5 block font-medium mix-blend-difference">02 // THE_GATE</span>
                <h4 className="text-[32px] md:text-[2.3rem] font-black font-inter mb-5 tracking-tighter uppercase leading-[0.85] mix-blend-difference bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">Validate</h4>
                <p className="text-[12.5px] md:text-[14.5px] leading-relaxed text-white font-light mix-blend-difference">
                  Every generated line passes through real TypeScript AST validation. Bad imports, broken JSX, and missing dependencies are caught before your app even boots.
                </p>
              </div>

              {/* Pillar 03: Auto-Healing */}
              <div className="font-inconsolata">
                <span className="text-[7.5px] uppercase tracking-[0.4em] text-white mb-5 block font-medium mix-blend-difference">03 // SELF_REPAIR</span>
                <h4 className="text-[32px] md:text-[2.3rem] font-black font-inter mb-5 tracking-tighter uppercase leading-[0.85] mix-blend-difference bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FB923C] bg-clip-text text-transparent">Heal</h4>
                <p className="text-[12.5px] md:text-[14.5px] leading-relaxed text-white font-light mix-blend-difference">
                  If something breaks at build time, Orbit patches it automatically. Terminal errors, npm failures, runtime crashes — all resolved before you see them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

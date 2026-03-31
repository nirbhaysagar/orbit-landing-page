import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import ShowcaseSection from "@/components/ShowcaseSection";
import Footer from "@/components/Footer";
import Moon3D from "@/components/Moon3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      {/* Layer 0: Deep Space Stars & Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-90">
        <div className="absolute inset-0 deep-space-bg animate-drift-slow" />
      </div>

      {/* Layer 1: 3D Moon */}
      <div className="fixed inset-0 pointer-events-none">
        <Moon3D />
      </div>

      {/* Layer 2: Main Content - REMOVED z-10 for cross-context blending */}
      <main className="w-full pt-18 flex flex-col gap-[30px] md:gap-[45px]">
        <div className="px-6 md:px-[112px] flex flex-col gap-[30px] md:gap-[45px]">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <StorySection />
          <ShowcaseSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;

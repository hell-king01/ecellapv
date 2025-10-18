import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Set dynamic viewport height for mobile
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH();
    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Enhanced animated wireframe grid with particles
    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      const offsetX = (time * 0.02) % gridSize;
      const offsetY = (time * 0.015) % gridSize;

      // Grid lines with purple glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#A259FF";
      ctx.strokeStyle = "#A259FF";
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;

      // Vertical lines
      for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Enhanced glowing nodes with pulsing effect
      const pulse = 0.6 + 0.4 * Math.sin(time * 0.003);

      for (let i = 0; i < 15; i++) {
        const x =
          canvas.width * (0.1 + i * 0.06) + 40 * Math.sin(time * 0.001 + i);
        const y =
          canvas.height * (0.15 + i * 0.05) + 30 * Math.cos(time * 0.0015 + i);

        // Outer glow
        ctx.shadowBlur = 25 * pulse;
        ctx.shadowColor = "#A259FF";
        ctx.fillStyle = `rgba(162, 89, 255, ${0.8 * pulse})`;
        ctx.globalAlpha = 0.9 * pulse;

        // Draw outer circle
        ctx.beginPath();
        ctx.arc(x, y, 12 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright core
        ctx.shadowBlur = 15 * pulse;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * pulse})`;
        ctx.globalAlpha = 0.8 * pulse;

        ctx.beginPath();
        ctx.arc(x, y, 4 * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      // Floating particles
      for (let i = 0; i < 8; i++) {
        const x =
          canvas.width * (0.2 + i * 0.1) + 60 * Math.sin(time * 0.0008 + i * 2);
        const y =
          canvas.height * (0.3 + i * 0.08) +
          40 * Math.cos(time * 0.001 + i * 1.5);

        ctx.shadowBlur = 10;
        ctx.shadowColor = "#872ff7";
        ctx.fillStyle = `rgba(135, 47, 247, ${
          0.6 + 0.4 * Math.sin(time * 0.002 + i)
        })`;
        ctx.globalAlpha = 0.7;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = (time: number) => {
      drawGrid(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] sm:min-h-screen bg-[#0D0D1F] overflow-hidden"
      style={{
        minHeight:
          "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
        paddingTop: "max(1rem, env(safe-area-inset-top))",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      {/* Background Grid Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Radial Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,13,31,0.8)_80%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
      </div>

      {/* Main Content - Mobile Optimized */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[100svh] sm:min-h-screen text-center px-4 py-8 sm:py-0 max-w-6xl mx-auto">
        <div className="opacity-100 transform translate-y-0 mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#A259FF] font-sans mb-2 sm:mb-4">
            APV E-CELL
          </h1>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-4 sm:mb-8 text-white relative font-sans leading-[1.1] sm:leading-tight">
            <span className="text-white relative z-10">
              Creating Change <br />
              <span className="text-[#A259FF]">Makers</span>
            </span>
          </h2>
        </div>

        <div className="opacity-100 transform translate-y-0 mb-4 sm:mb-0">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#CCCCCC] mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-2">
            Empowering visionaries to transform ideas into reality. <br />
            Building the next generation of entrepreneurs and change-makers at{" "}
            <br className="hidden sm:block" />
            <span className="text-[#A259FF] font-semibold">
              {" "}
              Agnel Polytechnic, Vashi
            </span>
            .
          </p>
        </div>

        <div className="opacity-100 transform translate-y-0 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-2">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="w-full sm:w-auto bg-gradient-to-r from-[#A259FF] to-[#872ff7] text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 border-none cursor-pointer"
          >
            Discover Our Journey
          </button>

          <button
            onClick={() =>
              document
                .getElementById("vision-mission")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="w-full sm:w-auto bg-transparent text-[#A259FF] border-2 border-[#A259FF] px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:bg-[#A259FF] hover:text-white cursor-pointer"
          >
            Our Vision
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small screens to save space */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center text-center">
        <span className="text-sm font-medium mb-2 font-sans text-[#A259FF]">
          Explore More
        </span>
        <button
          onClick={scrollToNext}
          className="text-[#A259FF] hover:text-white transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

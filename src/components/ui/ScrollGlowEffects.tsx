"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";

export function ScrollGlowEffects() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsubscribeScrollY = scrollY.on("change", (latest) => {
      setShowBackToTop(latest > 350);
    });

    const unsubscribeProgress = scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });

    return () => {
      unsubscribeScrollY();
      unsubscribeProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress calculations for Back to Top button
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {/* ── 1. Top Vibrant Glowing Scroll Progress Bar ── */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3.5px] z-[9999] pointer-events-none overflow-hidden" 
        aria-hidden="true"
      >
        <motion.div
          style={{ scaleX }}
          className="h-full w-full origin-left bg-gradient-to-r from-teal-400 via-primary via-50% to-amber-300 shadow-[0_0_12px_rgba(20,184,166,0.85),0_0_24px_rgba(216,183,121,0.5)]"
        />
        {/* Trailing luminous glow bead */}
        <motion.div
          style={{ left: `${scrollPercent}%` }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white blur-[2px] opacity-90 shadow-[0_0_14px_4px_rgba(20,184,166,0.9),0_0_22px_6px_rgba(216,183,121,0.6)] pointer-events-none transition-all duration-75"
        />
      </div>

      {/* ── 2. Floating Ambient Background Glows that drift with scroll ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Soft Teal Aurora Glow (Upper Right) */}
        <div 
          className="absolute top-[15%] right-[-5%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-bl from-teal-300/15 via-soft-teal/20 to-transparent blur-3xl transform-gpu animate-[pulse_7s_ease-in-out_infinite]"
        />
        
        {/* Soft Warm Amber Ambient Glow (Mid-Left) */}
        <div 
          className="absolute top-[48%] left-[-8%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-tr from-amber-400/10 via-soft-teal/15 to-transparent blur-3xl transform-gpu animate-[pulse_9s_ease-in-out_infinite]"
        />
        
        {/* Luminous Pale Blue & Mint Glow (Lower Right) */}
        <div 
          className="absolute bottom-[10%] right-[5%] w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-gradient-to-tl from-pale-blue/25 via-soft-teal/15 to-transparent blur-3xl transform-gpu animate-[pulse_8s_ease-in-out_infinite]"
        />
      </div>

      {/* ── 3. Floating Back to Top Button with Circular Glowing Scroll Meter ── */}
      {showBackToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-32 sm:bottom-24 right-4 sm:right-6 z-40 pointer-events-auto"
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-navy hover:text-primary shadow-[0_4px_20px_rgba(23,59,87,0.12)] hover:shadow-[0_0_24px_rgba(22,124,128,0.35)] transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer touch-target"
          >
            {/* Ambient Pulsing Glow behind button */}
            <div className="absolute inset-0 rounded-full bg-soft-teal opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-300" />

            {/* Circular Progress Meter */}
            <svg className="w-11 h-11 sm:w-12 sm:h-12 -rotate-90 pointer-events-none absolute inset-0 m-auto">
              {/* Background Track */}
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                className="stroke-slate-100/80"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Animated Glowing Progress Stroke */}
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                className="stroke-primary transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Center Arrow Icon */}
            <ArrowUp className="w-4 h-4 text-primary relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200" />
            
            {/* Hover tooltip for desktop */}
            <span className="hidden lg:group-hover:inline-block absolute right-full mr-3 px-2.5 py-1 rounded-xl bg-navy text-white text-[11px] font-bold shadow-lg whitespace-nowrap animate-in fade-in duration-200">
              Top ({scrollPercent}%)
            </span>
          </button>
        </motion.div>
      )}
    </>
  );
}

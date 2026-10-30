"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntro } from "@/context/IntroContext";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function IntroOverlay() {
  const { isIntroPlaying, introFinished, skipIntro, finishIntro } = useIntro();
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    if (!isIntroPlaying || introFinished) return;

    // Show skip button quickly so visitor always has control
    const skipTimer = setTimeout(() => setShowSkip(true), 300);

    // Auto-transition into website at 1.9s
    const exitTimer = setTimeout(() => {
      finishIntro();
    }, 1900);

    // Failsafe guarantee at 2.2s
    const failsafeTimer = setTimeout(() => {
      finishIntro();
    }, 2200);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(exitTimer);
      clearTimeout(failsafeTimer);
    };
  }, [isIntroPlaying, introFinished, finishIntro]);

  if (introFinished || !isIntroPlaying) return null;

  return (
    <AnimatePresence mode="wait">
      {isIntroPlaying && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.04,
            filter: "blur(4px)",
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } 
          }}
          onClick={skipIntro}
          className="fixed inset-0 z-[99999] bg-[#FCFDFB] flex flex-col items-center justify-center overflow-hidden pointer-events-auto select-none cursor-pointer"
          title="Click anywhere to enter"
        >
          {/* Ambient Glowing Aurora Clouds */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Soft Teal Radial Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.6, 0.45] }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[650px] h-[420px] sm:h-[650px] rounded-full bg-gradient-to-tr from-teal-300/35 via-soft-teal/40 to-transparent blur-3xl"
            />
            {/* Warm Amber Accent Glow */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: [0.7, 1.15, 1], opacity: [0, 0.4, 0.3] }}
              transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
              className="absolute top-[45%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-gradient-to-bl from-amber-300/25 via-soft-teal/20 to-transparent blur-3xl"
            />
          </div>

          {/* Central Logo & Rings Presentation */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-xl mx-auto">
            
            {/* Concentric Glowing Wave Rings */}
            <div className="relative flex items-center justify-center mb-6">
              {/* Expanding Ripple Ring 1 */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: [0.8, 1.45, 1.95], opacity: [0.8, 0.35, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-teal-400/50 shadow-[0_0_20px_rgba(20,184,166,0.3)] pointer-events-none"
              />
              {/* Expanding Ripple Ring 2 (Amber accent) */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0.6 }}
                animate={{ scale: [0.7, 1.3, 1.75], opacity: [0.6, 0.25, 0] }}
                transition={{ duration: 1.6, delay: 0.35, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-amber-400/40 shadow-[0_0_18px_rgba(216,183,121,0.25)] pointer-events-none"
              />

              {/* Central Logo Card */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-white p-3 sm:p-3.5 shadow-[0_16px_50px_rgba(22,124,128,0.22)] border border-[#E3EBF0] flex items-center justify-center z-10 group"
              >
                {/* Luminous Inner Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500/10 to-amber-400/10 pointer-events-none" />
                <Image
                  src="/logo.png"
                  alt="Dr. Navya's EndoCare Logo"
                  width={120}
                  height={120}
                  priority
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(22,124,128,0.15)]"
                />
              </motion.div>
            </div>

            {/* Clinic Brand Typography */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Doctor Distinction Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-teal/80 border border-teal-300/40 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
                <span>Endocrine Superspeciality</span>
              </div>

              {/* Main Clinic Name */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-navy uppercase tracking-tight mb-2">
                Dr. Navya’s EndoCare
              </h1>

              {/* Subtitle */}
              <p className="text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.18em] text-slate-600 uppercase px-2 leading-relaxed">
                Diabetes, Thyroid & Hormonal Health Center
              </p>

              {/* Glowing Accent Progress Line */}
              <div className="w-36 sm:w-48 h-1 bg-slate-100 rounded-full mt-4 overflow-hidden relative shadow-inner">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1/2 h-full bg-gradient-to-r from-teal-400 via-primary to-amber-300 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)]"
                />
              </div>
            </motion.div>

          </div>

          {/* Interactive Enter / Skip Button */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  skipIntro();
                }}
                className="absolute bottom-8 sm:bottom-10 right-6 sm:right-10 z-50 flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full text-navy font-bold text-xs sm:text-sm hover:bg-white hover:text-primary transition-all hover:scale-105 shadow-[0_4px_20px_rgba(23,59,87,0.12)] active:scale-95 touch-target cursor-pointer"
              >
                <span>Enter Website</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Subtle click anywhere helper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-medium tracking-wide pointer-events-none hidden sm:block"
          >
            Click anywhere to enter
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

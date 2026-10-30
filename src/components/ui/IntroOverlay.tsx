"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntro } from "@/context/IntroContext";
import { Intro3DCanvas } from "./Intro3DCanvas";
import gsap from "gsap";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function IntroOverlay() {
  const { isIntroPlaying, introFinished, skipIntro, finishIntro } = useIntro();
  const [showSkip, setShowSkip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!isIntroPlaying || introFinished) return;

    // Show skip button after 600ms so visitor always has immediate control
    const skipTimer = setTimeout(() => setShowSkip(true), 600);

    // Initialize GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        finishIntro();
      }
    });

    setTimeline(tl);

    // Text Animations (starts at 3.2 seconds, stays for 2.0s, then smoothly exits as energy ring washes)
    if (textRef.current) {
      const texts = textRef.current.children;
      gsap.set(texts, { y: 25, opacity: 0, filter: "blur(8px)" });
      
      tl.to(texts, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, 3.2);

      // Fade out text cleanly as energy ring expands
      tl.to(texts, {
        y: -20,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.in"
      }, 5.3);
    }

    // Call finishIntro at 6.3 seconds (after energy ring washes the screen at 5.5-6.2s)
    tl.call(() => {
      finishIntro();
    }, [], 6.3);

    // Force end failsafe timer: guaranteed exit at 6.8s
    const endTimer = setTimeout(() => {
      finishIntro();
    }, 6800);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(endTimer);
      tl.kill();
    };
  }, [isIntroPlaying, introFinished, finishIntro]);

  if (introFinished || !isIntroPlaying) return null;

  return (
    <AnimatePresence>
      {isIntroPlaying && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
          }}
          onClick={skipIntro}
          className="fixed inset-0 z-[99999] bg-[#FCFDFB] flex items-center justify-center overflow-hidden pointer-events-auto select-none cursor-pointer"
          title="Click anywhere to skip intro"
        >
          {/* Ambient Subtle Radial Glow */}
          <div className="absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-tr from-soft-teal/40 via-teal-100/20 to-pale-blue/30 blur-3xl pointer-events-none" />

          {/* 3D Visuals — Center organic gland, floating icons, energy ring, and particles */}
          <Intro3DCanvas timeline={timeline} />

          {/* Typography overlay */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center pointer-events-none px-4" ref={textRef}>
            <div className="mb-5 shadow-[0_12px_36px_rgba(22,124,128,0.18)] rounded-3xl bg-white p-2.5 sm:p-3 border border-[#E3EBF0]">
              <Image 
                src="/logo.png" 
                alt="Dr Navya's EndoCare Logo" 
                width={110} 
                height={110} 
                className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                priority
              />
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-navy uppercase tracking-tight mb-1.5 sm:mb-2.5">
              Dr. Navya’s EndoCare
            </h1>
            <p className="text-[10px] sm:text-xs lg:text-sm font-bold tracking-[0.2em] text-primary leading-tight uppercase px-4 max-w-xl mx-auto">
              Diabetes, Thyroid & Endocrine Superspeciality Center
            </p>
          </div>

          {/* Skip Button */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={(e) => {
                  e.stopPropagation();
                  skipIntro();
                }}
                className="absolute bottom-8 right-6 sm:bottom-10 sm:right-10 z-50 flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full text-slate-700 font-bold text-xs sm:text-sm hover:bg-white hover:text-navy transition-all hover:scale-105 shadow-md active:scale-95 touch-target cursor-pointer"
              >
                <span>Skip Intro</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              </motion.button>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

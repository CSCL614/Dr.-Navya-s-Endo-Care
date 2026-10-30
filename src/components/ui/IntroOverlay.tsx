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
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 768);
    }
  }, []);

  useEffect(() => {
    if (!isIntroPlaying || introFinished) return;

    // Show skip button after 400ms so visitors have immediate control
    const skipTimer = setTimeout(() => setShowSkip(true), 400);

    // Initialize GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        finishIntro();
      }
    });

    setTimeline(tl);

    // Text Animations (starts quickly at 0.2s, stays briefly, then finishes)
    if (textRef.current) {
      const texts = textRef.current.children;
      gsap.set(texts, { y: 20, opacity: 0 });
      
      tl.to(texts, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, 0.2);

      // Fade out smoothly
      tl.to(texts, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.in"
      }, 1.6);
    }

    // Call finishIntro at 1.8 seconds
    tl.call(() => {
      finishIntro();
    }, [], 1.8);

    // Hard failsafe timer: guaranteed exit at 2.0s
    const endTimer = setTimeout(() => {
      finishIntro();
    }, 2000);

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
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } 
          }}
          onClick={skipIntro}
          className="fixed inset-0 z-[99999] bg-[#FCFDFB] flex items-center justify-center overflow-hidden pointer-events-auto select-none cursor-pointer"
          title="Click to skip"
        >
          {/* Ambient Subtle Radial Glow */}
          <div className="absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-tr from-soft-teal/40 via-teal-100/20 to-pale-blue/30 blur-3xl pointer-events-none" />

          {/* 3D Visuals — Only render on desktop to protect mobile memory/GPU */}
          {isDesktop && <Intro3DCanvas timeline={timeline} />}

          {/* Typography overlay */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center pointer-events-none px-4" ref={textRef}>
            <div className="mb-4 sm:mb-5 shadow-[0_12px_36px_rgba(22,124,128,0.18)] rounded-3xl bg-white p-2.5 sm:p-3 border border-[#E3EBF0]">
              <Image 
                src="/logo.png" 
                alt="Dr Navya's EndoCare Logo" 
                width={110} 
                height={110} 
                className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                priority
              />
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-navy uppercase tracking-tight mb-1 sm:mb-2">
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
                className="absolute bottom-8 right-6 sm:bottom-10 sm:right-10 z-50 flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full text-slate-700 font-bold text-xs sm:text-sm hover:bg-white hover:text-navy transition-all hover:scale-105 shadow-md active:scale-95 touch-target"
              >
                <span>Enter Website</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              </motion.button>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

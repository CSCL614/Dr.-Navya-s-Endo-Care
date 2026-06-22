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
    if (!isIntroPlaying) return;

    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    // Initialize GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        finishIntro();
      }
    });

    setTimeline(tl);

    // Text Animations (starts at 4 seconds)
    if (textRef.current) {
      const texts = textRef.current.children;
      gsap.set(texts, { y: 30, opacity: 0, filter: "blur(10px)" });
      
      tl.to(texts, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, 4.2);

      // Fade out text at the end
      tl.to(texts, {
        y: -30,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.in"
      }, 5.8);
    }

    // Overlay fade out at the end
    if (containerRef.current) {
      tl.to(containerRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0)",
        duration: 1,
        ease: "power2.inOut"
      }, 6);
    }

    // Force end at 7 seconds to be safe
    const endTimer = setTimeout(() => {
      finishIntro();
    }, 7500);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(endTimer);
      tl.kill();
    };
  }, [isIntroPlaying, finishIntro]);

  if (introFinished) return null;

  return (
    <AnimatePresence>
      {isIntroPlaying && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-slate-50 flex items-center justify-center overflow-hidden"
        >
          {/* 3D Visuals */}
          <Intro3DCanvas timeline={timeline} />

          {/* Typography overlay */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center pointer-events-none" ref={textRef}>
            <div className="mb-6 shadow-2xl shadow-primary/20 rounded-[2rem] bg-white p-2">
              <Image 
                src="/logo.png" 
                alt="Dr Navya's Endo Care Logo" 
                width={120} 
                height={120} 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-dark uppercase tracking-tight mb-2 md:mb-4">
              Dr Navya's Endo Care
            </h1>
            <p className="text-[10px] md:text-sm lg:text-base font-semibold tracking-[0.2em] text-secondary leading-tight uppercase px-4 max-w-2xl mx-auto">
              Diabetes, Thyroid And Endocrine Superspeciality Center
            </p>
          </div>

          {/* Skip Button */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={skipIntro}
                className="absolute bottom-10 right-10 z-50 flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-md border border-slate-200 rounded-full text-slate-600 font-medium hover:bg-white hover:text-slate-900 transition-all hover:scale-105 shadow-sm"
              >
                Skip Intro
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

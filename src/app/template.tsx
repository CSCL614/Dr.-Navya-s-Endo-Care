"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Module-level flag: persists across client-side template remounts
let isFirstPageVisit = true;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // On first load, don't show any transition to prevent overlapping with initial page render
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isFirstPageVisit) {
      isFirstPageVisit = false;
      return;
    }

    setShouldAnimate(true);
    // Smoothly and instantly reset scroll position to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="relative w-full min-h-screen">
      <AnimatePresence mode="wait">
        {shouldAnimate && (
          <>
            {/* 1. Brand-Colored Top Progress Beam */}
            <motion.div
              key={`progress-beam-${pathname}`}
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: [1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 0.5, times: [0, 0.7, 1] },
              }}
              style={{ transformOrigin: "0%" }}
              className="fixed top-0 left-0 right-0 h-[2.5px] z-[9999] pointer-events-none"
            >
              <div className="w-full h-full bg-gradient-to-r from-primary via-primary-light to-accent-warm" />
              <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-primary-light/80 to-transparent blur-sm" />
            </motion.div>

            {/* 2. Subtle overlay fade for smooth content transition */}
            <motion.div
              key={`overlay-${pathname}`}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="fixed inset-0 z-[9990] bg-background/40 pointer-events-none"
            />
          </>
        )}
      </AnimatePresence>

      {/* 3. Page Content Reveal */}
      <motion.div
        key={`page-content-${pathname}`}
        initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

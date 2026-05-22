"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  // We want the overlay to show up immediately when this component mounts (which happens on route change).
  // Then we remove it after a delay so the content beneath is revealed.
  
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1200); // 1.2 seconds total overlay time (logo animations happen during this)
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* 1. The Global Route Transition Overlay */}
      {isAnimating && (
        <motion.div
          key="transition-overlay"
          initial={{ opacity: 1, filter: "blur(0px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }} // Holds for 0.8s, fades out over 0.6s
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-white via-slate-50 to-white flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Glowing background effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
            />
            
            <img 
              src="/logo.png" 
              alt="Loading..." 
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-3xl bg-white shadow-xl relative z-10"
            />
          </motion.div>

          {/* Tagline Animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-6 text-center z-10"
          >
            <h2 className="text-xl md:text-2xl font-bold font-heading text-primary-dark tracking-wide uppercase">
              DR NAVYA'S ENDO CARE
            </h2>
            <p className="text-xs md:text-sm font-semibold text-secondary tracking-widest uppercase mt-1">
              Diabetes, Thyroid & Endocrine Center
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* 2. The Page Content Entrance Animation */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }} // Content waits for overlay to start fading
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </>
  );
}

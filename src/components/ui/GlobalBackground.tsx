"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export function GlobalBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-slate-50">
      {/* Subtle Medical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_40%,transparent_100%)]" />
      
      {/* Floating Soft Orbs - Optimized for Mobile */}
      <motion.div
        animate={{
          scale: isMobile ? [1, 1.05, 1] : [1, 1.2, 1],
          x: isMobile ? [0, 30, 0] : [0, 100, 0],
          y: isMobile ? [0, 20, 0] : [0, 50, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-gradient-to-br from-sky-300/40 to-blue-400/20 blur-[60px] md:blur-[120px] transform-gpu"
        style={{ willChange: "transform, opacity" }}
      />
      
      <motion.div
        animate={{
          scale: isMobile ? [1, 1.1, 1] : [1, 1.3, 1],
          x: isMobile ? [0, -30, 0] : [0, -80, 0],
          y: isMobile ? [0, 40, 0] : [0, 80, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[-10%] w-[70vw] h-[70vw] md:w-[35vw] md:h-[35vw] rounded-full bg-gradient-to-bl from-teal-300/40 to-emerald-300/20 blur-[60px] md:blur-[120px] transform-gpu"
        style={{ willChange: "transform, opacity" }}
      />
      
      <motion.div
        animate={{
          scale: isMobile ? [1, 1.1, 1] : [1, 1.4, 1],
          x: isMobile ? [0, 20, 0] : [0, 60, 0],
          y: isMobile ? [0, -20, 0] : [0, -60, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] md:bottom-[-20%] left-[10%] md:left-[20%] w-[80vw] h-[60vw] md:w-[50vw] md:h-[30vw] rounded-full bg-gradient-to-tr from-primary/20 to-cyan-300/20 blur-[60px] md:blur-[140px] transform-gpu"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Floating Medical Crosses - Reduced count on mobile */}
      {[...Array(isMobile ? 4 : 8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: ["100vh", "-20vh"],
            rotate: [0, 180]
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "linear"
          }}
          className="absolute transform-gpu"
          style={{
            left: `${10 + Math.random() * 80}%`,
            willChange: "transform, opacity"
          }}
        >
          <Plus className="w-6 h-6 md:w-8 md:h-8 text-sky-400/20" />
        </motion.div>
      ))}
    </div>
  );
}

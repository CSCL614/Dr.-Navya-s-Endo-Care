"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative w-full min-h-screen">
      {/* Top Luminous Medical Streamer with Glow */}
      <motion.div
        key={`streamer-${pathname}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.55, times: [0, 0.7, 1] },
        }}
        style={{ transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-400 via-primary to-sky-400 shadow-[0_0_12px_rgba(20,184,166,0.6)] z-[9999] pointer-events-none"
      />

      {/* Ethereal Medical Frosted Sheen (Light & Non-Intrusive) */}
      <motion.div
        key={`sheen-${pathname}`}
        initial={{ opacity: 0.35 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        className="fixed inset-0 z-[9990] bg-gradient-to-b from-sky-50/50 via-white/30 to-teal-50/40 backdrop-blur-[2px] pointer-events-none"
      />

      {/* Smooth Lens-Focus Page Content Reveal */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.36,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}


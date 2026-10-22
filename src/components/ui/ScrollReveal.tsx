"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({
  children,
  width = "100%",
  className = "",
  delay = 0,
  direction = "up"
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  const getVariants = () => {
    switch (direction) {
      case "up": return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
      case "down": return { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
      case "left": return { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } };
      case "right": return { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };
      case "none": return { hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 } };
      default: return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.45, delay: delay, ease: "easeOut" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale" | "glow" | "blur";
  once?: boolean;
  duration?: number;
  distance?: number;
}

export function ScrollReveal({
  children,
  width = "100%",
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  duration = 0.55,
  distance = 24
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -40px 0px" });

  const getVariants = (): Variants => {
    // Highly refined fluid deceleration curve for premium scrolling feel
    const ease = [0.16, 1, 0.3, 1] as const;
    
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease } }
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease } }
        };
      case "left":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease } }
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease } }
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay, ease } }
        };
      case "glow":
        return {
          hidden: { opacity: 0, scale: 0.95, y: distance / 2 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            transition: { duration: duration + 0.15, delay, ease } 
          }
        };
      case "blur":
        return {
          hidden: { opacity: 0, y: distance, filter: "blur(8px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration, delay, ease } }
        };
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay, ease } }
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease } }
        };
    }
  };

  return (
    <div ref={ref} style={{ width }} className={`${className} transform-gpu`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

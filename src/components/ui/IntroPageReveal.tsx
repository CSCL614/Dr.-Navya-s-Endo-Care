"use client";

import React from "react";
import { useIntro } from "@/context/IntroContext";
import { motion } from "framer-motion";

export function IntroPageReveal({ children }: { children: React.ReactNode }) {
  const { introFinished } = useIntro();

  return (
    <motion.div
      initial={false}
      animate={introFinished ? { opacity: 1, y: 0 } : { opacity: 0.98, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full min-h-screen flex flex-col flex-grow"
    >
      {children}
    </motion.div>
  );
}

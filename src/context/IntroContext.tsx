"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface IntroContextType {
  isIntroPlaying: boolean;
  introFinished: boolean;
  skipIntro: () => void;
  finishIntro: () => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export function IntroProvider({ children }: { children: React.ReactNode }) {
  // Start with intro playing on initial load
  const [isIntroPlaying, setIsIntroPlaying] = useState(true);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Lock background scrolling while intro is active
    document.body.style.overflow = "hidden";

    // Failsafe timer: only trigger if animation somehow hangs past 8.0s
    const timer = setTimeout(() => {
      setIsIntroPlaying(false);
      setIntroFinished(true);
      document.body.style.overflow = "";
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const skipIntro = useCallback(() => {
    setIsIntroPlaying(false);
    setIntroFinished(true);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  const finishIntro = useCallback(() => {
    setIsIntroPlaying(false);
    setIntroFinished(true);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  return (
    <IntroContext.Provider value={{ isIntroPlaying, introFinished, skipIntro, finishIntro }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  const context = useContext(IntroContext);
  if (context === undefined) {
    throw new Error("useIntro must be used within an IntroProvider");
  }
  return context;
}

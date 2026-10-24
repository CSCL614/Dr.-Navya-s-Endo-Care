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
  const [isIntroPlaying, setIsIntroPlaying] = useState(true);
  const [introFinished, setIntroFinished] = useState(false);

  // Prevent background scrolling while intro animation is running
  useEffect(() => {
    if (isIntroPlaying && !introFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isIntroPlaying, introFinished]);

  const skipIntro = useCallback(() => {
    setIsIntroPlaying(false);
    setIntroFinished(true);
  }, []);

  const finishIntro = useCallback(() => {
    setIsIntroPlaying(false);
    setIntroFinished(true);
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

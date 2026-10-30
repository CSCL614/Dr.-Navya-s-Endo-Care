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
  // Default to false/true so mobile devices and SSR never get stuck
  const [isIntroPlaying, setIsIntroPlaying] = useState(false);
  const [introFinished, setIntroFinished] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    const alreadyPlayed = sessionStorage.getItem("endocare_intro_seen");

    // On mobile devices or repeat visits, bypass intro completely so page loads immediately
    if (isMobile || alreadyPlayed) {
      setIsIntroPlaying(false);
      setIntroFinished(true);
      document.body.style.overflow = "";
      return;
    }

    // Only on desktop first visits, show brief intro with strict safety timeout
    setIsIntroPlaying(true);
    setIntroFinished(false);
    document.body.style.overflow = "hidden";

    // Absolute safety timeout: never block screen for more than 2.8s under any circumstance
    const safetyTimer = setTimeout(() => {
      setIsIntroPlaying(false);
      setIntroFinished(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("endocare_intro_seen", "true");
    }, 2800);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const skipIntro = useCallback(() => {
    setIsIntroPlaying(false);
    setIntroFinished(true);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
      sessionStorage.setItem("endocare_intro_seen", "true");
    }
  }, []);

  const finishIntro = useCallback(() => {
    setIsIntroPlaying(false);
    setIntroFinished(true);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
      sessionStorage.setItem("endocare_intro_seen", "true");
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

"use client";

import React, { createContext, useContext, useState } from "react";

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

  const skipIntro = () => {
    setIsIntroPlaying(false);
    setIntroFinished(true);
  };

  const finishIntro = () => {
    setIsIntroPlaying(false);
    setIntroFinished(true);
  };

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

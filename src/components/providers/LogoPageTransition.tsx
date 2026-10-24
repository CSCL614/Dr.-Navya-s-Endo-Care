"use client";

import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface PageTransitionContextType {
  isTransitioning: boolean;
  navigateTo: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  navigateTo: () => {},
});

export const usePageTransition = () => useContext(PageTransitionContext);

export function LogoPageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const targetPathRef = useRef<string | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousPathnameRef = useRef(pathname);

  // Update children when pathname changes
  useEffect(() => {
    setDisplayedChildren(children);
  }, [children]);

  // Clear safety timeout helper
  const clearSafetyTimeout = useCallback(() => {
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }
  }, []);

  // Programmatic navigation with logo transition
  const navigateTo = useCallback((href: string) => {
    // Check if external, hash on same page, or same URL
    try {
      const currentUrl = new URL(window.location.href);
      const targetUrl = new URL(href, window.location.href);

      // External or same origin check
      if (targetUrl.origin !== currentUrl.origin) {
        window.location.href = href;
        return;
      }

      // Same page and same search query (only hash change)
      if (targetUrl.pathname === currentUrl.pathname && targetUrl.search === currentUrl.search) {
        if (targetUrl.hash) {
          const el = document.getElementById(targetUrl.hash.slice(1));
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
        return;
      }

      // Valid internal page change -> trigger transition
      targetPathRef.current = targetUrl.pathname;
      setIsTransitioning(true);

      clearSafetyTimeout();
      // Safety failsafe: never let overlay get stuck longer than 1000ms
      safetyTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        targetPathRef.current = null;
      }, 1000);

      // Brief delay to allow overlay to fade in before Next.js changes route
      setTimeout(() => {
        router.push(href);
      }, 140);
    } catch {
      router.push(href);
    }
  }, [router, clearSafetyTimeout]);

  // Intercept all internal <a> tag clicks globally
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Exclude special protocols and targets
      if (
        href.startsWith("#") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.startsWith("javascript:") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
      ) {
        return;
      }

      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(anchor.href, window.location.href);

        // Ignore external links
        if (targetUrl.origin !== currentUrl.origin) return;

        // Ignore same page anchor scrolls
        if (targetUrl.pathname === currentUrl.pathname && targetUrl.search === currentUrl.search) {
          return;
        }

        // Intercept internal page navigation
        e.preventDefault();
        navigateTo(href);
      } catch {
        // Fallback to native navigation if URL parsing fails
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, [navigateTo]);

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setIsTransitioning(true);
      clearSafetyTimeout();
      safetyTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [clearSafetyTimeout]);

  // When pathname changes (Next.js finished route update)
  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      previousPathnameRef.current = pathname;

      // Scroll immediately to top on new page load
      window.scrollTo({ top: 0, behavior: "instant" });

      if (isTransitioning) {
        // Hold the logo briefly for elegant brand visibility, then smoothly dismiss
        const finishTimer = setTimeout(() => {
          setIsTransitioning(false);
          targetPathRef.current = null;
        }, 220);

        return () => clearTimeout(finishTimer);
      }
    }
  }, [pathname, isTransitioning]);

  // Cleanup safety timers
  useEffect(() => {
    return () => clearSafetyTimeout();
  }, [clearSafetyTimeout]);

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, navigateTo }}>
      {/* Page Content with subtle enter animation on route change */}
      <motion.div
        key={pathname}
        initial={{ opacity: shouldReduceMotion ? 1 : 0.85, y: shouldReduceMotion ? 0 : 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex-grow flex flex-col"
      >
        {displayedChildren}
      </motion.div>

      {/* Premium Logo Transition Overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[99990] bg-[#FCFDFB]/95 backdrop-blur-md flex flex-col items-center justify-center pointer-events-auto select-none"
            aria-live="polite"
            aria-busy="true"
          >
            {/* Ambient Radial Teal Glow */}
            <div 
              className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-tr from-soft-teal/50 via-teal-100/30 to-pale-blue/40 blur-3xl pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Central Animated Logo Container */}
            <div className="relative flex flex-col items-center justify-center z-10 px-6 text-center">
              
              {/* Outer Pulsing Rings (respects reduced motion) */}
              <div className="relative flex items-center justify-center mb-5">
                {!shouldReduceMotion && (
                  <>
                    {/* Expanding Pulse Ring 1 */}
                    <motion.div
                      initial={{ scale: 0.85, opacity: 0.7 }}
                      animate={{ scale: [0.85, 1.35, 1.75], opacity: [0.7, 0.3, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: "easeOut" }}
                      className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-primary/30 pointer-events-none"
                    />

                    {/* Expanding Pulse Ring 2 (Offset) */}
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0.5 }}
                      animate={{ scale: [0.7, 1.2, 1.5], opacity: [0.5, 0.2, 0] }}
                      transition={{ duration: 0.9, delay: 0.25, repeat: Infinity, ease: "easeOut" }}
                      className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-teal-400/35 pointer-events-none"
                    />
                  </>
                )}

                {/* Logo Halo Frame */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0.92, opacity: 0 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { scale: 0.96, opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.15 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white p-2.5 shadow-[0_8px_30px_rgba(22,124,128,0.18)] border border-[#E3EBF0] flex items-center justify-center z-10"
                >
                  <Image
                    src="/logo.png"
                    alt="Dr. Navya's EndoCare Logo"
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>

              {/* Clinic Branding Typography */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : 0.1, ease: "easeOut" }}
                className="space-y-1"
              >
                <div className="text-sm sm:text-base font-extrabold font-heading text-navy tracking-tight uppercase">
                  Dr. Navya’s EndoCare
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-primary tracking-wider uppercase">
                  Diabetes, Thyroid & Endocrine Superspeciality
                </div>
              </motion.div>

              {/* Sleek Animated Progress Indicator */}
              <div className="w-28 sm:w-36 h-1 bg-soft-teal rounded-full mt-4 overflow-hidden relative">
                {!shouldReduceMotion ? (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/40 rounded-full" />
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Phone, CalendarHeart, MessageCircle, ArrowUp } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { motion, AnimatePresence } from "framer-motion";

export function MobileActionDock() {
  const { openModal } = useAppointment();
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 240);
      setShowBackToTop(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Back to Top Button (Subtle, Accessible) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="fixed bottom-24 sm:bottom-22 right-4 sm:right-6 z-40 w-10 h-10 rounded-full bg-white text-navy border border-border shadow-md hover:bg-soft-teal hover:text-primary flex items-center justify-center transition-colors active:scale-95 touch-target"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Pinned Bottom Mobile Action Dock */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(23,59,87,0.08)] py-2 px-3 sm:hidden"
            style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center gap-2 max-w-md mx-auto">
              {/* Quick Call */}
              <a
                href="tel:8464070196"
                aria-label="Call clinic directly at 8464070196"
                className="flex-1 h-11 px-3 bg-soft-teal hover:bg-soft-teal-dark text-primary font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 border border-primary/20 active:scale-98 transition-all touch-target"
              >
                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="truncate">Call Clinic</span>
              </a>

              {/* Primary Book Appointment */}
              <button
                onClick={openModal}
                className="flex-[1.4] h-11 px-3 bg-primary hover:bg-primary-dark text-white font-bold text-xs rounded-xl shadow-soft flex items-center justify-center gap-1.5 active:scale-98 transition-all touch-target"
              >
                <CalendarHeart className="w-4 h-4 text-white shrink-0" />
                <span className="truncate">Book Appointment</span>
              </button>

              {/* Quick WhatsApp Icon */}
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Dr. Navya’s EndoCare on WhatsApp"
                className="w-11 h-11 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/70 flex items-center justify-center shrink-0 active:scale-95 transition-colors touch-target"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

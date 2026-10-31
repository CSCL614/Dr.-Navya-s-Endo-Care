"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PHONE_NUMBER = "918464070196";

const QUICK_QUERIES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    label: "Book Appointment with Dr. Navya",
    message: "Hi, I would like to book an appointment with Dr. Navya Sruthi Mandapati at EndoCare, Vizianagaram.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    label: "Second Opinion on Blood Reports / Scans",
    message: "Hi Dr. Navya, I would like a specialist second opinion on my thyroid/diabetes lab reports.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
    label: "Urgent Diabetes / Thyroid Guidance",
    message: "Hi, I need urgent consultation guidance regarding fluctuating sugar levels / thyroid symptoms.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Clinic OPD Timings & Location",
    message: "Hi, please share Dr. Navya's EndoCare clinic OPD timings, address and location in Vizianagaram.",
  },
];

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
    }
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  function openWhatsApp(message: string) {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
    setCustomMessage("");
  }

  function handleSendCustom() {
    const msg = customMessage.trim();
    if (!msg) return;
    openWhatsApp(msg);
  }

  return (
    <>
      {/* ── Chat Popup Panel (Mobile Compact & Responsive) ── */}
      <AnimatePresence>
        {isOpen && (
          <div
            ref={panelRef}
            className="fixed bottom-[74px] sm:bottom-24 right-2.5 sm:right-6 z-50 pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 14 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="w-[300px] xs:w-[325px] sm:w-[370px] max-w-[calc(100vw-1.25rem)] max-h-[calc(100dvh-95px)] sm:max-h-[560px] flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_45px_rgba(15,27,40,0.3)] border border-slate-200/90 bg-[#F4F7F9]"
            >
              {/* ── Header ── */}
              <div className="shrink-0 bg-[#0F202E] px-3.5 sm:px-5 pt-3 sm:pt-4 pb-2.5 sm:pb-3 text-white relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close WhatsApp chat"
                  className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <div className="flex items-center gap-2.5 sm:gap-3 pr-7 sm:pr-8">
                  {/* Doctor Avatar */}
                  <div className="relative shrink-0">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/80 bg-slate-800">
                      <Image
                        src="/images/dr-navya-sruthi-mandapati.jpg"
                        alt="Dr. Navya Sruthi Mandapati"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online Badge */}
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-emerald-500 border-2 border-[#0F202E] rounded-full" />
                  </div>

                  {/* Doctor Info */}
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-[13px] sm:text-[15px] leading-tight tracking-tight truncate font-sans">
                      Dr. Navya Sruthi Mandapati
                    </h3>
                    <p className="text-slate-300/85 text-[10.5px] sm:text-[12px] leading-tight truncate mt-0.5">
                      EndoCare Clinic • Vizianagaram
                    </p>
                  </div>
                </div>

                {/* Sub-header info row */}
                <div className="flex items-center justify-between mt-2 pt-2 sm:mt-3 sm:pt-2.5 border-t border-white/10 text-[10.5px] sm:text-[11.5px]">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online</span>
                    <span className="text-white/40">•</span>
                    <span className="text-slate-300/80">Direct WhatsApp</span>
                  </div>
                  <a
                    href="tel:8464070196"
                    className="text-amber-300 hover:text-amber-200 transition-colors font-medium shrink-0"
                  >
                    +91 84640 70196
                  </a>
                </div>
              </div>

              {/* ── Message & Options Body (Scrollable) ── */}
              <div className="flex-1 overflow-y-auto p-2.5 sm:p-4 space-y-2 sm:space-y-2.5">
                {/* Intro bubble */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm border border-slate-100">
                  <p className="text-slate-900 font-semibold text-[12px] sm:text-[13.5px] leading-snug">
                    Hello! How can we assist you with endocrine & diabetes care today?
                  </p>
                  <p className="text-slate-500 text-[11px] sm:text-[12px] mt-1 sm:mt-1.5 leading-relaxed">
                    Tap a quick topic below or type your enquiry to chat directly on WhatsApp:
                  </p>
                </div>

                {/* Quick Topics */}
                {QUICK_QUERIES.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => openWhatsApp(query.message)}
                    className="w-full flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 bg-white hover:bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200/85 shadow-sm hover:shadow transition-all group text-left cursor-pointer active:scale-[0.98]"
                  >
                    {/* Warm tinted icon container */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5E6] text-[#C27803] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {query.icon}
                    </div>
                    <span className="text-[12px] sm:text-[13.5px] font-semibold text-slate-800 group-hover:text-teal-700 transition-colors leading-snug">
                      {query.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* ── Footer Input Area ── */}
              <div className="shrink-0 bg-white border-t border-slate-200/80 p-2.5 sm:p-3 flex items-center gap-2">
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendCustom();
                  }}
                  placeholder="Type message here..."
                  className="flex-1 h-9 sm:h-10 px-3 sm:px-3.5 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl text-[12px] sm:text-[13px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-teal-600 transition-all"
                />
                <button
                  onClick={handleSendCustom}
                  aria-label="Send WhatsApp message"
                  className="h-9 sm:h-10 px-3.5 sm:px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[12px] sm:text-[13px] rounded-lg sm:rounded-xl flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer shrink-0"
                >
                  <span>Chat</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Floating WhatsApp Trigger Button (Proportional on Mobile) ── */}
      <div className="fixed bottom-16 sm:bottom-6 right-3.5 sm:right-6 z-40 pointer-events-auto">
        <div className="relative">
          {/* Subtle pulse ring when closed */}
          {!isOpen && (
            <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-30 pointer-events-none" />
          )}
          <motion.button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat assistance"}
            className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-colors cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 sm:w-7 sm:h-7 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
}

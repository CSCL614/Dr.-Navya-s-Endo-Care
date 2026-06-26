"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, User, Phone, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { popupConfig, upcomingEvents, HospitalEvent } from "@/data/events";
import { useIntro } from "@/context/IntroContext";

export function EventPopup() {
  const { isIntroPlaying } = useIntro();
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [activeEvent, setActiveEvent] = useState<HospitalEvent | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // 1. Check if popup is globally enabled and event exists
    if (!popupConfig.enabled) return;
    
    // Wait for intro animation to finish
    if (isIntroPlaying) return;
    
    let event = upcomingEvents.find(e => e.id === popupConfig.activeEventId);
    const now = new Date().getTime();
    
    // If the configured event is expired or doesn't exist, find the next valid one
    if (!event || new Date(event.date).getTime() < now) {
      event = upcomingEvents.find(e => new Date(e.date).getTime() > now);
    }

    if (!event) return; // No upcoming events available
    
    setActiveEvent(event);

    // 2. Check localStorage to see if user dismissed it
    const hideUntil = localStorage.getItem("eventPopupHideUntil");
    if (hideUntil && new Date().getTime() < parseInt(hideUntil)) {
      return; // Still hiding
    }

    // 3. Show popup after a slight delay for better UX
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isIntroPlaying]);

  // Countdown Timer Logic
  useEffect(() => {
    if (!activeEvent) return;

    const timer = setInterval(() => {
      const eventDate = new Date(activeEvent.date).getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        // Time is over, find the next event
        const nextEvent = upcomingEvents.find(e => new Date(e.date).getTime() > now);
        if (nextEvent) {
          setActiveEvent(nextEvent); // Switch to the new event
        } else {
          setIsOpen(false); // Close if there are no more upcoming events
        }
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeEvent]);

  const handleClose = () => {
    setIsOpen(false);
    if (dontShowAgain) {
      // Set expiration based on config
      const expireTime = new Date().getTime() + (popupConfig.autoHideDays * 24 * 60 * 60 * 1000);
      localStorage.setItem("eventPopupHideUntil", expireTime.toString());
    }
  };

  const handleRegister = () => {
    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#14b8a6', '#38bdf8', '#ffffff']
    });

    // Open whatsapp
    if (activeEvent?.whatsappNumber) {
      const message = encodeURIComponent(`Hi, I would like to register for the upcoming event: ${activeEvent.title}`);
      window.open(`https://wa.me/${activeEvent.whatsappNumber}?text=${message}`, '_blank');
    }
  };

  if (!activeEvent) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 p-2 bg-white/50 hover:bg-white text-slate-700 rounded-full backdrop-blur-sm transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image Side */}
            <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden bg-slate-100 group">
              <img 
                src={activeEvent.imageUrl} 
                alt={activeEvent.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  Upcoming Event
                </span>
                <div className="grid grid-cols-4 gap-2 text-center bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold font-heading">{timeLeft.days}</span>
                    <span className="text-[10px] uppercase opacity-80">Days</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold font-heading">{timeLeft.hours}</span>
                    <span className="text-[10px] uppercase opacity-80">Hrs</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold font-heading">{timeLeft.minutes}</span>
                    <span className="text-[10px] uppercase opacity-80">Min</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold font-heading">{timeLeft.seconds}</span>
                    <span className="text-[10px] uppercase opacity-80">Sec</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content Side */}
            <div className="w-full md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col overflow-y-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-800 mb-3 leading-tight">
                {activeEvent.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {activeEvent.description}
              </p>

              <div className="space-y-4 mb-8 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</p>
                    <p className="text-slate-700 font-medium">{new Date(activeEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Time</p>
                    <p className="text-slate-700 font-medium">{activeEvent.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Venue</p>
                    <p className="text-slate-700 font-medium">{activeEvent.venue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Conducted By</p>
                    <p className="text-slate-700 font-medium">{activeEvent.conductedBy}</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <button 
                    onClick={handleRegister}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    WhatsApp Registration
                  </button>
                  <a 
                    href={`tel:${activeEvent.contact}`}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <input 
                    type="checkbox" 
                    id="dontShow" 
                    checked={dontShowAgain}
                    onChange={(e) => setDontShowAgain(e.target.checked)}
                    className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary"
                  />
                  <label htmlFor="dontShow" className="text-sm text-slate-500 cursor-pointer select-none">
                    Do not show this again
                  </label>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

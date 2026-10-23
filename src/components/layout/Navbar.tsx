"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Phone, CalendarHeart, MessageCircle, ChevronRight, 
  Award, Home, UserCheck, Stethoscope, Activity, Scale, 
  Sparkles, BookOpen, MapPin 
} from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useAppointment } from "@/context/AppointmentContext";
import Image from "next/image";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// Exactly matching pages across desktop and mobile (Events & Camps removed)
const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Dr. Navya", href: "/about", icon: UserCheck, badge: "Gold Medalist" },
  { name: "Specialities", href: "/services", icon: Stethoscope },
  { name: "Diabetes Care", href: "/diabetes-care", icon: Activity, badge: "Speciality" },
  { name: "Obesity Clinic", href: "/obesity-clinic", icon: Scale, badge: "Wed 4–6 PM", highlight: true },
  { name: "Thyroid Care", href: "/thyroid-care", icon: Sparkles },
  { name: "Patient Resources", href: "/patient-resources", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: MapPin },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useAppointment();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-[300ms]",
        mobileMenuOpen
          ? "py-2 bg-white border-b border-border shadow-xs"
          : isScrolled
            ? "py-1.5 sm:py-2 bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(23,59,87,0.06),0_4px_16px_rgba(23,59,87,0.04)] border-b border-border/40"
            : "py-2 sm:py-2.5 bg-white/85 backdrop-blur-md border-b border-border/20"
      )}
    >
      <div className="container mx-auto px-2.5 sm:px-6 flex items-center justify-between max-w-7xl">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2.5 z-50 min-w-0 group py-1">
          <Image 
            src="/logo.png" 
            alt="Dr Navya's Endo Care Logo" 
            width={48} 
            height={48} 
            className={cn(
              "object-contain rounded-xl bg-white shadow-2xs shrink-0 transition-all duration-300",
              isScrolled ? "w-7 h-7 sm:w-9 sm:h-9" : "w-8 h-8 sm:w-10 sm:h-10"
            )}
            priority
          />
          <div className="flex flex-col justify-center min-w-0">
            <span className="text-[11.5px] min-[360px]:text-[12.5px] min-[390px]:text-[13.5px] sm:text-base font-extrabold font-heading text-navy leading-none uppercase tracking-tight group-hover:text-primary transition-colors duration-200 whitespace-nowrap">
              DR. NAVYA&apos;S ENDOCARE
            </span>
            {/* Responsive sub-heading that never overflows */}
            <span className="text-[7.5px] min-[375px]:text-[8px] sm:text-[8.5px] font-bold text-primary sm:text-text-secondary tracking-wider sm:tracking-wide uppercase leading-tight mt-0.5 block truncate">
              <span className="sm:hidden">Endocrine & Diabetes Clinic</span>
              <span className="hidden sm:inline">Diabetes, Thyroid & Endocrine Superspeciality</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-xs 2xl:text-sm font-medium transition-all duration-200 hover:text-primary whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg flex items-center gap-1.5",
                  isActive 
                    ? "text-primary font-semibold bg-soft-teal/40" 
                    : "text-navy/75 hover:bg-soft-teal/20"
                )}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-0.5 left-2.5 right-2.5 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center space-x-3">
          <a
            href="tel:8464070196"
            className="flex items-center space-x-2 text-xs xl:text-sm font-semibold text-navy/90 hover:text-primary transition-all duration-200 group px-3.5 py-2 rounded-full bg-soft-teal/50 border border-primary/15 hover:bg-soft-teal hover:border-primary/25 shadow-xs"
            title="Direct Clinic Line: 8464070196"
          >
            <div className="p-1.5 bg-primary rounded-full text-white shadow-2xs group-hover:scale-110 transition-transform">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-navy">8464070196</span>
          </a>

          <button 
            onClick={openModal}
            className="bg-primary hover:bg-primary-dark text-white px-4 xl:px-5 py-2.5 rounded-full font-semibold shadow-soft hover:shadow-glow whitespace-nowrap text-xs xl:text-sm transition-all duration-200 active:scale-[0.97] hover:-translate-y-0.5"
          >
            <CalendarHeart className="w-4 h-4 mr-1.5 inline" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Quick Action & Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden shrink-0">
          {/* Quick Call Button (hidden when menu is open to keep header completely clean) */}
          <AnimatePresence>
            {!mobileMenuOpen && (
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                href="tel:8464070196"
                className="inline-flex items-center gap-1 px-2 py-1.5 sm:px-3 bg-soft-teal hover:bg-soft-teal-dark text-primary font-bold text-xs rounded-full border border-primary/25 shadow-2xs transition-all active:scale-95"
                title="Call Clinic: 8464070196"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <Phone className="w-2.5 h-2.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-navy">
                  <span className="sm:hidden">Call</span>
                  <span className="hidden sm:inline">8464070196</span>
                </span>
              </motion.a>
            )}
          </AnimatePresence>

          {/* Quick Book Button for small tablets / medium phones when menu closed */}
          {!mobileMenuOpen && (
            <button
              onClick={openModal}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 bg-primary hover:bg-primary-dark text-white font-bold text-xs rounded-full shadow-xs active:scale-95 transition-all"
            >
              <CalendarHeart className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
          )}

          {/* Menu Toggle Button */}
          <button
            className={cn(
              "w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all border duration-200 active:scale-95 focus:outline-none",
              mobileMenuOpen 
                ? "bg-primary text-white border-primary shadow-xs" 
                : "bg-slate-100/90 text-navy hover:bg-soft-teal/50 border-slate-200/80"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div 
                  key="close" 
                  initial={{ rotate: -90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: 90, opacity: 0 }} 
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              ) : (
                <motion.div 
                  key="menu" 
                  initial={{ rotate: 90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: 90, opacity: 0 }} 
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Full-Featured Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 w-full bg-white z-50 flex flex-col border-t border-border shadow-2xl xl:hidden"
            style={{ height: "calc(100dvh - 52px)", maxHeight: "calc(100dvh - 52px)" }}
          >
            {/* Scrollable Navigation Body */}
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain py-2.5 px-2.5 sm:px-5 space-y-2.5">
              {/* Doctor Mini Profile Card */}
              <div className="p-2.5 sm:p-3 bg-gradient-to-r from-soft-teal/70 via-pale-blue/50 to-white rounded-2xl border border-primary/20 flex items-center justify-between gap-2 sm:gap-3 shadow-2xs">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shrink-0 border-2 border-primary/30 bg-white shadow-2xs">
                    <Image 
                      src="/images/dr-navya-sruthi-mandapati.jpg" 
                      alt="Dr. Navya Sruthi Mandapati"
                      fill
                      sizes="44px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] font-bold text-accent-warm uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3 h-3 text-accent-warm shrink-0" />
                      <span className="truncate">DM University Topper</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-navy font-heading truncate">
                      Dr. Navya Sruthi M.
                    </div>
                    <div className="text-[9.5px] sm:text-[10px] text-text-secondary truncate">
                      MD, DM (Endocrinology)
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <span className="inline-flex items-center gap-1 text-[8.5px] sm:text-[9px] font-bold text-emerald-700 bg-emerald-100/90 px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-300/60 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] text-text-muted block mt-0.5 font-medium whitespace-nowrap">9 AM – 8 PM</span>
                </div>
              </div>

              {/* Navigation List — Exactly matching desktop pages */}
              <div className="space-y-0.5">
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider px-2 pt-0.5 pb-0.5">
                  Menu & Care Programs
                </div>
                <nav className="flex flex-col space-y-0.5">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.02, duration: 0.18 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-xl flex items-center justify-between text-xs sm:text-sm font-medium transition-all active:scale-[0.99]",
                            isActive 
                              ? "bg-soft-teal/70 text-primary font-bold shadow-2xs border-l-4 border-primary" 
                              : "text-navy/85 hover:bg-soft-teal/30 active:bg-soft-teal/50"
                          )}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={cn(
                              "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                              isActive 
                                ? "bg-primary text-white" 
                                : link.highlight 
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-slate-100 text-navy/70"
                            )}>
                              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <span className="truncate">{link.name}</span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                            {link.badge && (
                              <span className={cn(
                                "text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider hidden min-[360px]:inline-flex",
                                link.highlight 
                                  ? "bg-amber-100 text-amber-800 border border-amber-300"
                                  : "bg-primary/10 text-primary border border-primary/20"
                              )}>
                                {link.badge}
                              </span>
                            )}
                            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-muted" />
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Bottom Pinned High-Conversion Action Dock */}
            <div className="p-2.5 sm:p-4 bg-slate-50 border-t border-border flex flex-col gap-2 shrink-0 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] z-10">
              {/* Primary Book Appointment Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full py-2.5 sm:py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-xs sm:text-sm shadow-soft flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
              >
                <CalendarHeart className="w-4 h-4 text-white" />
                <span>Book Appointment Online</span>
              </button>

              {/* Two-Column Quick Contact */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:8464070196"
                  className="py-2 sm:py-2.5 px-2.5 bg-soft-teal hover:bg-soft-teal-dark text-navy rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-primary/15 active:scale-98"
                >
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate">
                    <span className="min-[360px]:hidden">Call Us</span>
                    <span className="hidden min-[360px]:inline">Call: 8464070196</span>
                  </span>
                </a>
                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 sm:py-2.5 px-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-emerald-200/60 active:scale-98"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Location Snippet */}
              <div className="text-[9.5px] sm:text-[10px] text-text-muted text-center pt-0.5 border-t border-border/60 truncate">
                📍 Raja Bazaar / Phool Bagh Rd, Ambati Satram Area, Vizianagaram
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

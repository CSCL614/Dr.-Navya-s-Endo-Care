"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarHeart, MessageCircle, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useAppointment } from "@/context/AppointmentContext";
import Image from "next/image";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const mainNavLinks = [
  { name: "Home", href: "/" },
  { name: "About Dr. Navya", href: "/about" },
  { name: "Specialities", href: "/services" },
  { name: "Diabetes Care", href: "/diabetes-care" },
  { name: "Obesity Clinic", href: "/obesity-clinic" },
  { name: "Patient Resources", href: "/patient-resources" },
  { name: "Contact", href: "/contact" },
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        isScrolled
          ? "py-1.5 bg-white/92 backdrop-blur-xl shadow-[0_1px_3px_rgba(23,59,87,0.06),0_4px_16px_rgba(23,59,87,0.04)] border-b border-border/40"
          : "py-2.5 bg-white/70 backdrop-blur-md border-b border-border/20"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 z-50 mr-4 group">
          <Image 
            src="/logo.png" 
            alt="Dr Navya's Endo Care Logo" 
            width={54} 
            height={54} 
            className={cn(
              "object-contain rounded-xl bg-white shadow-xs flex-shrink-0 transition-all duration-300",
              isScrolled ? "w-9 h-9 md:w-10 md:h-10" : "w-10 h-10 md:w-11 md:h-11"
            )}
          />
          <div className="flex flex-col justify-center">
            <span className="text-xs sm:text-sm md:text-base font-bold font-heading text-navy leading-none uppercase mb-0.5 group-hover:text-primary transition-colors duration-200">
              DR. NAVYA&apos;S ENDO CARE
            </span>
            <span className="text-[6.5px] sm:text-[7.5px] md:text-[8.5px] font-semibold tracking-wide text-text-secondary leading-tight uppercase whitespace-nowrap">
              DIABETES, THYROID & ENDOCRINE SUPERSPECIALITY CENTER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-xs 2xl:text-sm font-medium transition-all duration-200 hover:text-primary whitespace-nowrap px-3 py-2 rounded-lg flex items-center gap-1.5",
                  isActive 
                    ? "text-primary font-semibold bg-soft-teal/40" 
                    : "text-navy/75 hover:bg-soft-teal/20"
                )}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-0.5 left-3 right-3 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
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

        {/* Mobile Direct Call & Menu Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="tel:8464070196"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-soft-teal hover:bg-soft-teal-dark text-primary font-bold text-xs rounded-full border border-primary/25 shadow-xs transition-colors"
            title="Call Clinic: 8464070196"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>8464070196</span>
          </a>

          <button
            className="p-2 text-navy z-50 focus:outline-none rounded-lg hover:bg-soft-teal/50 transition-colors duration-150"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay — premium glass panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-40 xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl mx-3 mt-1 p-5 rounded-2xl shadow-elevated border border-border/50 flex flex-col space-y-3 xl:hidden max-h-[85vh] overflow-y-auto z-50"
            >
              <nav className="flex flex-col text-sm">
                {mainNavLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "py-3 px-3 font-medium transition-all duration-150 flex items-center justify-between rounded-xl",
                        pathname === link.href 
                          ? "text-primary font-semibold bg-soft-teal/40" 
                          : "text-navy/80 hover:bg-soft-teal/20"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-text-muted" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="pt-3 flex flex-col space-y-2 border-t border-border">
                <a
                  href="tel:8464070196"
                  className="flex items-center justify-center space-x-2 p-3 bg-soft-teal text-navy rounded-xl font-bold text-sm transition-colors duration-150 hover:bg-soft-teal-dark"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call Clinic: 8464070196</span>
                </a>
                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 bg-emerald-50 text-emerald-800 rounded-xl font-bold text-sm transition-colors duration-150 hover:bg-emerald-100"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: 8464070196</span>
                </a>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }}
                  className="flex items-center justify-center space-x-2 bg-primary text-white p-3 rounded-xl font-semibold shadow-soft text-sm transition-all duration-200 active:scale-[0.98] hover:bg-primary-dark"
                >
                  <CalendarHeart className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarHeart, ChevronDown, MessageCircle } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useAppointment } from "@/context/AppointmentContext";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { upcomingEvents } from "@/data/events";
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

const secondaryLinks = [
  { name: "Events & Camps", href: "/events" },
  { name: "Clinic Gallery", href: "/gallery" },
  { name: "Patient Results", href: "/before-and-after" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useAppointment();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-2 glass shadow-sm" : "py-3 bg-white/90 backdrop-blur-md border-b border-slate-100"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 z-50 mr-4">
          <Image 
            src="/logo.png" 
            alt="Dr Navya's Endo Care Logo" 
            width={54} 
            height={54} 
            className="w-10 h-10 md:w-11 md:h-11 object-contain rounded-xl bg-white shadow-xs flex-shrink-0"
          />
          <div className="flex flex-col justify-center">
            <span className="text-xs sm:text-sm md:text-base font-bold font-heading text-primary-dark leading-none uppercase mb-0.5">
              DR. NAVYA'S ENDO CARE
            </span>
            <span className="text-[6.5px] sm:text-[7.5px] md:text-[8.5px] font-semibold tracking-wide text-secondary leading-tight uppercase whitespace-nowrap">
              DIABETES, THYROID & ENDOCRINE SUPERSPECIALITY CENTER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-xs 2xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap py-1",
                  isActive ? "text-primary font-bold" : "text-slate-700"
                )}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}

          {/* More Dropdown for Gallery, Events, Before & After */}
          <div 
            className="relative"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <button 
              className={cn(
                "flex items-center gap-1 text-xs 2xl:text-sm font-medium transition-colors hover:text-primary py-1",
                secondaryLinks.some(l => pathname === l.href) ? "text-primary font-bold" : "text-slate-700"
              )}
            >
              <span>More</span>
              <ChevronDown className="w-3.5 h-3.5" />
              {upcomingEvents.length > 0 && (
                <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 ml-0.5"></span>
              )}
            </button>

            <AnimatePresence>
              {moreDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-1 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                >
                  {secondaryLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={cn(
                        "block px-4 py-2 text-xs font-medium hover:bg-teal-50 hover:text-primary transition-colors",
                        pathname === sub.href ? "text-primary font-bold bg-teal-50/50" : "text-slate-700"
                      )}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="tel:8464070196"
            className="flex items-center space-x-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-primary transition-colors group"
          >
            <div className="p-2 bg-teal-50 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="hidden xl:inline font-bold">8464070196</span>
          </a>

          <a
            href="https://wa.me/918464070196"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors group px-2.5 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100"
            title="Chat on WhatsApp: 8464070196"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-bold">WhatsApp</span>
          </a>

          <MagneticButton 
            onClick={openModal}
            className="bg-primary hover:bg-primary-dark text-white px-4 xl:px-5 py-2.5 rounded-full font-semibold shadow-soft hover:shadow-glow whitespace-nowrap text-xs xl:text-sm"
          >
            <CalendarHeart className="w-4 h-4 mr-1.5 inline" />
            <span>Book Appointment</span>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden p-2 text-slate-800 z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white mx-3 mt-1 p-5 rounded-2xl shadow-2xl border border-slate-100 flex flex-col space-y-3 xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col divide-y divide-slate-100 text-sm">
              {[...mainNavLinks, ...secondaryLinks].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "py-2.5 font-medium transition-colors flex items-center justify-between",
                    pathname === link.href ? "text-primary font-bold" : "text-slate-700"
                  )}
                >
                  <span>{link.name}</span>
                  {link.name === "Events & Camps" && upcomingEvents.length > 0 && (
                    <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">New</span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="pt-3 flex flex-col space-y-2 border-t border-slate-100">
              <a
                href="tel:8464070196"
                className="flex items-center justify-center space-x-2 p-3 bg-teal-50 text-teal-800 rounded-xl font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Clinic: 8464070196</span>
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 p-3 bg-emerald-50 text-emerald-800 rounded-xl font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: 8464070196</span>
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="flex items-center justify-center space-x-2 bg-primary text-white p-3 rounded-xl font-semibold shadow-soft text-sm"
              >
                <CalendarHeart className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarHeart } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useAppointment } from "@/context/AppointmentContext";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { upcomingEvents } from "@/data/events";

import Image from "next/image";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Before & After", href: "/before-and-after" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-2 glass shadow-sm" : "py-3 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 z-50 mr-4">
          <Image 
            src="/logo.png" 
            alt="Dr Navya's Endo Care Logo" 
            width={60} 
            height={60} 
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain rounded-xl bg-white shadow-sm flex-shrink-0"
          />
          <div className="flex flex-col justify-center">
            <span className="text-sm md:text-base lg:text-xl font-bold font-heading text-primary-dark leading-none uppercase mb-0.5 md:mb-1">
              DR NAVYA'S ENDO CARE
            </span>
            <span className="text-[6.5px] min-[400px]:text-[7px] md:text-[8px] lg:text-[9px] font-semibold tracking-wide text-secondary leading-tight uppercase whitespace-nowrap">
              DIABETES, THYROID AND ENDOCRINE SUPERSPECIALITY CENTER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                  isActive ? "text-primary font-semibold" : "text-slate-700"
                )}
              >
                <div className="relative inline-flex items-center">
                  {link.name}
                  {link.name === "Events" && upcomingEvents.length > 0 && (
                    <span className="absolute -top-1 -right-2.5 flex h-1.5 w-1.5">
                      <span className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                    </span>
                  )}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <a
            href="tel:+919032773508"
            className="hidden xl:flex items-center space-x-2 text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors group"
          >
            <div className="relative p-2 bg-red-50 rounded-full text-red-500 hover:bg-red-100 transition-colors">
              <div className="absolute inset-0 bg-red-400 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></div>
              <Phone className="w-4 h-4 relative z-10" />
            </div>
            <span>Emergency</span>
          </a>
          <MagneticButton 
            onClick={openModal}
            className="bg-gradient-to-r from-primary to-accent text-white px-4 xl:px-5 py-2.5 rounded-full font-medium shadow-soft hover:shadow-glow whitespace-nowrap text-sm"
          >
            <CalendarHeart className="w-4 h-4" />
            <span>Book Appointment</span>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-800 z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            className="absolute top-full left-0 right-0 glass-card mx-4 mt-2 p-6 flex flex-col space-y-4 shadow-xl border-t-0 lg:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-3 border-b border-slate-100 last:border-0 flex items-center",
                    pathname === link.href ? "text-primary font-bold" : "text-slate-700"
                  )}
                >
                  {link.name}
                  {link.name === "Events" && upcomingEvents.length > 0 && (
                    <span className="ml-2 flex h-2 w-2 relative">
                      <span className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  )}
                </Link>
              ))}
            </nav>
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="tel:+919032773508"
                className="flex items-center justify-center space-x-3 p-3 bg-slate-50 hover:bg-red-50 transition-colors rounded-xl text-slate-800 hover:text-red-600 font-medium group"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-red-400 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></div>
                  <Phone className="w-5 h-5 text-red-500 relative z-10" />
                </div>
                <span>Call Emergency</span>
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="flex items-center justify-center space-x-2 bg-primary text-white p-3 rounded-xl font-medium shadow-soft"
              >
                <CalendarHeart className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

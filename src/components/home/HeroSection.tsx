"use client";

import { 
  Award, CalendarHeart, Phone, ArrowDown, MapPin, Clock, ArrowRight, MessageCircle,
  Activity, ActivitySquare, Scale, Baby, Footprints, FlaskConical, Pill, ShieldCheck
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { motion, Variants } from "framer-motion";
import { doctorData } from "@/data/doctorData";
import Image from "next/image";
import Link from "next/link";
import { Hero3DVisual } from "./Hero3DVisual";

export function HeroSection() {
  const { openModal } = useAppointment();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative pt-3 sm:pt-6 pb-10 sm:pb-16 lg:pt-8 lg:pb-20 overflow-hidden bg-gradient-to-b from-pale-blue/30 via-white to-white border-b border-border/30">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] bg-gradient-to-bl from-soft-teal/35 via-pale-blue/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-soft-teal/20 via-pale-blue/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column: Clear Text & Visible Action Buttons */}
          <motion.div
            className="lg:col-span-7 space-y-4 sm:space-y-5 relative z-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Clinic Location & Trust Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E3EBF0] rounded-full shadow-2xs text-xs font-semibold text-primary badge-glow-teal">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Dr. Navya’s EndoCare • Vizianagaram</span>
              </div>
            </motion.div>

            {/* Main Heading — Requested: Expert Care for Diabetes, Thyroid & Hormonal Health */}
            <motion.h1 
              variants={itemVariants}
              className="text-[2.1rem] leading-[1.15] min-[360px]:text-[2.35rem] min-[390px]:text-[2.5rem] sm:text-4xl lg:text-[2.9rem] xl:text-[3.5rem] 2xl:text-[3.85rem] font-extrabold font-heading text-navy tracking-tight max-w-3xl"
            >
              Expert Care for Diabetes, Thyroid &{" "}
              <span className="text-[#167C80] font-extrabold block min-[430px]:inline">
                Hormonal Health
              </span>
            </motion.h1>

            {/* Supporting Text — Requested */}
            <motion.p 
              variants={itemVariants} 
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#344654] leading-relaxed max-w-2xl font-normal"
            >
              Personalised adult and paediatric endocrinology care with a focus on diagnosis, treatment, and long-term health.
            </motion.p>

            {/* Action Buttons & Direct Clinic Helpline Stack (As requested in reference image) */}
            <motion.div variants={itemVariants} className="pt-1 space-y-3 max-w-lg">
              
              {/* Button 1: BOOK AN APPOINTMENT with Glow & Shimmer */}
              <button
                onClick={openModal}
                className="w-full bg-[#167C80] hover:bg-[#126466] text-white text-xs sm:text-sm py-3.5 px-7 font-bold rounded-full btn-glow-primary shimmer-hover touch-target flex items-center justify-center gap-2.5 uppercase tracking-wider transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <CalendarHeart className="w-4 h-4 text-white" />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              {/* Button 2: EXPLORE SPECIALITIES */}
              <a
                href="#specialties"
                className="w-full bg-white hover:bg-slate-50 text-navy hover:text-primary border border-[#E3EBF0] hover:border-primary/40 text-xs sm:text-sm py-3.5 px-7 font-bold rounded-full shadow-2xs touch-target flex items-center justify-center gap-2 uppercase tracking-wider transition-all duration-200 active:scale-[0.98]"
              >
                <span>EXPLORE SPECIALITIES</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </a>

              {/* Helpline & Quick Contact Card with Glowing Pulse Effect */}
              <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E3EBF0] shadow-[0_4px_24px_rgba(22,124,128,0.08)] card-glow-pulse relative overflow-hidden group">
                {/* Soft breathing ambient accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-soft-teal/40 rounded-full blur-2xl pointer-events-none" />

                {/* Top Row: Icon + Label + Phone Number */}
                <div className="flex items-center gap-3.5 mb-3.5 relative z-10">
                  <div className="relative shrink-0">
                    <span className="absolute -inset-1 rounded-2xl bg-teal-400/30 blur-sm animate-pulse" />
                    <div className="relative w-11 h-11 rounded-2xl bg-[#EAF6F6] text-[#167C80] flex items-center justify-center border border-primary/20 shadow-2xs">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <span className="text-[8.5px] min-[360px]:text-[10px] sm:text-[10.5px] font-bold text-[#687987] tracking-wider uppercase block leading-tight">
                      DIRECT CLINIC HELPLINE & APPOINTMENTS
                    </span>
                    <a 
                      href="tel:8464070196" 
                      className="text-xl sm:text-2xl font-black font-heading text-navy hover:text-primary transition-colors tracking-tight block leading-tight mt-0.5"
                    >
                      8464070196
                    </a>
                  </div>
                </div>

                {/* Bottom Row: Call Now & WhatsApp Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5 relative z-10">
                  <a
                    href="tel:8464070196"
                    className="bg-[#167C80] hover:bg-[#126466] text-white font-bold rounded-full py-2.5 px-3 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-xs transition-all duration-200 active:scale-95 touch-target"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/918464070196?text=Hello%20Dr.%20Navya%27s%20EndoCare,%20I%20would%20like%20to%20book%20an%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#059669] hover:bg-[#047857] text-white font-bold rounded-full py-2.5 px-3 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-xs transition-all duration-200 active:scale-95 touch-target"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Timing indicator */}
              <div className="flex items-center justify-center gap-2 text-xs text-[#687987] pt-0.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM • Dedicated EndoCare Center</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Endocrine Medical Animation */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] xl:min-h-[620px]">
            <Hero3DVisual />

            {/* Floating Center of Excellence & Clinic Verification Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-3 -left-2 sm:left-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-3xl border border-[#E3EBF0] shadow-[0_8px_30px_rgba(22,124,128,0.14)] flex items-center gap-3.5 z-20 pointer-events-auto hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-soft-teal border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-2xs">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                    Center of Excellence
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold font-heading text-navy leading-tight">
                  Dr. Navya’s EndoCare Center
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#687987] font-medium mt-0.5">
                  Diabetes, Thyroid & Hormonal Superspeciality
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}


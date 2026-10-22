"use client";

import { ArrowRight, ShieldCheck, Award, HeartPulse, CalendarHeart, Stethoscope, Phone, MessageCircle } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { motion, Variants } from "framer-motion";
import { doctorData } from "@/data/doctorData";
import Link from "next/link";
import Image from "next/image";

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
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden bg-white">
      {/* Background Subtle Medical Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Hero Text */}
          <motion.div
            className="lg:col-span-7 space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Brand & Subtitle Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex flex-wrap items-center gap-2 py-1.5 px-3.5 bg-teal-50 border border-teal-200/90 rounded-full shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide uppercase font-heading">
                  DR. NAVYA’S ENDOCARE
                </span>
                <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
                <span className="text-xs sm:text-sm text-slate-600 font-medium">
                  Adult & Paediatric Endocrinology | Vizianagaram
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.3rem] font-bold font-heading text-slate-900 leading-[1.16] tracking-tight"
            >
              {doctorData.heroHeadline}
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              variants={itemVariants} 
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              {doctorData.heroSupportingText}
            </motion.p>

            {/* Specialities Highlight Line */}
            <motion.div 
              variants={itemVariants}
              className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 space-y-1.5"
            >
              <div className="text-xs sm:text-sm font-semibold text-slate-800 tracking-wide">
                {doctorData.heroSpecialitiesLine}
              </div>
              <div className="text-xs sm:text-sm font-bold text-teal-700 font-sans tracking-wide">
                {doctorData.heroTeluguLine}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-soft hover:shadow-glow transition-all flex items-center justify-center gap-2 text-sm sm:text-base group"
              >
                <CalendarHeart className="w-5 h-5 text-white/90" />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <a
                href="#specialities"
                className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-full border border-slate-200 shadow-2xs transition-all flex items-center justify-center text-sm sm:text-base"
              >
                <span>EXPLORE OUR SPECIALITIES</span>
                <ArrowRight className="ml-2 w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:8464070196"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-primary transition-colors border border-transparent hover:border-slate-200 rounded-full"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Call: 8464070196</span>
              </a>

              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100 rounded-full"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: 8464070196</span>
              </a>
            </motion.div>

            {/* Quick Credential Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 text-xs font-medium text-slate-700">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>DM University Topper</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 text-xs font-medium text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Multiple MBBS Gold Medals</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 text-xs font-medium text-slate-700">
                <HeartPulse className="w-3.5 h-3.5 text-primary" />
                <span>Adult & Paediatric Specialist</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Doctor Portrait & Clinic Trust Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Doctor Portrait Frame with Next.js priority Image */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border-[5px] border-white bg-slate-100 z-10">
                <Image
                  src="/images/dr-navya-sruthi-mandapati.jpg"
                  alt="Dr. Navya Sruthi Mandapati — MBBS, MD (General Medicine), DM (Endocrinology) — Consultant Endocrinologist"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 420px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white pointer-events-none">
                  <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider block mb-0.5">
                    Consultant Endocrinologist
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading mb-0.5">{doctorData.name}</h3>
                  <p className="text-xs sm:text-sm text-white/90 font-medium">{doctorData.degrees}</p>
                  <p className="text-[11px] text-teal-200 mt-0.5">Adult & Paediatric Endocrinology</p>
                </div>
              </div>

              {/* Decorative Background Rotation */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 to-teal-400/15 rounded-[2.3rem] -rotate-1.5 -z-10 blur-xs pointer-events-none" />

              {/* Floating Verified Center Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-white p-3.5 rounded-2xl border border-teal-100 shadow-lg flex items-center gap-3 z-20">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Superspeciality Care</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">Dr. Navya’s EndoCare</div>
                  <div className="text-[10px] text-teal-700 font-semibold">Vizianagaram, AP</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

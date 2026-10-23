"use client";
import dynamic from "next/dynamic";
import { ArrowRight, ShieldCheck, Award, HeartPulse, CalendarHeart, Phone, MessageCircle, Sparkles } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { motion, Variants } from "framer-motion";
import { doctorData } from "@/data/doctorData";
import Link from "next/link";
import Image from "next/image";

const Hero3DVisual = dynamic(() => import("./Hero3DVisual").then(mod => mod.Hero3DVisual), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] sm:h-[520px] lg:h-[580px] xl:h-[620px] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
});

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative pt-4 pb-14 lg:pt-8 lg:pb-20 overflow-hidden bg-gradient-hero">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Large organic soft glow shapes */}
        <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] bg-gradient-to-bl from-soft-teal/50 via-pale-blue/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-primary/5 via-pale-blue/20 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E3EBF008_1px,transparent_1px),linear-gradient(to_bottom,#E3EBF008_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />

        {/* Floating decorative elements */}
        <div className="absolute top-[18%] right-[12%] w-3 h-3 bg-primary/15 rounded-full float-slow" />
        <div className="absolute top-[55%] right-[22%] w-4 h-4 bg-accent-warm/20 rounded-full float-slower" />
        <div className="absolute bottom-[25%] left-[8%] w-2.5 h-2.5 bg-primary/12 rounded-full float-slow" />
        
        {/* Decorative ring */}
        <div className="absolute top-[30%] right-[6%] w-20 h-20 rounded-full border border-primary/8 float-slower hidden lg:block" />
        <div className="absolute bottom-[40%] left-[5%] w-14 h-14 rounded-full border border-accent-warm/10 float-slow hidden lg:block" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Hero Text */}
          <motion.div
            className="lg:col-span-6 space-y-5 relative z-20 xl:pr-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Brand & Subtitle Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex flex-wrap items-center gap-2 py-1.5 px-4 bg-white/80 border border-border rounded-full shadow-xs backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
                <span className="text-xs sm:text-sm font-bold text-navy tracking-wide uppercase font-heading">
                  DR. NAVYA&apos;S ENDOCARE
                </span>
                <span className="text-border hidden sm:inline" aria-hidden="true">•</span>
                <span className="text-xs sm:text-sm text-text-secondary font-medium">
                  Adult & Paediatric Endocrinology | Vizianagaram
                </span>
              </div>
            </motion.div>

            {/* Main Heading — editorial style with gradient */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold font-heading text-navy leading-[1.08] tracking-tight"
            >
              Specialist Endocrine Care.{" "}
              <span className="text-gradient-primary">
                For Every Stage of Life.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              variants={itemVariants} 
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              Personalised adult and paediatric endocrine care with a focus on diabetes, thyroid disorders, obesity, metabolic health, and patient counselling.
            </motion.p>

            {/* Specialities Highlight — refined card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-border/80 space-y-1.5 shadow-card"
            >
              <div className="text-xs sm:text-sm font-semibold text-navy tracking-wide">
                {doctorData.heroSpecialitiesLine}
              </div>
              <div className="text-xs sm:text-sm font-bold text-primary font-sans tracking-wide">
                {doctorData.heroTeluguLine}
              </div>
            </motion.div>

            {/* CTA Buttons — refined with btn utilities */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={openModal}
                className="btn-primary text-sm sm:text-base"
              >
                <CalendarHeart className="w-5 h-5 text-white/90" />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <a
                href="#specialities"
                className="btn-secondary text-sm sm:text-base group"
              >
                <span>EXPLORE SPECIALITIES</span>
                <ArrowRight className="ml-1 w-4 h-4 text-text-secondary group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Clinic Contact Helpline — streamlined */}
            <motion.div 
              variants={itemVariants} 
              className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-border shadow-card flex flex-wrap items-center justify-between gap-3 mt-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-soft-teal flex items-center justify-center text-primary shrink-0 shadow-2xs">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-[10.5px] font-bold text-text-muted uppercase tracking-wider block">
                    Direct Clinic Helpline & Appointments
                  </span>
                  <a
                    href="tel:8464070196"
                    className="text-lg sm:text-xl font-bold font-heading text-navy hover:text-primary transition-colors block"
                  >
                    8464070196
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="tel:8464070196"
                  className="px-4 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Quick Credential Badges — refined */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-border/60">
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-navy/80 hover:border-accent-warm/40 transition-colors">
                <Award className="w-3.5 h-3.5 text-accent-warm" />
                <span>DM University Topper</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-navy/80 hover:border-primary/30 transition-colors">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Multiple MBBS Gold Medals</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-navy/80 hover:border-primary/30 transition-colors">
                <HeartPulse className="w-3.5 h-3.5 text-primary" />
                <span>Adult & Paediatric Specialist</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Floating Visual System (3D Medical Visual & Credentials) */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[580px]">
            {/* 3D Visual System */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[420px] sm:h-[480px] lg:h-[580px] flex items-center justify-center"
            >
              <Hero3DVisual />

              {/* Floating Doctor Profile Card — premium glass treatment */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-2 left-2 sm:left-4 glass-card p-3 sm:p-3.5 flex items-center gap-3 z-30 max-w-[280px] sm:max-w-xs pointer-events-auto hover-lift"
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border-2 border-primary/20 shadow-xs">
                  <Image
                    src="/images/dr-navya-sruthi-mandapati.jpg"
                    alt="Dr. Navya Sruthi Mandapati — Consultant Endocrinologist"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-accent-warm uppercase tracking-wider">
                    <Award className="w-3 h-3 text-accent-warm shrink-0" />
                    <span className="truncate">DM University Topper</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-navy truncate font-heading">
                    Dr. Navya Sruthi M.
                  </h3>
                  <p className="text-[10.5px] text-text-secondary truncate">
                    MD, DM (Endocrinology)
                  </p>
                </div>
              </motion.div>

              {/* Floating Live Clinic Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-2 right-2 sm:right-4 glass px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full flex items-center gap-2 z-30"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-bold text-navy">Open Today • Vizianagaram</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom decorative gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Stethoscope, HeartPulse, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function AboutHero() {
  const { openModal } = useAppointment();

  return (
    <section className="relative pt-6 pb-14 lg:pb-20 overflow-hidden bg-background">
      {/* Animated Subtle Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-soft-teal/40 rounded-full blur-3xl transform-gpu" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl transform-gpu" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-white border border-border rounded-full px-4 py-1.5 mb-5 shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase">
                  {doctorData.centerName.split("—")[0]}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight mb-5"
            >
              {doctorData.headline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-base sm:text-lg text-primary font-semibold mb-5 flex flex-wrap items-center gap-2"
            >
              <span className="text-navy">{doctorData.name}</span>
              <span className="text-border">•</span>
              <span className="text-text-secondary font-medium">{doctorData.degrees}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 font-normal"
            >
              Consultant Endocrinologist providing specialized, evidence-based care for diabetes, thyroid dysfunction, metabolic health, obesity, and paediatric hormone disorders in Vizianagaram.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5"
            >
              <button
                onClick={openModal}
                className="px-7 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold shadow-card hover:shadow-card-hover transition-all flex items-center justify-center group text-sm"
              >
                Book Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:8464070196"
                className="px-5 py-3 bg-white hover:bg-background-alt text-navy border border-border rounded-full font-semibold transition-all flex items-center justify-center text-sm gap-2 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                Call: 8464070196
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-full font-semibold transition-all flex items-center justify-center text-sm gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp: 8464070196
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-border"
            >
              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-border shadow-2xs">
                <Award className="w-4 h-4 text-amber-500" />
                <span className="text-xs sm:text-sm font-semibold text-text-primary">DM University Topper</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-border shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-text-primary">MBBS Gold Medalist</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-border shadow-2xs">
                <HeartPulse className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-text-primary">Adult & Paediatric</span>
              </div>
            </motion.div>
          </div>

          {/* Doctor Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border-4 border-white bg-white transition-all duration-300"
              >
                <Image
                  src="/images/dr-navya-sruthi-mandapati.jpg"
                  alt="Dr. Navya Sruthi Mandapati — Founder & Chief Consultant Endocrinologist"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 text-white pointer-events-none">
                  <span className="text-xs font-semibold text-accent-warm uppercase tracking-wider block mb-1">Founder & Chief Consultant</span>
                  <h3 className="text-xl font-bold font-heading mb-0.5">{doctorData.name}</h3>
                  <p className="text-xs text-white/80 font-medium">MBBS, MD, DM (Endocrinology)</p>
                </div>
              </motion.div>

              {/* Floating Verified Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-2xl border border-teal-100 shadow-lg flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-primary">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Endocrine Care</div>
                  <div className="text-[10px] text-teal-600 font-semibold">Vizianagaram Center</div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

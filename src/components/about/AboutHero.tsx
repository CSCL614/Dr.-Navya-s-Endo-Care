"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, Activity } from "lucide-react";
import Link from "next/link";
import { useAppointment } from "@/context/AppointmentContext";

export function AboutHero() {
  const { openModal } = useAppointment();

  return (
    <section className="relative pt-0 pb-12 lg:pb-16 overflow-hidden bg-white">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm font-semibold text-primary tracking-wide">PREMIUM HEALTHCARE</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-800 leading-tight mb-6"
            >
              Compassionate Endocrinology Care With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Advanced Medical Expertise</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8"
            >
              Dedicated to helping patients achieve healthier lives through expert diabetes, thyroid, and hormonal care with personalized treatment and compassionate support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold shadow-soft hover:shadow-glow transition-all flex items-center justify-center group"
              >
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-full font-semibold transition-all flex items-center justify-center">
                Explore Services
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex items-center gap-6 pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-slate-600">Certified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-red-400" />
                <span className="text-sm font-semibold text-slate-600">Patient First</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-slate-600">Advanced Care</span>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="relative flex justify-center lg:justify-center mt-12 lg:mt-0 lg:pr-12">
            <div className="relative w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-[6px] border-white bg-slate-100"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('https://diabetes.co.in/media/uploads/2024/06/dr-navya-sruthi-mandapati.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <h3 className="text-2xl font-bold font-heading mb-1">Dr. Navya Sruthi</h3>
                  <p className="text-white/80 font-medium">Chief Endocrinologist</p>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-2 lg:-right-6 bg-white/90 p-4 rounded-2xl border border-white/50 shadow-xl backdrop-blur-md hidden sm:block z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">6+ Years</div>
                    <div className="text-xs font-semibold text-slate-500">Of Experience</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-2 lg:-left-6 bg-white/90 p-4 rounded-2xl border border-white/50 shadow-xl backdrop-blur-md hidden sm:block z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">5,000+</div>
                    <div className="text-xs font-semibold text-slate-500">Happy Patients</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

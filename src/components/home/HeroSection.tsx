"use client";

import { ArrowRight, Shield, Activity, Plus } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { motion, Variants } from "framer-motion";
import { Hero3DVisual } from "./Hero3DVisual";

export function HeroSection() {
  const { openModal } = useAppointment();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-transparent">


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start lg:pt-8">
          
          {/* Left Content Area */}
          <motion.div 
            className="lg:col-span-5 space-y-8 z-20 xl:pr-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 py-2 px-5 bg-white border border-slate-100 shadow-sm rounded-full text-sm mb-6 text-primary font-medium tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Premium Endocrinology Care
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold font-heading text-slate-800 leading-[1.1] tracking-tight">
                Advanced Diabetes, Thyroid & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Hormonal Care</span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-light">
              Delivering expert endocrinology care through advanced diagnosis, personalized treatment, and compassionate healthcare.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={openModal}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all hover:-translate-y-1 text-lg flex items-center justify-center group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:+919032773508"
                className="px-8 py-4 bg-white/80 backdrop-blur-md text-slate-700 font-semibold rounded-full shadow-sm border border-slate-200/60 hover:bg-white hover:border-slate-300 transition-all hover:-translate-y-1 text-lg flex items-center justify-center"
              >
                Contact Us
              </a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-8">
              <div className="flex items-center gap-2 text-slate-600 font-medium bg-white px-5 py-2.5 rounded-full border border-slate-100 shadow-sm transition-transform hover:scale-105 cursor-default">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Board Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-medium bg-white px-5 py-2.5 rounded-full border border-slate-100 shadow-sm transition-transform hover:scale-105 cursor-default">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-sm">Advanced Diagnostics</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Floating Visual System (3D) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 relative w-full h-[500px] lg:h-[700px] mt-12 lg:mt-0 flex items-center justify-center"
          >
            <Hero3DVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

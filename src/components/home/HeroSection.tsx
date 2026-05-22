"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Heart, Shield } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export function HeroSection() {
  const { openModal } = useAppointment();

  return (
    <section className="relative min-h-[70vh] flex items-center pt-8 pb-24 lg:pb-32 overflow-hidden bg-gradient-medical">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-2 px-4 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6 border border-primary/20">
                Premium Endocrinology Care
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 leading-tight">
                Advanced Diabetes, Thyroid & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Hormonal Care</span> With Compassion
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Comprehensive endocrinology care for diabetes, thyroid disorders, hormonal imbalance, obesity, PCOS, metabolic disorders, and endocrine-related conditions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button 
                onClick={openModal}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-soft hover:shadow-glow transition-all hover:-translate-y-1 text-lg flex items-center justify-center group"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:+919032773508"
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full shadow-soft border border-slate-100 hover:border-primary/30 transition-all hover:-translate-y-1 text-lg flex items-center justify-center"
              >
                Contact Us
              </a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 pt-6 border-t border-slate-200/60"
            >
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Shield className="w-5 h-5 text-secondary" />
                <span>Board Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Activity className="w-5 h-5 text-primary" />
                <span>Advanced Diagnostics</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Heart className="w-5 h-5 text-pink-500" />
                <span>Patient First</span>
              </div>
            </motion.div>
          </div>

          {/* Image/Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[75%] lg:w-[70%] max-w-[480px] aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              {/* Fallback gradient if image not present, in a real app replace with next/image */}
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                {/* We use inline style for background image to ensure it loads reliably without Tailwind JIT issues */}
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1200&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-[-1rem] glass-card p-4 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                  <span className="text-xl font-bold">15+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Years of</p>
                  <p className="text-xs text-slate-500">Experience</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 right-[-1rem] glass-card p-4 flex items-center gap-3 z-20"
              >
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200`} />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">10k+</p>
                  <p className="text-xs text-slate-500">Happy Patients</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

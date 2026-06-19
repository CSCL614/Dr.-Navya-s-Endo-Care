"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, Lightbulb, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function MissionVision() {
  return (
    <section className="py-16 lg:py-20 bg-slate-900 relative overflow-hidden text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] transform-gpu"
          style={{ willChange: "transform, opacity" }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] transform-gpu"
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Mission */}
          <div className="relative h-full">
            <ScrollReveal direction="right" className="h-full">
              <div className="glass-card bg-white/5 border border-white/10 p-10 md:p-14 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group hover:bg-white/10 transition-colors duration-500 h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target className="w-32 h-32" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Our Mission</h2>
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light flex-grow">
                    To provide comprehensive, compassionate, and cutting-edge endocrine care that empowers patients to manage their conditions effectively and lead fulfilling lives. We strive to be a beacon of hope and healing in the healthcare community.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Vision */}
          <div className="relative h-full">
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <div className="glass-card bg-white/5 border border-white/10 p-10 md:p-14 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group hover:bg-white/10 transition-colors duration-500 h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lightbulb className="w-32 h-32" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Our Vision</h2>
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light flex-grow">
                    To establish a world-class center of excellence in endocrinology where innovative medical treatments seamlessly blend with personalized patient care, setting the standard for holistic metabolic health worldwide.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Core Values */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} direction="up">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-primary-light">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading mb-2">Empathy</h4>
                <p className="text-slate-400 text-sm">Treating every patient like family with deep understanding.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-primary-light">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading mb-2">Excellence</h4>
                <p className="text-slate-400 text-sm">Delivering the highest standard of evidence-based care.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="up">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-primary-light">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading mb-2">Innovation</h4>
                <p className="text-slate-400 text-sm">Continuously adopting the latest medical advancements.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap, Briefcase, Award, Star, Building2, Medal } from "lucide-react";
import { motion } from "framer-motion";

export function JourneyTimeline() {
  const milestones = [
    {
      year: "2014",
      title: "MBBS Graduation",
      desc: "Rangaraya Medical College, Kakinada. Awarded 3 Gold Medals and recognized as the Best Outgoing Student.",
      icon: Medal
    },
    {
      year: "2018",
      title: "MD in General Medicine",
      desc: "Andhra Medical College, Visakhapatnam. Mastered complex internal medicine and patient care.",
      icon: GraduationCap
    },
    {
      year: "2019 - 2020",
      title: "Endocrinology Resident",
      desc: "KIMS, Secunderabad. Gained advanced clinical exposure in managing diverse endocrine disorders.",
      icon: Building2
    },
    {
      year: "2020 - 2024",
      title: "DM in Endocrinology",
      desc: "Andhra Medical College, Visakhapatnam. Graduated as the University Topper (YSRUHS).",
      icon: Award
    },
    {
      year: "2024 - Present",
      title: "Chief Endocrinologist",
      desc: "Founded Dr. Navya's Endo Care in Vizianagaram, establishing a premier center for hormonal health.",
      icon: Star
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6 tracking-tight">
              Professional Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A continuous pursuit of medical excellence, defined by outstanding academic achievements and a lifelong commitment to patient care.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-teal-400/30 to-transparent md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white rounded-full border-[3px] border-slate-50 shadow-lg shadow-slate-200/50 flex items-center justify-center md:-translate-x-1/2 z-10">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal-400 rounded-full flex items-center justify-center relative">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
                        className="absolute inset-0 bg-primary rounded-full blur-md transform-gpu"
                        style={{ willChange: "transform, opacity" }}
                      />
                      <milestone.icon className="w-5 h-5 text-white relative z-10" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3rem)] flex flex-col justify-center ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <ScrollReveal direction={isEven ? 'left' : 'right'} delay={index * 0.1} className="w-full">
                      <div className={`bg-slate-50/80 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-sm border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300 relative group`}>
                        {/* Triangle Pointer (Desktop) */}
                        <div className={`hidden md:block absolute top-7 w-4 h-4 bg-slate-50/80 group-hover:bg-white transition-colors rotate-45 ${isEven ? '-right-2 border-t border-r border-slate-100' : '-left-2 border-b border-l border-slate-100'}`} />
                        
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-bold text-primary mb-4 ${isEven ? 'md:ml-auto' : ''}`}>
                          {milestone.year}
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold font-heading text-slate-800 mb-3">{milestone.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{milestone.desc}</p>
                      </div>
                    </ScrollReveal>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

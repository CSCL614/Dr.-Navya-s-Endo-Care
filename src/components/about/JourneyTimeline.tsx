"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap, Briefcase, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

export function JourneyTimeline() {
  const milestones = [
    {
      year: "2008",
      title: "MBBS Graduation",
      desc: "Completed primary medical education with top honors from a premier medical institution.",
      icon: GraduationCap
    },
    {
      year: "2012",
      title: "MD in General Medicine",
      desc: "Awarded Gold Medal for academic excellence and clinical proficiency.",
      icon: Award
    },
    {
      year: "2016",
      title: "DM in Endocrinology",
      desc: "Completed super-specialization with a focus on advanced metabolic disorders.",
      icon: GraduationCap
    },
    {
      year: "2018",
      title: "Head of Department",
      desc: "Appointed as HOD of Endocrinology at Apollo Hospitals, leading a team of experts.",
      icon: Briefcase
    },
    {
      year: "2023",
      title: "Founded Navya's Endo Care",
      desc: "Established a state-of-the-art clinic dedicated to comprehensive hormonal health.",
      icon: Star
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6">
              Professional Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A continuous pursuit of medical excellence and a lifelong commitment to patient care.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-secondary/20 to-transparent md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white rounded-full border-4 border-slate-50 shadow-md flex items-center justify-center md:-translate-x-1/2 z-10">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-primary rounded-full blur-md"
                      />
                      <milestone.icon className="w-5 h-5 text-white relative z-10" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3rem)] flex flex-col justify-center ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <ScrollReveal direction={isEven ? 'left' : 'right'} delay={index * 0.1} className="w-full">
                      <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative ${isEven ? 'md:rounded-tr-none' : 'md:rounded-tl-none'}`}>
                        {/* Triangle Pointer (Desktop) */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 ${isEven ? '-right-2 border-t border-r border-slate-100' : '-left-2 border-b border-l border-slate-100'}`} />
                        
                        <div className={`text-sm font-bold text-primary mb-2 ${isEven ? 'md:justify-end' : ''}`}>{milestone.year}</div>
                        <h4 className="text-xl font-bold font-heading text-slate-800 mb-2">{milestone.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{milestone.desc}</p>
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

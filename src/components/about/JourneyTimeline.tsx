"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap, Award, Building2, Medal, CheckCircle2, FileText, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import { doctorData } from "@/data/doctorData";

export function JourneyTimeline() {
  const milestoneIcons = [Medal, GraduationCap, Award, Building2, Star];

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden" id="academic-journey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 bg-white border border-border text-primary font-semibold rounded-full text-xs sm:text-sm mb-4 shadow-2xs">
              Education & Honors
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-6 tracking-tight">
              Academic Journey & <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A record of outstanding merit, advanced clinical residency, and unwavering commitment to medical excellence.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Center Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-primary-light/20 to-transparent md:-translate-x-1/2 rounded-full" />

          <div className="space-y-10 lg:space-y-14">
            {doctorData.academicJourney.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const Icon = milestoneIcons[index % milestoneIcons.length];

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-white rounded-full border-2 border-border shadow-card flex items-center justify-center md:-translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center relative shadow-2xs">
                      <Icon className="w-4 h-4 text-white relative z-10" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2.5rem)] flex flex-col justify-center ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <ScrollReveal direction={isEven ? 'left' : 'right'} delay={index * 0.08} className="w-full">
                      <div className="bg-white p-6 lg:p-7 rounded-3xl shadow-card border border-border hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 relative group">
                        
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-soft-teal/70 border border-primary/20 rounded-full text-xs font-bold text-primary-dark mb-3 ${isEven ? 'md:ml-auto' : ''}`}>
                          {milestone.period}
                        </div>
                        <h3 className="text-xl font-bold font-heading text-navy mb-1">{milestone.degree}</h3>
                        <p className="text-sm font-semibold text-primary mb-3">{milestone.institution}</p>
                        <p className="text-sm text-text-secondary leading-relaxed">{milestone.description}</p>
                      </div>
                    </ScrollReveal>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Achievements & Distinctions Grid */}
        <div className="pt-12 border-t border-slate-200/80">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-800 mb-3">
                Academic Distinctions & Professional Memberships
              </h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                Verified honours, awards, research contributions, and professional affiliations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorData.achievements.map((ach, index) => {
              const typeIcons = {
                award: Award,
                education: GraduationCap,
                presentation: FileText,
                membership: Users
              };
              const AchIcon = typeIcons[ach.type] || Award;

              return (
                <ScrollReveal key={index} delay={index * 0.06} direction="up">
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-teal-200 hover:shadow-md transition-all h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-primary flex items-center justify-center shrink-0">
                        <AchIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {ach.type}
                      </span>
                    </div>
                    <h4 className="text-base font-bold font-heading text-slate-800 mb-2 leading-snug">
                      {ach.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                      {ach.detail}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

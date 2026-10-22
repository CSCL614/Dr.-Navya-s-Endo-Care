"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Award, HeartPulse, Search, MessageSquare, Apple, ShieldCheck, UserCheck, Scale, LucideIcon 
} from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function WhyChooseHomeSection() {
  const icons: LucideIcon[] = [
    Award,
    HeartPulse,
    Search,
    MessageSquare,
    Apple,
    ShieldCheck,
    UserCheck,
    Scale
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="why-choose">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-4">
              Our Clinical Standards
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Dr. Navya’s EndoCare?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Combining tertiary academic excellence with warm, unhurried, patient-centred care for every member of your family.
            </p>
          </ScrollReveal>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {doctorData.whyChoosePoints.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <ScrollReveal key={item.title} delay={index * 0.06} direction="up">
                <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-2xs hover:bg-white hover:border-teal-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xs mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-800 mb-2.5 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

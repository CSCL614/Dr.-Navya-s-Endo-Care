"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, Scale, Moon, Footprints, Apple, Pill, Sparkles, Dna, ShieldAlert, LucideIcon 
} from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function RootCauseMetabolicSection() {
  const iconMap: Record<string, LucideIcon> = {
    Activity,
    Scale,
    Moon,
    Footprints,
    Apple,
    Pill,
    Sparkles,
    Dna,
    ShieldAlert
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="root-cause">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-4">
              Metabolic Science & Cellular Health
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight mb-6">
              “Treating Metabolic Disease Well Means Addressing the Cause — Not Only the Consequence.”
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Conditions like <strong>Type 2 diabetes, obesity, fatty liver (NAFLD), PCOS, hypertension, and abnormal cholesterol</strong> are rarely isolated diseases. Instead, they represent branches of the same underlying metabolic tree rooted in chronic insulin resistance and cellular stress.
            </p>
          </ScrollReveal>
        </div>

        {/* 9 Contributing Factors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {doctorData.metabolicFactors.map((factor, index) => {
            const Icon = iconMap[factor.iconName] || Activity;
            return (
              <ScrollReveal key={factor.title} delay={index * 0.05} direction="up">
                <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-2xs hover:bg-white hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center shadow-2xs mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold font-heading text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {factor.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                    {factor.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Holistic Insight Banner */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-teal-50/70 border border-teal-200/60 rounded-3xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
            <h4 className="text-lg sm:text-xl font-bold font-heading text-slate-800 mb-2">
              Why Root-Cause Treatment Matters
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Lowering high blood sugar or blood pressure with medication is vital, but true clinical reversal and cardiovascular protection require healing the underlying cellular metabolism through targeted science and sustainable habits.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

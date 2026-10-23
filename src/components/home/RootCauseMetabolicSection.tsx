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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="root-cause">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pale-blue/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-18">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <Dna className="w-4 h-4 text-primary" />
              <span>Metabolic Science & Cellular Health</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-navy leading-tight mb-6 tracking-tight">
              &ldquo;Treating Metabolic Disease Well Means Addressing the Cause — <span className="gradient-text">Not Only the Consequence.&rdquo;</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Conditions like <strong className="text-navy font-bold">Type 2 diabetes, obesity, fatty liver (NAFLD), PCOS, hypertension, and abnormal cholesterol</strong> are rarely isolated diseases. Instead, they represent branches of the same underlying metabolic tree rooted in chronic insulin resistance and cellular stress.
            </p>
          </ScrollReveal>
        </div>

        {/* 9 Contributing Factors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14">
          {doctorData.metabolicFactors.map((factor, index) => {
            const Icon = iconMap[factor.iconName] || Activity;
            return (
              <ScrollReveal key={factor.title} delay={index * 0.04} direction="up">
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-card hover:border-primary/40 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-2xl bg-pale-blue text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-2xs group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold font-heading text-navy mb-2 group-hover:text-primary transition-colors duration-200">
                    {factor.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-grow">
                    {factor.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Holistic Insight Banner */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="glass-card bg-pale-blue/40 border border-primary/20 rounded-3xl p-7 sm:p-10 text-center max-w-4xl mx-auto shadow-card">
            <h4 className="text-lg sm:text-xl font-bold font-heading text-navy mb-2">
              Why Root-Cause Treatment Matters
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Lowering high blood sugar or blood pressure with medication is vital, but true clinical reversal and cardiovascular protection require healing the underlying cellular metabolism through targeted science and sustainable habits.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

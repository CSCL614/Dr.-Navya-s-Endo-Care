"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Baby, HeartPulse, Activity, Sparkles, AlertCircle } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function PreventionSection() {
  const prevention = doctorData.prevention;

  const icons = [Baby, Sparkles, AlertCircle, HeartPulse, ShieldCheck];

  return (
    <section className="py-20 lg:py-24 bg-background-alt/50 border-t border-border relative overflow-hidden" id="prevention">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-border rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-4 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Proactive Health Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight mb-4">
              {prevention.headline}
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              {prevention.subheadline}
            </p>
          </ScrollReveal>
        </div>

        {/* Prevention Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {prevention.areas.map((area, index) => {
            const Icon = icons[index % icons.length];
            return (
              <ScrollReveal key={index} delay={index * 0.08} direction="up">
                <div className="bg-white rounded-3xl p-7 border border-border shadow-card hover:border-primary/40 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-soft-teal/70 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-primary-dark bg-soft-teal/80 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {area.audience}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-navy mb-2 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-grow">
                    {area.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Clinical Note Card */}
          <ScrollReveal delay={0.4} direction="up">
            <div className="bg-gradient-to-br from-soft-teal/40 via-white to-soft-teal/20 rounded-3xl p-7 border border-primary/20 shadow-card flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-2">Our Clinical Commitment</span>
                <h3 className="text-lg font-bold font-heading text-navy mb-2">
                  Academic Honesty & Realistic Guidance
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  We believe in medical integrity. While endocrinology cannot promise instant or guaranteed cure-alls, early recognition and evidence-based management consistently offer the highest probability of avoiding debilitating complications.
                </p>
              </div>
              <div className="pt-4 border-t border-border-light text-xs font-semibold text-primary">
                Dr. Navya’s EndoCare • Vizianagaram
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

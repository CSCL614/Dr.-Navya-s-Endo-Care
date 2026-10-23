"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Utensils, Briefcase, Users, Moon, Footprints, ShieldCheck, HeartHandshake } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function PracticalLifestyleSection() {
  const factorIcons = [Utensils, Briefcase, Users, Moon, Footprints, ShieldCheck];

  return (
    <section className="py-20 lg:py-28 bg-pale-blue/30 relative overflow-hidden" id="practical-lifestyle">
      {/* Soft background accents */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-pale-blue/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <HeartHandshake className="w-4 h-4 text-primary" />
              <span>Realistic Metabolic Medicine</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-navy leading-tight mb-5 tracking-tight">
              &ldquo;Lifestyle Change That Is <span className="gradient-text">Actually Practical.&rdquo;</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Most health advice fails because it demands extreme lifestyle disruption. We believe the only plan that works is the one you can genuinely sustain within your daily life, family traditions, and cultural habits.
            </p>
          </ScrollReveal>
        </div>

        {/* Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14">
          {doctorData.lifestyleFactors.map((item, index) => {
            const Icon = factorIcons[index % factorIcons.length];
            return (
              <ScrollReveal key={item.factor} delay={index * 0.05} direction="up">
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-2xl bg-pale-blue text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-2xs group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold font-heading text-navy mb-2 group-hover:text-primary transition-colors duration-200">
                    {item.factor}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-grow">
                    {item.impact}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Supportive Note */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="glass-card rounded-3xl p-7 sm:p-9 border border-border/80 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">No Extreme Fads</span>
              <p className="text-sm sm:text-base font-semibold text-navy">
                Personalized guidance designed around your blood work, medications, work shifts, and authentic home-cooked meals.
              </p>
            </div>
            <div className="text-xs font-bold text-primary bg-pale-blue px-5 py-3 rounded-2xl shrink-0 border border-primary/20 shadow-2xs">
              Sustainable • Scientifically Validated
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

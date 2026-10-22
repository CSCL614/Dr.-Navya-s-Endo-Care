"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Utensils, Briefcase, Users, Moon, Footprints, ShieldCheck, CheckCircle2 } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function PracticalLifestyleSection() {
  const factorIcons = [Utensils, Briefcase, Users, Moon, Footprints, ShieldCheck];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="practical-lifestyle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-4 shadow-2xs">
              Realistic Metabolic Medicine
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight mb-6">
              “Lifestyle Change That Is Actually Practical.”
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Most health advice fails because it demands extreme lifestyle disruption. We believe the only plan that works is the one you can genuinely sustain within your daily life, family traditions, and cultural habits.
            </p>
          </ScrollReveal>
        </div>

        {/* Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {doctorData.lifestyleFactors.map((item, index) => {
            const Icon = factorIcons[index % factorIcons.length];
            return (
              <ScrollReveal key={item.factor} delay={index * 0.06} direction="up">
                <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-2xs hover:shadow-lg hover:border-teal-200 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold font-heading text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {item.factor}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                    {item.impact}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Supportive Note */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">No Extreme Fads</span>
              <p className="text-sm sm:text-base font-semibold text-slate-800">
                Personalized guidance designed around your blood work, medications, work shifts, and authentic home-cooked meals.
              </p>
            </div>
            <div className="text-xs font-semibold text-slate-500 bg-slate-50 px-4 py-2.5 rounded-xl shrink-0 border border-slate-100">
              Sustainable • Scientifically Validated
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

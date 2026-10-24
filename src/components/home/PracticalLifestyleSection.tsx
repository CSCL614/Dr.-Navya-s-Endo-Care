"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Utensils, Briefcase, Users, Moon, Footprints, ShieldCheck, HeartHandshake } from "lucide-react";
import { CenterIconBadge } from "@/components/ui/CreativeCard";
import { doctorData } from "@/data/doctorData";

export function PracticalLifestyleSection() {
  const factorConfigs = [
    { icon: Utensils, variant: "amber" as const },
    { icon: Briefcase, variant: "navy" as const },
    { icon: Users, variant: "rose" as const },
    { icon: Moon, variant: "indigo" as const },
    { icon: Footprints, variant: "teal" as const },
    { icon: ShieldCheck, variant: "emerald" as const },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-pale-blue/30 to-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="practical-lifestyle">
      {/* Soft background accents */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-pale-blue/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <div className="badge-mint mb-3 inline-flex">
              <HeartHandshake className="w-3.5 h-3.5 text-primary" />
              <span>Realistic Metabolic Medicine</span>
            </div>

            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-navy leading-tight mb-4 tracking-tight">
              &ldquo;Lifestyle Change That Is <span className="text-highlight-teal">Actually Practical.</span>&rdquo;
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-[#344654] leading-relaxed">
              Most health advice fails because it demands extreme lifestyle disruption. We believe the only plan that works is the one you can genuinely sustain within your daily life, family traditions, and authentic Andhra cultural habits.
            </p>
          </ScrollReveal>
        </div>

        {/* Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10 sm:mb-14">
          {doctorData.lifestyleFactors.map((item, index) => {
            const config = factorConfigs[index % factorConfigs.length];
            return (
              <ScrollReveal key={item.factor} delay={index * 0.04} direction="up">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3EBF0] shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-pale-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center h-full w-full">
                    <CenterIconBadge 
                      icon={config.icon}
                      variant={config.variant}
                      size="lg"
                      className="mb-4"
                    />
                    
                    <h3 className="text-base sm:text-lg font-bold font-heading text-navy mb-2 group-hover:text-primary transition-colors duration-200">
                      {item.factor}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#344654] leading-relaxed flex-grow">
                      {item.impact}
                    </p>

                    <div className="w-8 h-0.5 bg-primary/20 rounded-full mt-4 group-hover:w-14 group-hover:bg-primary transition-all duration-300" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Supportive Note */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-card flex flex-col md:flex-row items-center justify-between gap-5 bg-gradient-to-r from-soft-teal/30 via-white to-pale-blue/30">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10.5px] font-bold text-primary uppercase tracking-wider block">No Extreme Fads</span>
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-navy">
                Personalized guidance designed around your blood work, medications, work shifts, and authentic home-cooked meals.
              </p>
            </div>
            <div className="text-xs font-bold text-primary bg-white px-4 py-2.5 rounded-xl shrink-0 border border-border shadow-2xs">
              Sustainable • Scientifically Validated
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

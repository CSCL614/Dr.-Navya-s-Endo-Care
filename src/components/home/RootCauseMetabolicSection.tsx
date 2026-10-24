"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, Scale, Moon, Footprints, Apple, Pill, Sparkles, Dna, ShieldAlert, LucideIcon 
} from "lucide-react";
import { CenterIconBadge } from "@/components/ui/CreativeCard";
import { doctorData } from "@/data/doctorData";

export function RootCauseMetabolicSection() {
  const iconConfigMap: Record<string, { icon: LucideIcon; variant: "teal" | "navy" | "mint" | "amber" | "emerald" | "sky" | "rose" | "indigo" }> = {
    Activity: { icon: Activity, variant: "teal" },
    Scale: { icon: Scale, variant: "amber" },
    Moon: { icon: Moon, variant: "indigo" },
    Footprints: { icon: Footprints, variant: "mint" },
    Apple: { icon: Apple, variant: "emerald" },
    Pill: { icon: Pill, variant: "sky" },
    Sparkles: { icon: Sparkles, variant: "rose" },
    Dna: { icon: Dna, variant: "navy" },
    ShieldAlert: { icon: ShieldAlert, variant: "amber" },
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="root-cause">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-pale-blue/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <div className="badge-mint mb-3 inline-flex">
              <Dna className="w-3.5 h-3.5 text-primary" />
              <span>Metabolic Science & Cellular Health</span>
            </div>

            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-navy leading-tight mb-4 tracking-tight">
              &ldquo;Treat the <span className="text-highlight-teal">Root Cause</span>, Not Just the Numbers.&rdquo;
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-[#344654] leading-relaxed max-w-3xl mx-auto">
              Conditions like <strong className="text-navy font-bold">Type 2 diabetes, obesity, fatty liver (NAFLD), PCOS, hypertension, and abnormal cholesterol</strong> are rarely isolated diseases. Instead, they represent branches of the same underlying metabolic tree rooted in chronic insulin resistance and cellular stress.
            </p>
          </ScrollReveal>
        </div>

        {/* 9 Contributing Factors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10 sm:mb-14">
          {doctorData.metabolicFactors.map((factor, index) => {
            const config = iconConfigMap[factor.iconName] || { icon: Activity, variant: "teal" as const };
            return (
              <ScrollReveal key={factor.title} delay={index * 0.03} direction="up">
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
                      {factor.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#344654] leading-relaxed flex-grow">
                      {factor.description}
                    </p>

                    <div className="w-8 h-0.5 bg-primary/20 rounded-full mt-4 group-hover:w-14 group-hover:bg-primary transition-all duration-300" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Holistic Insight Banner */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-gradient-to-r from-soft-teal/30 via-white to-pale-blue/30 border border-primary/20 rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-card">
            <h4 className="text-base sm:text-lg font-bold font-heading text-navy mb-1.5">
              Why Root-Cause Treatment Matters
            </h4>
            <p className="text-xs sm:text-sm text-[#344654] leading-relaxed max-w-2xl mx-auto">
              Lowering high blood sugar or blood pressure with medication is vital, but true clinical stability and cardiovascular protection require healing the underlying cellular metabolism through targeted science and sustainable habits.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

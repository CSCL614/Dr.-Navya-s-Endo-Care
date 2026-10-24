"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Award, HeartPulse, Search, MessageSquare, Apple, ShieldCheck, UserCheck, Building2, LucideIcon 
} from "lucide-react";
import { doctorData } from "@/data/doctorData";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

interface FeatureConfig {
  icon: LucideIcon;
  variant: IconBadgeVariant;
}

export function WhyChooseHomeSection() {
  const featureConfigs: FeatureConfig[] = [
    { icon: Award, variant: "amber" },
    { icon: HeartPulse, variant: "teal" },
    { icon: Search, variant: "sky" },
    { icon: MessageSquare, variant: "indigo" },
    { icon: Apple, variant: "emerald" },
    { icon: ShieldCheck, variant: "teal" },
    { icon: UserCheck, variant: "mint" },
    { icon: Building2, variant: "navy" }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-pale-blue/50 via-white to-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="why-choose">
      {/* Subtle ambient blur */}
      <div className="absolute top-0 left-0 w-[380px] h-[380px] bg-gradient-to-br from-soft-teal/20 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/3" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <div className="badge-mint mb-3">
              Our Clinical Standards
            </div>

            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-navy leading-tight mb-3">
              Why Choose <span className="text-highlight-teal">Dr. Navya&apos;s EndoCare?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#344654] leading-relaxed font-normal">
              Warm, patient-friendly care with expert medical knowledge. We take the time to listen, explain your reports, and treat the root cause of your health problems in Vizianagaram.
            </p>
          </ScrollReveal>
        </div>

        {/* 8 Feature Cards Grid — Centered Icons & Balanced Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {doctorData.whyChoosePoints.map((item, index) => {
            const config = featureConfigs[index % featureConfigs.length];
            return (
              <ScrollReveal key={item.title} delay={index * 0.04} direction="up">
                <div className="relative rounded-3xl p-6 sm:p-7 bg-white border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
                  
                  {/* Centered Icon Badge */}
                  <div className="mb-4">
                    <CenterIconBadge 
                      icon={config.icon} 
                      variant={config.variant} 
                      size="md" 
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-navy mb-2 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#344654] leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Subtle bottom accent line */}
                  <div className="w-8 h-0.5 bg-primary/20 group-hover:w-16 group-hover:bg-primary transition-all duration-300 rounded-full mt-4" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

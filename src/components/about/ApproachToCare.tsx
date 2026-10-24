"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Headphones, Search, MessageSquareText, Compass, LucideIcon } from "lucide-react";
import { doctorData } from "@/data/doctorData";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

export function ApproachToCare() {
  const icons: LucideIcon[] = [Headphones, Search, MessageSquareText, Compass];
  const stepVariants: IconBadgeVariant[] = ["teal", "sky", "indigo", "emerald"];

  return (
    <section className="py-20 lg:py-24 bg-background relative overflow-hidden" id="approach-to-care">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 bg-white text-primary font-semibold rounded-full text-xs sm:text-sm mb-4 border border-border shadow-2xs">
              Clinical Philosophy in Practice
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-6 tracking-tight">
              Her Approach to <span className="text-primary">Care</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Every consultation is shaped by four foundational steps designed to ensure accuracy, understanding, and long-term compliance.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Distinct Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {doctorData.approachToCare.map((item, index) => {
            const Icon = icons[index % icons.length];
            const variant = stepVariants[index % stepVariants.length];

            return (
              <ScrollReveal key={item.step} delay={index * 0.1} direction="up">
                <div className="bg-white rounded-3xl p-7 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
                  
                  {/* Step Number Badge & Centered Icon */}
                  <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-soft-teal text-primary-dark border border-primary/20 tracking-wider mb-3">
                    STEP {item.step}
                  </span>
                  
                  <div className="mb-4">
                    <CenterIconBadge icon={Icon} variant={variant} size="md" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-navy mb-2.5 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed text-xs sm:text-sm mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-[#E3EBF0] text-xs font-medium text-text-muted w-full text-left">
                    <span className="text-primary font-semibold block mb-0.5">Key Focus:</span>
                    {item.highlight}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

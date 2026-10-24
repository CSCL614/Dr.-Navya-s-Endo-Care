"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Sparkles, HeartPulse, Scale, Baby, Activity, ShieldCheck, Stethoscope, LucideIcon } from "lucide-react";
import { doctorData } from "@/data/doctorData";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

export function WhyChoseEndocrinology() {
  const iconMap: Record<string, LucideIcon> = {
    "Prevention & Early Diagnosis": ShieldCheck,
    "Metabolic Health & Weight": Scale,
    "Thyroid & PCOS Balance": Activity,
    "Paediatric Growth & Puberty": Baby,
    "Pregnancy Endocrine Care": HeartPulse,
  };

  const variantMap: Record<string, IconBadgeVariant> = {
    "Prevention & Early Diagnosis": "teal",
    "Metabolic Health & Weight": "amber",
    "Thyroid & PCOS Balance": "sky",
    "Paediatric Growth & Puberty": "mint",
    "Pregnancy Endocrine Care": "rose",
  };

  return (
    <section className="py-20 lg:py-24 bg-background-alt/50 border-t border-border relative overflow-hidden" id="why-endocrinology">
      {/* Soft gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-soft-teal/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-sky-100/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 bg-white border border-border rounded-full px-5 py-2 mb-4 shadow-2xs">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase">Inspiration & Purpose</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-6 tracking-tight">
              Why I Chose <span className="text-primary">Endocrinology</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed font-normal">
              {doctorData.whyChoseEndocrinology.lead}
            </p>
          </ScrollReveal>
        </div>

        {/* Narrative Box */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-card mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  {doctorData.whyChoseEndocrinology.paragraphs[0]}
                </p>
                <p>
                  {doctorData.whyChoseEndocrinology.paragraphs[1]}
                </p>
              </div>
              <div className="space-y-4 text-text-secondary leading-relaxed bg-soft-teal/50 p-6 rounded-2xl border border-primary/20">
                <p className="text-primary font-medium">
                  {doctorData.whyChoseEndocrinology.paragraphs[2]}
                </p>
                <p className="text-sm text-text-muted">
                  Endocrinology sits uniquely at the intersection of physiology, genetics, daily nutrition, and emotional wellness. When we restore hormonal balance, we restore life.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Supporting Visual Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorData.whyChoseEndocrinology.focusAreas.map((area, index) => {
            const Icon = iconMap[area.title] || Stethoscope;
            const variant = variantMap[area.title] || "teal";

            return (
              <ScrollReveal key={index} delay={index * 0.08} direction="up">
                <div className="bg-white rounded-3xl p-7 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
                  <div className="mb-4">
                    <CenterIconBadge icon={Icon} variant={variant} size="md" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-navy mb-2 group-hover:text-primary transition-colors leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-grow">
                    {area.description}
                  </p>
                  <div className="w-8 h-0.5 bg-primary/20 group-hover:w-14 group-hover:bg-primary transition-all duration-300 rounded-full mt-4" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

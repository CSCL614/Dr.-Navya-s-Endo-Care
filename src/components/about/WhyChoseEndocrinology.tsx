"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Sparkles, HeartPulse, Scale, Baby, Activity, ShieldCheck, Stethoscope, LucideIcon } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function WhyChoseEndocrinology() {
  const iconMap: Record<string, LucideIcon> = {
    "Prevention & Early Diagnosis": ShieldCheck,
    "Metabolic Health & Weight": Scale,
    "Thyroid & PCOS Balance": Activity,
    "Paediatric Growth & Puberty": Baby,
    "Pregnancy Endocrine Care": HeartPulse,
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="why-endocrinology">
      {/* Soft gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200/60 rounded-full px-5 py-2 mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase">Inspiration & Purpose</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6 tracking-tight">
              Why I Chose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Endocrinology</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              {doctorData.whyChoseEndocrinology.lead}
            </p>
          </ScrollReveal>
        </div>

        {/* Narrative Box */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {doctorData.whyChoseEndocrinology.paragraphs[0]}
                </p>
                <p>
                  {doctorData.whyChoseEndocrinology.paragraphs[1]}
                </p>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed bg-teal-50/50 p-6 rounded-2xl border border-teal-100/60">
                <p className="text-primary-dark font-medium">
                  {doctorData.whyChoseEndocrinology.paragraphs[2]}
                </p>
                <p className="text-sm text-slate-500">
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
            return (
              <ScrollReveal key={index} delay={index * 0.08} direction="up">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {area.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

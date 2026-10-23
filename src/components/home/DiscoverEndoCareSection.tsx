"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Search, Sparkles, HeartPulse, ShieldCheck, CheckCircle2 } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function DiscoverEndoCareSection() {
  const principleIcons = [Search, ShieldCheck, HeartPulse];
  const accentColors = [
    "from-primary/10 to-soft-teal/40",
    "from-accent-warm/10 to-soft-teal/30",
    "from-primary/8 to-pale-blue/40",
  ];

  return (
    <section className="py-20 lg:py-28 bg-pale-blue/40 relative overflow-hidden" id="discover">
      {/* Decorative background */}
      <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full border border-primary/5 float-slower hidden lg:block" aria-hidden="true" />
      <div className="absolute bottom-[15%] right-[8%] w-16 h-16 rounded-full border border-accent-warm/8 float-slow hidden lg:block" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              Patient-First Endocrinology
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-navy leading-tight mb-6">
              Discover{" "}
              <span className="text-gradient-primary">
                Dr. Navya&apos;s EndoCare
              </span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Hormones do not act in isolation. Endocrine care means understanding how blood sugar, body weight, energy, menstrual cycles, fertility, childhood growth, puberty timing, bone density, blood pressure, and long-term health interconnect across every stage of your life.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {doctorData.principles.map((pr, index) => {
            const Icon = principleIcons[index % principleIcons.length];
            return (
              <ScrollReveal key={pr.number} delay={index * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-7 lg:p-8 border border-border shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 h-full flex flex-col group hover-lift relative overflow-hidden">
                  {/* Subtle gradient accent corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${accentColors[index]} rounded-bl-[4rem] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-soft-teal text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rounded-xl">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-primary bg-soft-teal/60 px-3 py-1 rounded-full uppercase tracking-wider border border-primary/10">
                        PRINCIPLE {pr.number}
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold font-heading text-navy mb-3 group-hover:text-primary transition-colors duration-200">
                      {pr.title}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                      {pr.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Supporting Clinical Strip */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="bg-white rounded-2xl p-6 lg:p-7 border border-border shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Caring for All Ages</span>
              <p className="text-sm sm:text-base font-semibold text-navy">
                From neonatal screening and childhood growth disorders to adult diabetes, obesity, thyroid, and osteoporosis care.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-primary bg-soft-teal/50 px-4 py-2.5 rounded-xl shrink-0 border border-primary/10">
              <CheckCircle2 className="w-4 h-4" />
              <span>Adult & Paediatric Superspeciality</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

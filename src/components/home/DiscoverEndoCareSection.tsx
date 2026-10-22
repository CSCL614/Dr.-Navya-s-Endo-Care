"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Search, Sparkles, HeartPulse, ShieldCheck, CheckCircle2 } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function DiscoverEndoCareSection() {
  const principleIcons = [Search, ShieldCheck, HeartPulse];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="discover">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-4 shadow-2xs">
              <Sparkles className="w-4 h-4 text-primary" />
              Patient-First Endocrinology
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight mb-6">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Dr. Navya’s EndoCare</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Hormones do not act in isolation. Endocrine care means understanding how blood sugar, body weight, energy, menstrual cycles, fertility, childhood growth, puberty timing, bone density, blood pressure, and long-term health interconnect across every stage of your life.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {doctorData.principles.map((pr, index) => {
            const Icon = principleIcons[index % principleIcons.length];
            return (
              <ScrollReveal key={pr.number} delay={index * 0.1} direction="up">
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      PRINCIPLE {pr.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-slate-800 mb-3 group-hover:text-primary transition-colors">
                    {pr.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {pr.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Supporting Clinical Strip */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="bg-white rounded-2xl p-6 lg:p-7 border border-slate-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">Caring for All Ages</span>
              <p className="text-sm sm:text-base font-semibold text-slate-800">
                From neonatal screening and childhood growth disorders to adult diabetes, obesity, thyroid, and osteoporosis care.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-primary bg-teal-50 px-4 py-2.5 rounded-xl shrink-0">
              <CheckCircle2 className="w-4 h-4" />
              <span>Adult & Paediatric Superspeciality</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

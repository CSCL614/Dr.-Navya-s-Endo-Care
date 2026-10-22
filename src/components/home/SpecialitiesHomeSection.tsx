"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, ArrowRight, Bone, Scale, ActivitySquare, Droplets, Baby, 
  Brain, HeartPulse, CheckCircle2, LucideIcon 
} from "lucide-react";
import Link from "next/link";
import { doctorData } from "@/data/doctorData";

export function SpecialitiesHomeSection() {
  const iconMap: Record<string, LucideIcon> = {
    "diabetes-care": Activity,
    "thyroid-care": ActivitySquare,
    "obesity-metabolic": Scale,
    "pcos-womens-health": Droplets,
    "paediatric-growth": Baby,
    "bone-calcium": Bone,
    "pituitary-adrenal": Brain,
    "hormonal-bp": HeartPulse,
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="specialities">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                Dedicated Care Areas
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight mb-3">
                Specialities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Clinical Services</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Comprehensive, evidence-based care delivered across eight core endocrine disciplines for adults, adolescents, and children.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left">
            <Link
              href="/services"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group text-sm sm:text-base whitespace-nowrap"
            >
              <span>View All Clinical Services</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 8 Specialities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {doctorData.homepageSpecialities.map((item, index) => {
            const Icon = iconMap[item.id] || Activity;
            return (
              <ScrollReveal key={item.id} delay={index * 0.06} direction="up">
                <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs hover:bg-white hover:border-teal-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col group">
                  
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xs group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Heading & Telugu Subtitle */}
                  <h3 className="text-xl font-bold font-heading text-slate-800 mb-1 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-teal-700 font-sans mb-3">
                    {item.teluguTitle}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.shortDesc}
                  </p>

                  {/* Key Conditions Managed */}
                  <div className="space-y-1.5 mb-6 flex-grow pt-3 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Conditions:
                    </span>
                    {item.conditions.slice(0, 3).map((cond, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0" />
                        <span className="line-clamp-1">{cond}</span>
                      </div>
                    ))}
                  </div>

                  {/* Functional Learn More Link */}
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all mt-auto"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

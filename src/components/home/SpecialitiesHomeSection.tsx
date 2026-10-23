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
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden" id="specialities">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-soft-teal/25 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pale-blue/30 to-transparent rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header — editorial asymmetric layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="section-tag mb-4">
                Dedicated Care Areas
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-navy leading-tight mb-3">
                Specialities &{" "}
                <span className="text-gradient-primary">
                  Clinical Services
                </span>
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Comprehensive, evidence-based care delivered across eight core endocrine disciplines for adults, adolescents, and children.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left">
            <Link
              href="/services"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-200 group text-sm sm:text-base whitespace-nowrap bg-soft-teal/50 px-5 py-2.5 rounded-full border border-primary/15 hover:bg-soft-teal hover:border-primary/25"
            >
              <span>View All Clinical Services</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Feature Card — first speciality highlighted */}
        {doctorData.homepageSpecialities.length > 0 && (() => {
          const featured = doctorData.homepageSpecialities[0];
          const FeaturedIcon = iconMap[featured.id] || Activity;
          return (
            <ScrollReveal className="mb-8">
              <Link href={featured.href} className="block group">
                <div className="bg-gradient-to-br from-navy via-navy-light to-navy-dark rounded-3xl p-8 md:p-10 lg:p-12 text-white relative overflow-hidden hover-lift shadow-elevated">
                  {/* Decorative shapes */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-warm/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />
                  
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 space-y-4">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-soft-teal border border-white/10">
                        <FeaturedIcon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-accent-warm uppercase tracking-wider block mb-2">Featured Speciality</span>
                        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-1.5 leading-snug">
                          {featured.title}
                        </h3>
                        <div className="text-sm font-bold text-soft-teal/90 font-sans mb-3">
                          {featured.teluguTitle}
                        </div>
                        <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl">
                          {featured.shortDesc}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {featured.conditions.slice(0, 4).map((cond, cIdx) => (
                          <span key={cIdx} className="text-xs bg-white/8 text-white/80 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-soft-teal shrink-0" />
                            {cond}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-4 flex justify-end">
                      <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300 bg-white/10 hover:bg-white/15 px-6 py-3.5 rounded-full border border-white/15">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          );
        })()}

        {/* Remaining 7 Specialities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {doctorData.homepageSpecialities.slice(1).map((item, index) => {
            const Icon = iconMap[item.id] || Activity;
            return (
              <ScrollReveal key={item.id} delay={index * 0.06} direction="up">
                <Link href={item.href} className="block h-full group">
                  <div className="bg-white rounded-2xl p-6 border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col hover-lift">
                    
                    {/* Icon with animated bg */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-soft-teal rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rounded-2xl group-hover:scale-110">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-border group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Heading & Telugu Subtitle */}
                    <h3 className="text-lg font-bold font-heading text-navy mb-1 group-hover:text-primary transition-colors duration-200 leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-xs font-bold text-primary/70 font-sans mb-3">
                      {item.teluguTitle}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                      {item.shortDesc}
                    </p>

                    {/* Key Conditions */}
                    <div className="space-y-1.5 mb-5 flex-grow pt-3 border-t border-border-light">
                      <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider block mb-1">
                        Key Conditions:
                      </span>
                      {item.conditions.slice(0, 3).map((cond, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-1.5 text-xs text-navy/70">
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                          <span className="line-clamp-1">{cond}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-background border border-border text-navy/80 text-xs sm:text-sm font-semibold group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 mt-auto">
                      <span>Learn More</span>
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>

                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

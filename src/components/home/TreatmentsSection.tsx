"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Activity, Scale, ActivitySquare, Droplets, Baby, HeartPulse, LineChart } from "lucide-react";
import { CenterIconBadge } from "@/components/ui/CreativeCard";
import { doctorData } from "@/data/doctorData";

export function TreatmentsSection() {
  const iconConfig = [
    { icon: Activity, variant: "teal" as const },
    { icon: LineChart, variant: "teal" as const },
    { icon: Scale, variant: "amber" as const },
    { icon: ActivitySquare, variant: "sky" as const },
    { icon: Baby, variant: "mint" as const },
    { icon: HeartPulse, variant: "rose" as const },
  ];

  const featured = doctorData.specialities.slice(0, 6);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-pale-blue/20 to-white relative overflow-hidden" id="specialities-preview">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pale-blue/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="badge-mint mb-3 inline-flex">
                <Activity className="w-3.5 h-3.5 text-primary" />
                <span>Comprehensive Expertise</span>
              </div>
              <h2 className="text-2xl min-[360px]:text-3xl md:text-4xl font-bold font-heading text-navy mb-2.5 tracking-tight">
                Clinical Specialities & Services
              </h2>
              <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed">
                Advanced, evidence-based management for adult and paediatric endocrine and metabolic disorders in Vizianagaram.
              </p>
            </div>
            <Link 
              href="/services" 
              className="hidden md:inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors group text-sm shrink-0"
            >
              <span>View All 11 Specialities</span>
              <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {featured.map((treatment, index) => {
            const config = iconConfig[index % iconConfig.length];
            return (
              <ScrollReveal key={treatment.id} delay={index * 0.05} direction="up">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3EBF0] shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-pale-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center h-full w-full">
                    <CenterIconBadge 
                      icon={config.icon}
                      variant={config.variant}
                      size="lg"
                      className="mb-4"
                    />
                    
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 font-heading group-hover:text-primary transition-colors">
                      {treatment.title}
                    </h3>
                    
                    <p className="text-[#344654] text-xs sm:text-sm leading-relaxed mb-5 flex-grow">
                      {treatment.shortDesc}
                    </p>
                    
                    <Link 
                      href={`/services#${treatment.id}`}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-primary group-hover:text-primary-dark transition-colors pt-2 border-t border-[#E3EBF0] w-full justify-center"
                    >
                      <span>Read Full Details</span>
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/services" 
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center text-xs sm:text-sm py-3 px-6"
          >
            <span>View All 11 Specialities</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

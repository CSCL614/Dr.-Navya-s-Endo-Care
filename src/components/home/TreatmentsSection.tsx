"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Activity, Scale, ActivitySquare, Droplets, Baby, HeartPulse, LineChart } from "lucide-react";
import { CenterIconBadge } from "@/components/ui/CreativeCard";
import { ExpandableCard } from "@/components/ui/ExpandableCard";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-start">
          {featured.map((treatment, index) => {
            const config = iconConfig[index % iconConfig.length];
            return (
              <ScrollReveal key={treatment.id} delay={index * 0.05} direction="up">
                <ExpandableCard
                  icon={config.icon}
                  iconVariant={config.variant}
                  iconSize="md"
                  title={treatment.title}
                  summary={treatment.shortDesc}
                  expandLabel="Clinical Focus"
                  collapseLabel="Hide Details"
                  toggleStyle="pill"
                  className="h-full"
                  action={
                    <Link 
                      href={`/services#${treatment.id}`}
                      className="inline-flex items-center text-xs font-bold text-primary group-hover:text-primary-dark transition-colors w-full justify-center gap-1 group/link touch-target"
                    >
                      <span>Read Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  }
                >
                  <div className="space-y-2 text-left pt-1 text-xs text-[#344654]">
                    <p className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      {treatment.fullDesc}
                    </p>
                    {treatment.keyPoints && (
                      <div className="space-y-1 pt-1">
                        {treatment.keyPoints.slice(0, 3).map((kp, kIdx) => (
                          <div key={kIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{kp}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </ExpandableCard>
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

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, HeartPulse, Building2, GraduationCap } from "lucide-react";

const stats = [
  { value: "University Topper", label: "DM Endocrinology", sub: "YSRUHS Merit", icon: GraduationCap },
  { value: "Multiple Gold Medals", label: "MBBS Distinction", sub: "Best Outgoing Student", icon: Award },
  { value: "Adult & Paediatric", label: "Endocrine Care", sub: "Infants to Seniors", icon: HeartPulse },
  { value: "Established 2024", label: "Vizianagaram Center", sub: "Inaugurated 29 April", icon: Building2 },
];

export function StatsSection() {
  return (
    <section className="py-6 lg:py-8 bg-transparent relative -mt-8 z-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white shadow-elevated border border-border/60 p-6 md:p-8 rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center px-3 relative group cursor-default">
                  {/* Divider (not on first item) */}
                  {index > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border hidden sm:block" />
                  )}
                  <div className="w-10 h-10 rounded-xl bg-soft-teal/60 text-primary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-bold font-heading text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-navy">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-text-muted mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

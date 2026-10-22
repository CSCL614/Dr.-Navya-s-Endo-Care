"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: "University Topper", label: "DM Endocrinology", sub: "YSRUHS Merit" },
  { value: "Multiple Gold Medals", label: "MBBS Distinction", sub: "Best Outgoing Student" },
  { value: "Adult & Paediatric", label: "Endocrine Care", sub: "Infants to Seniors" },
  { value: "Established 2024", label: "Vizianagaram Center", sub: "Inaugurated 29 April" },
];

export function StatsSection() {
  return (
    <section className="py-6 lg:py-8 bg-white relative -mt-8 z-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <ScrollReveal>
          <div className="glass-card bg-white/95 shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 rounded-3xl grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-3 pt-3 sm:pt-0 first:border-l-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold font-heading text-teal-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

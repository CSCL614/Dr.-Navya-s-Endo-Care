"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Happy Patients" },
  { value: "50+", label: "Awards & Honors" },
  { value: "100%", label: "Patient Satisfaction" },
];

export function StatsSection() {
  return (
    <section className="py-8 lg:py-10 bg-white relative -mt-12 z-20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="glass-card bg-white/90 shadow-xl border border-slate-100 p-8 md:p-12 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-4 first:border-l-0">
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-primary-dark to-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

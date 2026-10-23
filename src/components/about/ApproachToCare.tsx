"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Headphones, Search, MessageSquareText, Compass } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function ApproachToCare() {
  const icons = [Headphones, Search, MessageSquareText, Compass];
  const stepColors = [
    { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100", badge: "bg-sky-100 text-sky-700" },
    { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-100", badge: "bg-teal-100 text-teal-700" },
    { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100", badge: "bg-indigo-100 text-indigo-700" },
    { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", badge: "bg-emerald-100 text-emerald-700" }
  ];

  return (
    <section className="py-20 lg:py-24 bg-background relative overflow-hidden" id="approach-to-care">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 bg-white text-primary font-semibold rounded-full text-xs sm:text-sm mb-4 border border-border shadow-2xs">
              Clinical Philosophy in Practice
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-6 tracking-tight">
              Her Approach to <span className="text-primary">Care</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Every consultation is shaped by four foundational steps designed to ensure accuracy, understanding, and long-term compliance.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Distinct Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {doctorData.approachToCare.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <ScrollReveal key={item.step} delay={index * 0.1} direction="up">
                <div className="bg-white rounded-3xl p-7 border border-border shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative group">
                  
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-soft-teal/70 text-primary flex items-center justify-center group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-soft-teal text-primary-dark border border-primary/20 tracking-wider">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-navy mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed text-sm mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-border-light text-xs font-medium text-text-muted">
                    <span className="text-primary font-semibold block mb-1">Key Focus:</span>
                    {item.highlight}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

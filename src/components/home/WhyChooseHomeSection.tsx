"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Award, HeartPulse, Search, MessageSquare, Apple, ShieldCheck, UserCheck, Scale, LucideIcon 
} from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function WhyChooseHomeSection() {
  const icons: LucideIcon[] = [
    Award,
    HeartPulse,
    Search,
    MessageSquare,
    Apple,
    ShieldCheck,
    UserCheck,
    Scale
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden" id="why-choose">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-soft-teal/20 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/3" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="section-tag mb-4">
              Our Clinical Standards
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight mb-4">
              Why Choose <span className="text-gradient-primary">Dr. Navya&apos;s EndoCare?</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              Combining tertiary academic excellence with warm, unhurried, patient-centred care for every member of your family.
            </p>
          </ScrollReveal>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {doctorData.whyChoosePoints.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <ScrollReveal key={item.title} delay={index * 0.06} direction="up">
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-border shadow-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col group hover-lift relative overflow-hidden">
                  {/* Decorative gradient corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-soft-teal/30 to-transparent rounded-bl-[3rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-soft-teal/70 rounded-xl flex items-center justify-center text-primary shadow-2xs mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rounded-2xl">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold font-heading text-navy mb-2.5 group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-grow">
                      {item.description}
                    </p>
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

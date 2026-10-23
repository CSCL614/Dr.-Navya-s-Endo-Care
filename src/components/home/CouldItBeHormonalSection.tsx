"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HelpCircle, ArrowRight, Quote, Sparkles } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function CouldItBeHormonalSection() {
  const { openModal } = useAppointment();

  return (
    <section className="py-20 lg:py-28 bg-pale-blue/30 relative overflow-hidden" id="could-it-be-hormonal">
      {/* Soft background glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-pale-blue/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span>Symptom Awareness & Evaluation</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-navy leading-tight mb-4 tracking-tight">
              Could It Be{" "}
              <span className="gradient-text">
                Hormonal?
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Because hormones regulate energy, metabolism, fluid balance, growth, and reproduction throughout the body, hormonal imbalances often manifest through a cluster of subtle, overlapping symptoms.
            </p>
          </ScrollReveal>
        </div>

        {/* Symptoms Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14">
          {doctorData.symptomsList.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.04} direction="up">
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-card hover:border-primary/40 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col group">
                
                <div className="flex items-start gap-3.5 mb-3.5">
                  <div className="w-9 h-9 rounded-xl bg-pale-blue text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-2xs font-extrabold text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-heading text-navy group-hover:text-primary transition-colors duration-200 leading-snug">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 flex-grow">
                  {item.detail}
                </p>

                <div className="pt-3.5 border-t border-border/70 text-[11px] text-text-muted">
                  <span className="font-semibold text-primary">Possible Endocrine Links:</span> {item.possibleCauses}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Key Message Callout Box & Primary CTA */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-border/80 shadow-card text-center max-w-4xl mx-auto relative overflow-hidden">
            <Quote className="w-10 h-10 text-primary/15 mx-auto mb-3" />
            
            <blockquote className="text-xl sm:text-2xl font-bold font-heading text-navy leading-snug mb-3">
              &ldquo;When symptoms do not seem to fit together, a careful endocrine evaluation can help connect the dots.&rdquo;
            </blockquote>
            
            <p className="text-xs sm:text-sm text-text-secondary max-w-xl mx-auto mb-6 leading-relaxed">
              *Experiencing a symptom does not automatically mean a hormone disorder exists, but an organized evaluation rules out silent metabolic drivers and restores peace of mind.
            </p>

            <button
              onClick={openModal}
              className="btn-primary group"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

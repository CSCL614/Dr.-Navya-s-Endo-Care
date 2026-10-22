"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HelpCircle, ArrowRight, AlertCircle, Quote } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function CouldItBeHormonalSection() {
  const { openModal } = useAppointment();

  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="could-it-be-hormonal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-4 shadow-2xs">
              <HelpCircle className="w-4 h-4 text-primary" />
              Symptom Awareness & Evaluation
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight mb-4">
              Could It Be <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Hormonal?</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Because hormones regulate energy, metabolism, fluid balance, growth, and reproduction throughout the body, hormonal imbalances often manifest through a cluster of subtle, overlapping symptoms.
            </p>
          </ScrollReveal>
        </div>

        {/* Symptoms Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {doctorData.symptomsList.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.04} direction="up">
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="text-xs font-bold font-heading">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-heading text-slate-800 group-hover:text-primary transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                  {item.detail}
                </p>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  <span className="font-semibold text-teal-700">Possible Endocrine Links:</span> {item.possibleCauses}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Key Message Callout Box & Primary CTA */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-gradient-to-r from-teal-50 via-white to-sky-50 rounded-3xl p-8 sm:p-10 border border-teal-200/80 shadow-md text-center max-w-4xl mx-auto">
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-3" />
            
            <blockquote className="text-xl sm:text-2xl font-bold font-heading text-slate-800 leading-snug mb-3">
              “When symptoms do not seem to fit together, a careful endocrine evaluation can help connect the dots.”
            </blockquote>
            
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mb-6">
              *Experiencing a symptom does not automatically mean a hormone disorder exists, but an organized evaluation rules out silent metabolic drivers and restores peace of mind.
            </p>

            <button
              onClick={openModal}
              className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-soft hover:shadow-glow transition-all inline-flex items-center gap-2 text-sm sm:text-base group"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

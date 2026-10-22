"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BookOpen, ChevronDown, ChevronUp, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";
import { doctorData } from "@/data/doctorData";

export function PatientEducationHomeSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="patient-education">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-3 shadow-2xs">
              <BookOpen className="w-4 h-4 text-primary" />
              Patient Education & Clarity
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight mb-4">
              “Endocrine Answers, Made Simple.”
            </h2>

            {/* Telugu Quote Line */}
            <p className="text-base sm:text-lg font-bold text-teal-700 font-sans mb-3">
              “ఆరోగ్యం గురించి తెలుసుకోవడం చికిత్సలో మొదటి అడుగు.”
            </p>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Understanding your condition is the first and most powerful step toward regaining your metabolic health. Here are clear answers to questions patients frequently ask us.
            </p>
          </ScrollReveal>
        </div>

        {/* Scalable Accordion Grid */}
        <div className="space-y-4 mb-14">
          {doctorData.patientQuestions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} delay={index * 0.03} direction="up">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs overflow-hidden transition-all">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-teal-50/30 transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-slate-800">
                        {item.question}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100/80 bg-slate-50/40">
                      <p className="font-semibold text-slate-700 mb-2">
                        {item.summary}
                      </p>
                      <p>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA to Patient Resources */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold font-heading text-slate-800 mb-1">
                Looking for more health guides & checklists?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Explore guidelines on insulin storage, consultation checklists, and lab report explanations.
              </p>
            </div>
            <Link
              href="/patient-resources"
              className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-soft text-sm transition-all flex items-center gap-2 shrink-0 group"
            >
              <span>VISIT PATIENT RESOURCES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

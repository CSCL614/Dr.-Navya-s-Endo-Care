"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BookOpen, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { doctorData } from "@/data/doctorData";

export function PatientEducationHomeSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-border relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="patient-education">
      {/* Soft Ambient Accents */}
      <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-pale-blue/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <div className="badge-mint mb-3">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span>Patient Education & Clarity</span>
            </div>

            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-navy leading-tight mb-3 tracking-tight">
              Endocrine Answers, <span className="text-highlight-teal">Made Simple.</span>
            </h2>

            {/* Telugu Quote Line */}
            <div className="inline-block bg-soft-teal border border-primary/20 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
              <p className="text-xs sm:text-sm font-bold text-primary font-sans">
                “ఆరోగ్యం గురించి తెలుసుకోవడం చికిత్సలో మొదటి అడుగు.”
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#344654] max-w-2xl mx-auto leading-relaxed">
              Understanding your condition is the first and most powerful step toward regaining your metabolic health. Here are clear answers to questions patients frequently ask us in Vizianagaram.
            </p>
          </ScrollReveal>
        </div>

        {/* Scalable Accordion Grid */}
        <div className="space-y-3 mb-10 sm:mb-14">
          {doctorData.patientQuestions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} delay={index * 0.02} direction="up">
                <div className="card-white rounded-2xl border border-[#E3EBF0] shadow-card overflow-hidden transition-all duration-300 bg-white">
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer touch-target"
                  >
                    <div className="space-y-0.5 min-w-0 pr-2">
                      <span className="text-[10px] sm:text-[11px] font-bold text-primary uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold font-heading text-navy leading-snug">
                        {item.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-primary text-white rotate-180 shadow-xs" : "bg-soft-teal text-primary"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-2 text-[#344654] text-xs sm:text-sm leading-relaxed border-t border-[#E3EBF0] bg-slate-50/60">
                          <p className="font-bold text-navy mb-1.5">
                            {item.summary}
                          </p>
                          <p className="text-text-secondary">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA to Patient Resources */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="card-white rounded-3xl p-6 sm:p-8 border border-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-soft-teal/30 via-white to-pale-blue/30">
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold font-heading text-navy mb-1">
                Looking for more health guides & checklists?
              </h4>
              <p className="text-xs sm:text-sm text-[#344654]">
                Explore guidelines on insulin storage, consultation checklists, and lab report explanations.
              </p>
            </div>
            <Link
              href="/patient-resources"
              className="btn-primary group shrink-0 text-xs sm:text-sm py-3 px-5 touch-target"
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

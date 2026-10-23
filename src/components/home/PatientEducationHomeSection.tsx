"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BookOpen, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { doctorData } from "@/data/doctorData";

export function PatientEducationHomeSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-border/80 relative overflow-hidden" id="patient-education">
      {/* Soft Ambient Accents */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-pale-blue/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Patient Education & Clarity</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight mb-4 tracking-tight">
              &ldquo;Endocrine Answers, <span className="gradient-text">Made Simple.&rdquo;</span>
            </h2>

            {/* Telugu Quote Line */}
            <div className="inline-block bg-pale-blue/60 border border-primary/20 px-5 py-2 rounded-2xl mb-4 shadow-2xs">
              <p className="text-sm sm:text-base font-bold text-primary font-sans">
                “ఆరోగ్యం గురించి తెలుసుకోవడం చికిత్సలో మొదటి అడుగు.”
              </p>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
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
                <div className="glass-card rounded-2xl border border-border/80 shadow-card overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-pale-blue/30 transition-colors cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-navy">
                        {item.question}
                      </h3>
                    </div>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-primary text-white rotate-180 shadow-xs" : "bg-pale-blue text-primary"
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 text-text-secondary text-xs sm:text-sm leading-relaxed border-t border-border/60 bg-pale-blue/20">
                          <p className="font-semibold text-navy mb-2">
                            {item.summary}
                          </p>
                          <p>
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
        <ScrollReveal direction="up" delay={0.2}>
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-border/80 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold font-heading text-navy mb-1">
                Looking for more health guides & checklists?
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary">
                Explore guidelines on insulin storage, consultation checklists, and lab report explanations.
              </p>
            </div>
            <Link
              href="/patient-resources"
              className="btn-primary group shrink-0"
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

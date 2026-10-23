"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Activity, Droplet, Baby, Scale, Stethoscope, Sparkles, Brain, ArrowRight, Dna } from "lucide-react";
import { motion } from "framer-motion";

export function EndocrinologyEdu() {
  const expertises = [
    {
      title: "Diabetes Management",
      desc: "Advanced care for Type 1, Type 2, and Gestational diabetes using continuous glucose monitoring and personalized holistic plans.",
      icon: Droplet,
      color: "text-blue-600",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-400/40",
    },
    {
      title: "Thyroid Disorders",
      desc: "Comprehensive diagnosis and proactive treatment of hypothyroidism, hyperthyroidism, and autoimmune thyroid diseases.",
      icon: Activity,
      color: "text-primary",
      bg: "bg-pale-blue",
      border: "group-hover:border-primary/40",
    },
    {
      title: "Hormonal Imbalance",
      desc: "Targeted evaluation and therapy for adrenal, pituitary, and reproductive hormone imbalances to restore optimal body function.",
      icon: Sparkles,
      color: "text-purple-600",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-400/40",
    },
    {
      title: "PCOS & Fertility",
      desc: "Evidence-based hormonal balancing for Polycystic Ovary Syndrome, addressing menstrual irregularities and metabolic health.",
      icon: Baby,
      color: "text-pink-600",
      bg: "bg-pink-500/10",
      border: "group-hover:border-pink-400/40",
    },
    {
      title: "Obesity Management",
      desc: "Medical weight management focused on identifying and treating underlying metabolic barriers to achieve sustainable weight loss.",
      icon: Scale,
      color: "text-amber-600",
      bg: "bg-amber-500/10",
      border: "group-hover:border-amber-400/40",
    },
    {
      title: "Metabolic Disorders",
      desc: "Expert evaluation of complex metabolic syndromes, dyslipidemia, and calcium/vitamin D related bone disorders like osteoporosis.",
      icon: Dna,
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
      border: "group-hover:border-emerald-400/40",
    },
    {
      title: "Endocrine Consultation",
      desc: "Comprehensive general endocrine consultations for mysterious symptoms, delayed puberty, hirsutism, and rare hormonal conditions.",
      icon: Stethoscope,
      color: "text-primary",
      bg: "bg-pale-blue",
      border: "group-hover:border-primary/40",
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-pale-blue/30 relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pale-blue/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <Brain className="w-4 h-4 text-primary" />
              <span>Clinical Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-5 tracking-tight leading-tight">
              Experience & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Dr. Navya provides specialized, evidence-based care across a wide spectrum of complex endocrine and metabolic conditions, ensuring personalized treatment for every patient.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {expertises.map((expertise, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.08} 
              direction="up" 
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] ${index === 6 ? 'lg:w-[calc(50%-16px)] xl:w-[calc(33.333%-22px)]' : ''}`}
            >
              <div 
                className={`group relative glass-card rounded-3xl p-8 border border-border/80 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 h-full ${expertise.border}`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-pale-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full pb-4">
                  <div className={`w-14 h-14 rounded-2xl ${expertise.bg} ${expertise.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-2xs`}>
                    <expertise.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-navy mb-3 group-hover:text-primary transition-colors">
                    {expertise.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base flex-grow">
                    {expertise.desc}
                  </p>
                </div>
                
                {/* Bottom subtle arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <div className={`w-9 h-9 rounded-full ${expertise.bg} ${expertise.color} flex items-center justify-center`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

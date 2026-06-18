"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Activity, Droplet, Baby, Scale, Stethoscope, Sparkles, Brain, ArrowRight, Dna } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function EndocrinologyEdu() {
  const expertises = [
    {
      title: "Diabetes Management",
      desc: "Advanced care for Type 1, Type 2, and Gestational diabetes using continuous glucose monitoring and personalized holistic plans.",
      icon: Droplet,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200",
      shadow: "hover:shadow-blue-200/50"
    },
    {
      title: "Thyroid Disorders",
      desc: "Comprehensive diagnosis and proactive treatment of hypothyroidism, hyperthyroidism, and autoimmune thyroid diseases.",
      icon: Activity,
      color: "text-teal-500",
      bg: "bg-teal-50",
      border: "group-hover:border-teal-200",
      shadow: "hover:shadow-teal-200/50"
    },
    {
      title: "Hormonal Imbalance",
      desc: "Targeted evaluation and therapy for adrenal, pituitary, and reproductive hormone imbalances to restore optimal body function.",
      icon: Sparkles,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "group-hover:border-purple-200",
      shadow: "hover:shadow-purple-200/50"
    },
    {
      title: "PCOS",
      desc: "Evidence-based hormonal balancing for Polycystic Ovary Syndrome, addressing menstrual irregularities and metabolic health.",
      icon: Baby,
      color: "text-pink-500",
      bg: "bg-pink-50",
      border: "group-hover:border-pink-200",
      shadow: "hover:shadow-pink-200/50"
    },
    {
      title: "Obesity Management",
      desc: "Medical weight management focused on identifying and treating underlying metabolic barriers to achieve sustainable weight loss.",
      icon: Scale,
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "group-hover:border-orange-200",
      shadow: "hover:shadow-orange-200/50"
    },
    {
      title: "Metabolic Disorders",
      desc: "Expert evaluation of complex metabolic syndromes, dyslipidemia, and calcium/vitamin D related bone disorders like osteoporosis.",
      icon: Dna,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "group-hover:border-emerald-200",
      shadow: "hover:shadow-emerald-200/50"
    },
    {
      title: "Endocrine Consultation",
      desc: "Comprehensive general endocrine consultations for mysterious symptoms, delayed puberty, hirsutism, and rare hormonal conditions.",
      icon: Stethoscope,
      color: "text-primary",
      bg: "bg-primary/10",
      border: "group-hover:border-primary/30",
      shadow: "hover:shadow-primary/30"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200/60 rounded-full px-5 py-2.5 mb-6 shadow-sm">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Clinical Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6 tracking-tight">
              Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Expertise</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dr. Navya provides specialized, evidence-based care across a wide spectrum of complex endocrine and metabolic conditions, ensuring personalized treatment for every patient.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {expertises.map((expertise, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.1} 
              direction="up" 
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] ${index === 6 ? 'lg:w-[calc(50%-16px)] xl:w-[calc(33.333%-22px)]' : ''}`}
            >
              <motion.div 
                whileHover={{ y: -8 }}
                className={`group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-300 h-full ${expertise.border} ${expertise.shadow}`}
              >
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full pb-4">
                  <div className={`w-16 h-16 rounded-2xl ${expertise.bg} ${expertise.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 flex-shrink-0 shadow-sm`}>
                    <expertise.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-slate-800 mb-3 group-hover:text-primary transition-colors">
                    {expertise.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base flex-grow">
                    {expertise.desc}
                  </p>
                </div>
                
                {/* Bottom subtle arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <div className={`w-10 h-10 rounded-full ${expertise.bg} ${expertise.color} flex items-center justify-center`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

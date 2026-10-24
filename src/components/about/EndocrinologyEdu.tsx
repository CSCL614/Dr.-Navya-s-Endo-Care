"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ActivitySquare, Droplet, Baby, Scale, Stethoscope, Sparkles, Brain, ArrowRight, Dna } from "lucide-react";
import { CenterIconBadge } from "@/components/ui/CreativeCard";

export function EndocrinologyEdu() {
  const expertises = [
    {
      title: "Diabetes Management",
      desc: "Advanced care for Type 1, Type 2, and Gestational diabetes using continuous glucose monitoring and personalized holistic plans.",
      icon: Droplet,
      variant: "teal" as const,
    },
    {
      title: "Thyroid Disorders",
      desc: "Comprehensive diagnosis and proactive treatment of hypothyroidism, hyperthyroidism, and autoimmune thyroid diseases.",
      icon: ActivitySquare,
      variant: "sky" as const,
    },
    {
      title: "Hormonal Imbalance",
      desc: "Targeted evaluation and therapy for adrenal, pituitary, and reproductive hormone imbalances to restore optimal body function.",
      icon: Sparkles,
      variant: "indigo" as const,
    },
    {
      title: "PCOS & Fertility",
      desc: "Evidence-based hormonal balancing for Polycystic Ovary Syndrome, addressing menstrual irregularities and metabolic health.",
      icon: Baby,
      variant: "rose" as const,
    },
    {
      title: "Obesity Management",
      desc: "Medical weight management focused on identifying and treating underlying metabolic barriers to achieve sustainable weight loss.",
      icon: Scale,
      variant: "amber" as const,
    },
    {
      title: "Metabolic Disorders",
      desc: "Expert evaluation of complex metabolic syndromes, dyslipidemia, and calcium/vitamin D related bone disorders like osteoporosis.",
      icon: Dna,
      variant: "emerald" as const,
    },
    {
      title: "Endocrine Consultation",
      desc: "Comprehensive general endocrine consultations for mysterious symptoms, delayed puberty, hirsutism, and rare hormonal conditions.",
      icon: Stethoscope,
      variant: "navy" as const,
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F4F9F9]/60 relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pale-blue/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal>
            <div className="badge-mint mb-3.5 inline-flex">
              <Brain className="w-3.5 h-3.5 text-primary" />
              <span>Clinical Expertise</span>
            </div>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy mb-4 tracking-tight leading-tight">
              Experience & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-text-secondary leading-relaxed">
              Dr. Navya provides specialized, evidence-based care across a wide spectrum of complex endocrine and metabolic conditions, ensuring personalized treatment for every patient.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {expertises.map((expertise, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.05} 
              direction="up" 
              className={index === 6 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div 
                className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-[#E3EBF0] shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-pale-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center h-full w-full">
                  <CenterIconBadge 
                    icon={expertise.icon}
                    variant={expertise.variant}
                    size="lg"
                    className="mb-5"
                  />
                  
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-navy mb-2.5 group-hover:text-primary transition-colors">
                    {expertise.title}
                  </h3>
                  
                  <p className="text-[#344654] leading-relaxed text-xs sm:text-sm flex-grow">
                    {expertise.desc}
                  </p>

                  <div className="w-10 h-0.5 bg-primary/20 rounded-full mt-5 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

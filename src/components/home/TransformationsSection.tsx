"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { CheckCircle2, Clock, Quote, ShieldCheck, Sparkles, TrendingDown, Award, HeartPulse } from "lucide-react";

const transformations = [
  {
    id: 1,
    category: "Weight Management",
    duration: "8 Months",
    summary: "Significant reduction in BMI and improved metabolic markers through specialized endocrine therapy.",
    testimonial: "I finally feel like myself again. The personalized approach changed my entire relationship with my body.",
    beforeImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop", 
    afterImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",  
    beforeClassName: "grayscale contrast-125 brightness-75 blur-[1px]",
  },
  {
    id: 2,
    category: "Thyroid & Vitality",
    duration: "4 Months",
    summary: "Restored energy levels, reduced facial puffiness, and stabilized hormone levels with precise medication tuning.",
    testimonial: "The brain fog is completely gone, and I finally have the energy to get through my busy days.",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", 
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", 
    beforeClassName: "saturate-0 sepia-[.3] brightness-90",
  },
  {
    id: 3,
    category: "Diabetes Control",
    duration: "6 Months",
    summary: "Successfully achieved normal HbA1c levels and reduced dependency on medications through holistic management.",
    testimonial: "Dr. Navya helped me take control of my diabetes instead of letting it control my life.",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", 
    afterImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", 
    beforeClassName: "grayscale contrast-150 blur-[2px]",
  }
];

export function TransformationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-pale-blue/30 relative overflow-hidden scroll-mt-20" id="patient-results">
      {/* Anchor for backward compatibility */}
      <span id="transformations" className="absolute -top-24" aria-hidden="true" />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pale-blue/60 to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Real Patient Outcomes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-navy mb-4 leading-tight tracking-tight">
              Real Patient <span className="gradient-text">Results & Recovery</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Witness inspiring health journeys achieved through personalized endocrinology care, continuous glycemic monitoring, and root-cause hormonal management.
            </p>
          </ScrollReveal>
        </div>

        {/* Clinical Milestone Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-14">
          <ScrollReveal delay={0.05} direction="up">
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-border/80 shadow-card text-center group hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-pale-blue text-primary flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                <TrendingDown className="w-5 h-5" />
              </div>
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-primary mb-0.5">-3.3%</span>
              <span className="text-xs text-text-secondary font-medium">Average HbA1c Drop</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="up">
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-border/80 shadow-card text-center group hover:-translate-y-1 hover:border-accent-warm/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-accent-warm mb-0.5">12–23 kg</span>
              <span className="text-xs text-text-secondary font-medium">Sustained Weight Drop</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="up">
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-border/80 shadow-card text-center group hover:-translate-y-1 hover:border-emerald-500/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-emerald-600 mb-0.5">85%</span>
              <span className="text-xs text-text-secondary font-medium">Reduced Medication Load</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-border/80 shadow-card text-center group hover:-translate-y-1 hover:border-navy/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-pale-blue text-navy flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-navy mb-0.5">94%</span>
              <span className="text-xs text-text-secondary font-medium">Symptom Relief Rate</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Before / After Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {transformations.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.12} direction="up">
              <div className="glass-card rounded-3xl shadow-card border border-border/80 overflow-hidden flex flex-col h-full group hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
                
                {/* Image Slider Component */}
                <div className="w-full relative">
                  <BeforeAfterSlider 
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    className="w-full"
                    beforeClassName={item.beforeClassName}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-pale-blue text-primary font-bold text-xs rounded-full border border-primary/20">
                      {item.category}
                    </span>
                    <div className="flex items-center text-text-muted text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5 mr-1 text-primary" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-navy mb-3 leading-snug group-hover:text-primary transition-colors">
                    {item.summary}
                  </h3>
                  
                  <div className="mt-auto pt-4">
                    <div className="relative bg-pale-blue/40 rounded-2xl p-4 border border-border/70">
                      <Quote className="absolute top-2.5 left-2.5 w-6 h-6 text-primary/15 rotate-180 pointer-events-none" />
                      <p className="text-xs sm:text-sm text-text-secondary font-medium italic relative z-10 pl-3 leading-relaxed">
                        &ldquo;{item.testimonial}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust & Privacy Note */}
        <ScrollReveal delay={0.3} direction="up">
          <div className="mt-14 text-center flex items-center justify-center gap-2 text-text-muted text-xs font-medium">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <p>Transformation cases are shared with patient consent for awareness and educational purposes.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

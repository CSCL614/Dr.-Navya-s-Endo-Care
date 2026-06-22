"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { CheckCircle2, Clock, Quote, ShieldCheck } from "lucide-react";

const transformations = [
  {
    id: 1,
    category: "Weight Management",
    duration: "8 Months",
    summary: "Significant reduction in BMI and improved metabolic markers through specialized endocrine therapy.",
    testimonial: "I finally feel like myself again. The personalized approach changed my entire relationship with my body.",
    beforeImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop", 
    afterImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",  
    beforeClassName: "grayscale contrast-125 brightness-75 blur-[1px]", // Makes it look dull/unhealthy
  },
  {
    id: 2,
    category: "Thyroid & Vitality",
    duration: "4 Months",
    summary: "Restored energy levels, reduced facial puffiness, and stabilized hormone levels with precise medication tuning.",
    testimonial: "The brain fog is completely gone, and I finally have the energy to get through my busy days.",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", 
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", 
    beforeClassName: "saturate-0 sepia-[.3] brightness-90", // Makes it look tired/pale
  },
  {
    id: 3,
    category: "Diabetes Control",
    duration: "6 Months",
    summary: "Successfully achieved normal HbA1c levels and reduced dependency on medications through holistic management.",
    testimonial: "Dr. Navya helped me take control of my diabetes instead of letting it control my life.",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", 
    afterImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", 
    beforeClassName: "grayscale contrast-150 blur-[2px]", // Abstract dull/medical feel
  }
];

export function TransformationsSection() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden" id="transformations">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Real Patient Outcomes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
              Real Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transformations</span>
            </h2>
            <p className="text-lg text-slate-600">
              Witness inspiring health journeys through expert endocrinology care and personalized treatment.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col h-full group hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
                
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
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary-dark font-semibold text-xs rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-xs font-medium">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.duration}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug">
                    {item.summary}
                  </h3>
                  
                  <div className="mt-auto pt-6">
                    <div className="relative bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <Quote className="absolute top-2 left-2 w-8 h-8 text-primary/10 rotate-180" />
                      <p className="text-sm text-slate-600 font-medium italic relative z-10 pl-4">
                        "{item.testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust & Privacy Note */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center flex items-center justify-center gap-2 text-slate-400 text-xs font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <p>Transformation images are shared with patient consent for awareness and educational purposes.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Shield, Sparkles, Stethoscope, HeartHandshake, Microscope, Users } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Personalized Treatment",
      desc: "Every patient is unique. We design custom treatment plans tailored specifically to your body's hormonal needs and lifestyle.",
      icon: Sparkles
    },
    {
      title: "Advanced Diagnosis",
      desc: "Utilizing state-of-the-art medical technology to accurately diagnose complex endocrine and metabolic disorders.",
      icon: Microscope
    },
    {
      title: "Expert Consultation",
      desc: "Direct access to one of the region's most experienced and highly credentialed endocrinology specialists.",
      icon: Stethoscope
    },
    {
      title: "Compassionate Support",
      desc: "We believe in treating the whole person, not just the disease. Experience healthcare with true empathy and care.",
      icon: HeartHandshake
    },
    {
      title: "Evidence-Based Care",
      desc: "Our protocols are strictly based on the latest international medical research and proven clinical guidelines.",
      icon: Shield
    },
    {
      title: "Patient-Centered",
      desc: "Your comfort, understanding, and long-term health are at the center of every medical decision we make.",
      icon: Users
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pale-blue/50 rounded-full blur-[100px] transform-gpu pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Clinical Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-5 leading-tight tracking-tight">
              Why Choose <span className="gradient-text">Dr. Navya's EndoCare</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              We go beyond standard medical practice to deliver a premium, deeply caring, and highly effective healthcare experience.
            </p>
          </ScrollReveal>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.08} direction="up">
              <div className="group glass-card rounded-3xl p-8 border border-border/80 shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                
                {/* Subtle hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pale-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-pale-blue rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-2xs">
                    <reason.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-navy mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base flex-grow">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

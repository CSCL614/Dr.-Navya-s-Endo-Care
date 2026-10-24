"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Sparkles, Stethoscope, HeartHandshake, Microscope, Users } from "lucide-react";
import { CenterIconBadge } from "@/components/ui/CreativeCard";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Personalized Treatment",
      desc: "Every patient is unique. We design custom treatment plans tailored specifically to your body's hormonal needs and lifestyle.",
      icon: Sparkles,
      variant: "teal" as const,
    },
    {
      title: "Advanced Diagnosis",
      desc: "Utilizing state-of-the-art medical technology to accurately diagnose complex endocrine and metabolic disorders.",
      icon: Microscope,
      variant: "sky" as const,
    },
    {
      title: "Expert Consultation",
      desc: "Direct access to one of the region's most experienced and highly credentialed endocrinology specialists.",
      icon: Stethoscope,
      variant: "navy" as const,
    },
    {
      title: "Compassionate Support",
      desc: "We believe in treating the whole person, not just the disease. Experience healthcare with true empathy and care.",
      icon: HeartHandshake,
      variant: "rose" as const,
    },
    {
      title: "Evidence-Based Care",
      desc: "Our protocols are strictly based on the latest international medical research and proven clinical guidelines.",
      icon: ShieldCheck,
      variant: "emerald" as const,
    },
    {
      title: "Patient-Centered",
      desc: "Your comfort, understanding, and long-term health are at the center of every medical decision we make.",
      icon: Users,
      variant: "amber" as const,
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pale-blue/40 rounded-full blur-[100px] transform-gpu pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal>
            <div className="badge-mint mb-3.5 inline-flex">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Clinical Philosophy</span>
            </div>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy mb-4 leading-tight tracking-tight">
              Why Choose <span className="gradient-text">Dr. Navya's EndoCare</span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-text-secondary leading-relaxed">
              We go beyond standard medical practice to deliver a premium, deeply caring, and highly effective healthcare experience in Vizianagaram.
            </p>
          </ScrollReveal>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.06} direction="up">
              <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-[#E3EBF0] shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-pale-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center h-full w-full">
                  {/* Centered Icon Badge */}
                  <CenterIconBadge 
                    icon={reason.icon}
                    variant={reason.variant}
                    size="lg"
                    className="mb-5"
                  />
                  
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-navy mb-2.5 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-[#344654] leading-relaxed text-xs sm:text-sm flex-grow">
                    {reason.desc}
                  </p>

                  {/* Bottom subtle accent line */}
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

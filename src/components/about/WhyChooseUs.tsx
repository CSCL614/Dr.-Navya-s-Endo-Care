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
    <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-[100px] transform-gpu" style={{ willChange: "transform" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dr. Navya's Endo Care</span>
            </h2>
            <p className="text-lg text-slate-600">
              We go beyond standard medical practice to deliver a premium, deeply caring, and highly effective healthcare experience.
            </p>
          </ScrollReveal>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="group relative bg-white rounded-3xl p-1 bg-gradient-to-b from-slate-200 to-white hover:from-primary/50 hover:to-secondary/50 transition-all duration-500 shadow-sm hover:shadow-xl h-full">
                
                {/* Inner Card */}
                <div className="bg-white rounded-[1.4rem] p-8 h-full flex flex-col relative overflow-hidden">
                  
                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <reason.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold font-heading text-slate-800 mb-3">
                      {reason.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base flex-grow">
                      {reason.desc}
                    </p>
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

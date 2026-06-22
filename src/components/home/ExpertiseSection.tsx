"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Stethoscope, Microscope, Brain, HeartPulse } from "lucide-react";

const expertiseList = [
  {
    icon: Stethoscope,
    title: "Expert Diagnosis",
    description: "State-of-the-art diagnostic approach to accurately identify root causes of hormonal imbalances.",
  },
  {
    icon: HeartPulse,
    title: "Personalized Care",
    description: "Every body is different. We craft customized treatment plans tailored to your unique metabolic profile.",
  },
  {
    icon: Microscope,
    title: "Advanced Treatments",
    description: "Utilizing the latest advancements in endocrinology for effective and sustainable results.",
  },
  {
    icon: Brain,
    title: "Holistic Wellness",
    description: "Focusing not just on symptoms, but on overall lifestyle, nutrition, and mental well-being.",
  },
];

export function ExpertiseSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-3 inline-block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-4">
              Excellence in Endocrine Care
            </h2>
            <p className="text-slate-600 text-lg">
              We combine years of specialized medical expertise with a compassionate, patient-first philosophy to help you achieve optimal health.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseList.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-soft hover:-translate-y-2 transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Activity, Apple, Baby, Scale, Stethoscope, Droplet, ArrowRight } from "lucide-react";
import Link from "next/link";

export function EndocrinologyEdu() {
  const topics = [
    {
      title: "Diabetes Care",
      desc: "Advanced management of Type 1, Type 2, and Gestational diabetes using continuous glucose monitoring and personalized plans.",
      icon: Droplet,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200"
    },
    {
      title: "Thyroid Disorders",
      desc: "Comprehensive diagnosis and treatment of hypothyroidism, hyperthyroidism, thyroid nodules, and autoimmune thyroid diseases.",
      icon: Activity,
      color: "text-teal-500",
      bg: "bg-teal-50",
      border: "group-hover:border-teal-200"
    },
    {
      title: "PCOS & Fertility",
      desc: "Holistic hormonal balancing for Polycystic Ovary Syndrome, addressing irregular cycles, weight issues, and reproductive health.",
      icon: Baby,
      color: "text-pink-500",
      bg: "bg-pink-50",
      border: "group-hover:border-pink-200"
    },
    {
      title: "Metabolism & Obesity",
      desc: "Medical weight management focused on identifying and treating underlying metabolic and hormonal barriers to weight loss.",
      icon: Scale,
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "group-hover:border-orange-200"
    },
    {
      title: "Hormonal Imbalance",
      desc: "Targeted therapy for adrenal, pituitary, and reproductive hormone imbalances that cause fatigue, mood swings, and hair loss.",
      icon: Apple,
      color: "text-green-500",
      bg: "bg-green-50",
      border: "group-hover:border-green-200"
    },
    {
      title: "Preventive Care",
      desc: "Proactive screening and lifestyle interventions designed to prevent the onset of chronic endocrine and metabolic conditions.",
      icon: Stethoscope,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      border: "group-hover:border-indigo-200"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-2 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
                <span className="text-sm font-semibold text-slate-700 tracking-wide">WHAT WE TREAT</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6">
                Understanding <span className="text-primary">Endocrinology</span>
              </h2>
              <p className="text-lg text-slate-600">
                Endocrinology is the highly specialized study of hormones. Hormones control almost every vital function in your body—from how your heart beats to how your tissues grow, and how your body converts food into energy.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="left">
            <Link href="/services" className="hidden lg:inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {topics.map((topic, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className={`group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full ${topic.border}`}>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full pb-4">
                  <div className={`w-14 h-14 rounded-2xl ${topic.bg} ${topic.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <topic.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-slate-800 mb-3 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base flex-grow">
                    {topic.desc}
                  </p>
                </div>
                
                <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-full ${topic.bg} ${topic.color} flex items-center justify-center`}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center lg:hidden">
          <ScrollReveal direction="up">
            <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

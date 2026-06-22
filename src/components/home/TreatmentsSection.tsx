"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Activity, Bone, Scale, ActivitySquare, Droplets, Baby } from "lucide-react";

const treatments = [
  {
    icon: Activity,
    title: "Diabetes Management",
    description: "Comprehensive care for Type 1, Type 2, and Gestational Diabetes with advanced monitoring.",
    link: "/services#diabetes",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: ActivitySquare,
    title: "Thyroid Disorders",
    description: "Expert diagnosis and treatment for Hypothyroidism, Hyperthyroidism, and Thyroid Nodules.",
    link: "/services#thyroid",
    color: "bg-purple-50 text-purple-500",
  },
  {
    icon: Droplets,
    title: "Hormonal Imbalance",
    description: "Specialized therapy for restoring optimal hormonal balance and improving quality of life.",
    link: "/services#hormonal",
    color: "bg-teal-50 text-teal-500",
  },
  {
    icon: Scale,
    title: "Obesity & Weight",
    description: "Medical weight management programs addressing the underlying metabolic and endocrine causes.",
    link: "/services#obesity",
    color: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: Baby,
    title: "PCOS Care",
    description: "Multidisciplinary approach to managing Polycystic Ovary Syndrome and associated symptoms.",
    link: "/services#pcos",
    color: "bg-pink-50 text-pink-500",
  },
  {
    icon: Bone,
    title: "Bone Health",
    description: "Prevention and management of Osteoporosis and other calcium/bone metabolism disorders.",
    link: "/services#bone",
    color: "bg-orange-50 text-orange-500",
  },
];

export function TreatmentsSection() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-secondary/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-secondary font-semibold tracking-wider text-sm uppercase mb-3 inline-block">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-4">
                Specialized Treatments
              </h2>
              <p className="text-slate-600 text-lg">
                Providing advanced, evidence-based therapies for a wide spectrum of endocrine and metabolic conditions.
              </p>
            </div>
            <Link 
              href="/services" 
              className="mt-6 md:mt-0 hidden md:flex items-center text-primary font-medium hover:text-primary-dark transition-colors group"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <div className={`w-14 h-14 ${treatment.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <treatment.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-heading group-hover:text-primary transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-slate-500 mb-6 line-clamp-3">
                  {treatment.description}
                </p>
                <Link 
                  href={treatment.link}
                  className="inline-flex items-center text-sm font-semibold text-slate-400 group-hover:text-primary transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Activity, Bone, Scale, ActivitySquare, Droplets, Baby, HeartPulse, LineChart } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function TreatmentsSection() {
  const iconList = [Activity, LineChart, Scale, ActivitySquare, Baby, HeartPulse];

  const featured = doctorData.specialities.slice(0, 6);

  return (
    <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden" id="specialities-preview">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-teal-600 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 inline-block">
                Comprehensive Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-3">
                Clinical Specialities & Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Advanced, evidence-based management for adult and paediatric endocrine and metabolic disorders.
              </p>
            </div>
            <Link 
              href="/services" 
              className="hidden md:flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group text-sm"
            >
              <span>View All 11 Specialities</span>
              <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((treatment, index) => {
            const Icon = iconList[index % iconList.length];
            return (
              <ScrollReveal key={treatment.id} delay={index * 0.08}>
                <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-xs hover:shadow-xl hover:border-teal-200 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 font-heading group-hover:text-primary transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                    {treatment.shortDesc}
                  </p>
                  <Link 
                    href={`/services#${treatment.id}`}
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-teal-600 group-hover:text-primary transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors text-sm"
          >
            <span>View All 11 Specialities</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

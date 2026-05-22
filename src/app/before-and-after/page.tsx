"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Quote, TrendingDown, Activity, BatteryCharging } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

const transformations = [
  {
    id: 1,
    patientName: "S. K.",
    duration: "6 Months",
    category: "Weight & Metabolic",
    title: "Reversing Metabolic Syndrome",
    story: "Struggling with obesity and pre-diabetes for 5 years, S.K. underwent our medical weight management protocol. Combining tailored medication, continuous glucose monitoring, and lifestyle shifts.",
    stats: [
      { label: "Weight", before: "105 kg", after: "82 kg" },
      { label: "HbA1c", before: "6.4%", after: "5.2%" },
    ],
    icon: TrendingDown,
  },
  {
    id: 2,
    patientName: "M. R.",
    duration: "4 Months",
    category: "Diabetes Management",
    title: "Achieving Glycemic Control",
    story: "Diagnosed with Type 2 Diabetes and severe neuropathy. We optimized his insulin regimen and introduced new class oral therapies. Neuropathy symptoms reduced significantly.",
    stats: [
      { label: "HbA1c", before: "9.8%", after: "6.5%" },
      { label: "Fasting Sugar", before: "210 mg/dL", after: "105 mg/dL" },
    ],
    icon: Activity,
  },
  {
    id: 3,
    patientName: "A. D.",
    duration: "8 Months",
    category: "Thyroid Recovery",
    title: "Overcoming Hashimoto's Fatigue",
    story: "Suffering from severe brain fog, weight gain, and fatigue despite being on standard thyroid medication elsewhere. We adjusted her protocol using comprehensive T3/T4 profiling.",
    stats: [
      { label: "Energy Levels", before: "Low", after: "Optimal" },
      { label: "TSH", before: "12.5", after: "2.1" },
    ],
    icon: BatteryCharging,
  },
];

export default function BeforeAndAfterPage() {
  const { openModal } = useAppointment();

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-20 bg-gradient-medical overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-6 leading-tight">
              Real Lives, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transformed</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Witness the power of expert endocrine care. These are the inspiring journeys of our patients who took control of their health.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Transformation Cases */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="space-y-24">
            {transformations.map((item, index) => (
              <div key={item.id} className="relative">
                <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    
                    {/* Visual/Stats Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="flex items-center justify-between mb-8">
                          <div>
                            <span className="text-primary font-bold text-sm uppercase tracking-wider">{item.category}</span>
                            <h3 className="text-2xl font-bold text-slate-800 font-heading mt-1">{item.title}</h3>
                          </div>
                          <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-primary">
                            <item.icon className="w-6 h-6" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 relative z-10">
                          {item.stats.map((stat, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                              <p className="text-slate-500 text-sm font-medium mb-3">{stat.label}</p>
                              <div className="flex flex-col gap-2">
                                <div className="flex items-center text-slate-400">
                                  <span className="w-16 text-xs uppercase font-bold tracking-wide">Before</span>
                                  <span className="text-lg line-through decoration-red-300 decoration-2">{stat.before}</span>
                                </div>
                                <div className="flex items-center text-primary-dark">
                                  <span className="w-16 text-xs uppercase font-bold tracking-wide">After</span>
                                  <span className="text-2xl font-bold font-heading">{stat.after}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3 text-slate-600">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                              {item.patientName.split('')[0]}
                            </div>
                            <span className="font-medium">Patient: {item.patientName}</span>
                          </div>
                          <span className="px-4 py-1.5 bg-green-100 text-green-700 font-semibold rounded-full text-sm">
                            Duration: {item.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Story Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <Quote className="w-12 h-12 text-primary/20" />
                      <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                        "{item.story}"
                      </p>
                      <p className="text-slate-500 text-lg">
                        Our personalized protocol helped them regain their vitality and establish long-term health habits.
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="bg-white rounded-3xl p-10 md:p-16 text-center shadow-soft border border-slate-100 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">Start Your Transformation Story</h2>
              <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                Every big change starts with a single step. Let our expert endocrinology team guide you towards a healthier, happier you.
              </p>
              <button 
                onClick={openModal}
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-soft hover:shadow-glow transition-all hover:-translate-y-1"
              >
                Book Your Consultation Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

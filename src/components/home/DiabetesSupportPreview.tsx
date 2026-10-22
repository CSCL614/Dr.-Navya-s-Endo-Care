"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Activity, Syringe, Footprints, ShieldAlert, Sparkles, ArrowRight, CheckCircle2, Building, HeartPulse } from "lucide-react";
import Link from "next/link";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function DiabetesSupportPreview() {
  const { openModal } = useAppointment();
  const diabetes = doctorData.diabetesSupport;

  const quickServices = [
    {
      title: "Diabetes Education & CGM",
      desc: "Comprehensive blood sugar tracking guidance and continuous glucose monitoring.",
      icon: Activity
    },
    {
      title: "Insulin Initiation & Training",
      desc: "Pen techniques, site rotation, proper needle hygiene, storage, and timing advice.",
      icon: Syringe
    },
    {
      title: "Diabetic Foot Risk Assessment",
      desc: "Biothesiometry, Monofilament, Foot-temperature, ABI, and Podometry.",
      icon: Footprints
    },
    {
      title: "Hypoglycemia Prevention",
      desc: "Recognizing low sugar symptoms early and mastering the Rule of 15 recovery protocol.",
      icon: ShieldAlert
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden" id="diabetes-support">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                Comprehensive Endocrine Care
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight mb-4">
                Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Diabetes Support</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                {diabetes.subtitle}
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="left">
            <Link
              href="/diabetes-care"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group text-sm sm:text-base whitespace-nowrap"
            >
              <span>Explore All Diabetes Facilities</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 4 Quick Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickServices.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-800 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Foot Assessment & Clinic Facilities Highlights Strip */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-teal-50/60 rounded-3xl p-7 lg:p-8 border border-teal-100/80 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center lg:text-left">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">Advanced Complication Screening</span>
              <h4 className="text-xl font-bold font-heading text-slate-800">
                Diabetic Foot Risk Assessment Facilities
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Biothesiometry (VPT), Monofilament Testing, Foot Thermometry, Ankle–Brachial Index (ABI), and Plantar Pressure Podometry. Also featuring on-site diagnostic laboratory, 24-hr pharmacy, and day-care services.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/diabetes-care"
                className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl text-sm border border-slate-200 hover:bg-slate-50 transition-all"
              >
                View Assessment Details
              </Link>
              <button
                onClick={openModal}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-sm shadow-soft transition-all"
              >
                Book Diabetes Checkup
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

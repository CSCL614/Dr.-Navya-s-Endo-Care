"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Activity, Syringe, Footprints, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="diabetes-support">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-pale-blue/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal direction="up">
              <div className="section-tag mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Comprehensive Endocrine Care</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight tracking-tight mb-4">
                Complete <span className="gradient-text">Diabetes Support</span>
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                {diabetes.subtitle}
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="left">
            <Link
              href="/diabetes-care"
              className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors group text-sm sm:text-base whitespace-nowrap"
            >
              <span>Explore All Diabetes Facilities</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 4 Quick Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {quickServices.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08} direction="up">
              <div className="glass-card rounded-3xl p-7 border border-border/80 shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col group">
                <div className="w-13 h-13 bg-pale-blue rounded-2xl flex items-center justify-center text-primary shadow-2xs mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-105">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Foot Assessment & Clinic Facilities Highlights Strip */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="glass-card bg-pale-blue/40 rounded-3xl p-7 lg:p-9 border border-primary/20 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-card">
            <div className="space-y-1.5 text-center lg:text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">Advanced Complication Screening</span>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-navy">
                Diabetic Foot Risk Assessment Facilities
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary max-w-2xl leading-relaxed">
                Biothesiometry (VPT), Monofilament Testing, Foot Thermometry, Ankle–Brachial Index (ABI), and Plantar Pressure Podometry. Also featuring on-site diagnostic laboratory, 24-hr pharmacy, and day-care services.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/diabetes-care"
                className="px-6 py-3 bg-white text-navy font-bold rounded-xl text-xs sm:text-sm border border-border/80 hover:border-primary/40 hover:bg-pale-blue shadow-2xs transition-all active:scale-95"
              >
                View Assessment Details
              </Link>
              <button
                onClick={openModal}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs sm:text-sm shadow-card hover:shadow-card-hover transition-all active:scale-95"
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

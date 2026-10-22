"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, ArrowRight, Bone, Scale, ActivitySquare, Droplets, Baby, 
  Brain, Apple, Stethoscope, HeartPulse, LineChart, Syringe, Sparkles, CheckCircle2, ShieldCheck, LucideIcon, Phone, MessageCircle 
} from "lucide-react";
import Link from "next/link";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";
import { PreventionSection } from "@/components/home/PreventionSection";
import { ClinicFacilitiesSection } from "@/components/home/ClinicFacilitiesSection";

export default function ServicesPage() {
  const { openModal } = useAppointment();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoryIcons: Record<string, LucideIcon> = {
    "type-1-diabetes": Activity,
    "type-2-diabetes": LineChart,
    "obesity-metabolic": Scale,
    "thyroid-disorders": ActivitySquare,
    "lifestyle-metabolic": Apple,
    "pcos": Baby,
    "paediatric-endocrinology": HeartPulse,
    "growth-puberty": Sparkles,
    "pituitary-adrenal": Brain,
    "reproductive-endocrinology": Droplets,
    "calcium-bone": Bone,
  };

  const detailLinkMap: Record<string, string> = {
    "type-1-diabetes": "/diabetes-care",
    "type-2-diabetes": "/diabetes-care",
    "obesity-metabolic": "/obesity-metabolic-health",
    "thyroid-disorders": "/thyroid-care",
    "lifestyle-metabolic": "/obesity-metabolic-health",
    "pcos": "/pcos-womens-health",
    "paediatric-endocrinology": "/paediatric-endocrinology",
    "growth-puberty": "/paediatric-endocrinology",
    "pituitary-adrenal": "/pituitary-adrenal-care",
    "reproductive-endocrinology": "/pcos-womens-health",
    "calcium-bone": "/bone-mineral-health",
  };

  const categories = [
    { id: "all", label: "All Specialities" },
    { id: "metabolic", label: "Diabetes & Metabolism" },
    { id: "thyroid", label: "Thyroid" },
    { id: "paediatric", label: "Paediatric Endocrinology" },
    { id: "reproductive", label: "Reproductive & PCOS" },
    { id: "hormonal", label: "Pituitary, Adrenal & Bone" }
  ];

  const filteredSpecialities = selectedCategory === "all"
    ? doctorData.specialities
    : doctorData.specialities.filter(s => s.category === selectedCategory);

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200 text-primary font-semibold rounded-full text-xs sm:text-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              Adult & Paediatric Superspeciality Care
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-6 leading-tight">
              Clinical Interests & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Specialities</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive, patient-centred care for complex hormonal, metabolic, and glandular disorders guided by Dr. Navya Sruthi Mandapati, DM (Endocrinology).
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-12 pb-4">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white shadow-soft"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Clinical Specialities Cards Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpecialities.map((item, index) => {
              const Icon = categoryIcons[item.id] || Stethoscope;
              return (
                <ScrollReveal key={item.id} delay={(index % 3) * 0.08}>
                  <div 
                    id={item.id}
                    className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 h-full flex flex-col group scroll-mt-28"
                  >
                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-slate-800 mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.fullDesc}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-8 flex-grow">
                      <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
                        Clinical Focus:
                      </span>
                      {item.keyPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2.5 mt-auto pt-2">
                      {detailLinkMap[item.id] && (
                        <Link 
                          href={detailLinkMap[item.id]}
                          className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-primary hover:border-primary text-center font-semibold transition-colors text-xs"
                        >
                          Learn More
                        </Link>
                      )}
                      <button 
                        onClick={openModal}
                        className="flex-1 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-colors text-xs shadow-xs text-center"
                      >
                        Book Visit
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete Clinic Facilities Section */}
      <ClinicFacilitiesSection isCompact={false} />

      {/* Prevention Before Complications Section */}
      <PreventionSection />

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 pt-16 max-w-5xl">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-primary to-teal-600 rounded-[2.5rem] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-xl shadow-teal-500/15">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Need Expert Endocrine Guidance?
            </h2>
            <p className="text-base sm:text-lg text-teal-50 max-w-2xl mx-auto mb-8 font-light">
              Don't leave hormonal or metabolic symptoms unresolved. Dr. Navya Sruthi Mandapati provides thorough, individualized evaluations tailored to your health goals.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <button 
                onClick={openModal}
                className="px-8 py-4 bg-white text-primary-dark font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-base"
              >
                Schedule An Appointment
              </button>
              <a
                href="tel:8464070196"
                className="px-8 py-4 bg-teal-700/60 hover:bg-teal-700 text-white font-semibold rounded-full border border-teal-300/40 transition-all text-base inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-200" />
                Call: 8464070196
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md transition-all hover:scale-105 text-base inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: 8464070196
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-teal-800/60 hover:bg-teal-800 text-teal-100 font-semibold rounded-full border border-teal-400/30 transition-all text-base"
              >
                Contact Clinic
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

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

import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

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

  const categoryVariants: Record<string, IconBadgeVariant> = {
    "type-1-diabetes": "teal",
    "type-2-diabetes": "teal",
    "obesity-metabolic": "amber",
    "thyroid-disorders": "sky",
    "lifestyle-metabolic": "emerald",
    "pcos": "rose",
    "paediatric-endocrinology": "mint",
    "growth-puberty": "indigo",
    "pituitary-adrenal": "navy",
    "reproductive-endocrinology": "rose",
    "calcium-bone": "amber",
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
    <div className="overflow-hidden bg-background min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 bg-gradient-hero border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-soft-teal/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-border text-primary font-semibold rounded-full text-xs sm:text-sm mb-6 shadow-2xs">
              <Sparkles className="w-4 h-4 text-primary" />
              Adult & Paediatric Superspeciality Care
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-navy mb-6 leading-tight">
              Clinical Interests & <span className="text-primary">Specialities</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
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
                    ? "bg-primary text-white shadow-card"
                    : "bg-white text-navy hover:bg-soft-teal border border-border"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredSpecialities.map((item, index) => {
              const Icon = categoryIcons[item.id] || Stethoscope;
              const variant = categoryVariants[item.id] || "teal";
              return (
                <ScrollReveal key={item.id} delay={(index % 3) * 0.08}>
                  <div 
                    id={item.id}
                    className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col group scroll-mt-28"
                  >
                    {/* Centered Icon Badge */}
                    <div className="flex justify-center mb-5">
                      <CenterIconBadge 
                        icon={Icon} 
                        variant={variant} 
                        size="md" 
                      />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy mb-2.5 text-center group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6 text-center">
                      {item.fullDesc}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-8 flex-grow pt-4 border-t border-[#E3EBF0]">
                      <span className="text-[11px] font-bold text-navy uppercase tracking-wider block mb-1.5">
                        Clinical Focus:
                      </span>
                      {item.keyPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2.5 mt-auto pt-2">
                      {detailLinkMap[item.id] && (
                        <Link 
                          href={detailLinkMap[item.id]}
                          className="flex-1 py-2.5 rounded-xl border border-border text-navy hover:text-primary hover:border-primary/40 text-center font-semibold transition-colors text-xs"
                        >
                          Learn More
                        </Link>
                      )}
                      <button 
                        onClick={openModal}
                        className="flex-1 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-colors text-xs shadow-2xs text-center active:scale-95"
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
          <div className="bg-gradient-navy rounded-[2.5rem] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-xl border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                Need Expert Endocrine Guidance?
              </h2>
              <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
                Don't leave hormonal or metabolic symptoms unresolved. Dr. Navya Sruthi Mandapati provides thorough, individualized evaluations tailored to your health goals.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                <button 
                  onClick={openModal}
                  className="px-8 py-4 bg-white text-navy font-bold rounded-full shadow-md hover:bg-soft-teal transition-all text-base"
                >
                  Schedule An Appointment
                </button>
                <a
                  href="tel:8464070196"
                  className="px-8 py-4 bg-primary/80 hover:bg-primary text-white font-semibold rounded-full border border-white/20 transition-all text-base inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" />
                  Call: 8464070196
                </a>
                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md transition-all text-base inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: 8464070196
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all text-base"
                >
                  Contact Clinic
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

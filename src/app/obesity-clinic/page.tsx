"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Clock, Users, Scale, HeartPulse, Sparkles, CheckCircle2, ArrowRight, 
  ShieldCheck, Activity, HelpCircle, Phone, MessageCircle, Apple, LineChart, LucideIcon, CalendarHeart 
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";
import Link from "next/link";
import { ExpandableGroup } from "@/components/ui/ExpandableGroup";

export default function ObesityClinicPage() {
  const { openModal } = useAppointment();
  const clinic = doctorData.obesityClinic;
  const [openPhaseGroupId, setOpenPhaseGroupId] = useState<string | null>("diagnostic-joint");

  const phaseGroups = [
    {
      id: "diagnostic-joint",
      title: "Phases 01 & 02: Metabolic Diagnosis & Joint Specialist Consultation",
      subtitle: "Biomarker Evaluation, Fasting Glucose, Liver Function & Joint Doctor-Dietician Review",
      badge: "Clinical Investigation",
      icon: Activity,
      iconVariant: "teal" as const,
      phases: [
        {
          num: "01",
          title: "Comprehensive Metabolic Assessment",
          desc: "Detailed evaluation of fasting glucose, insulin levels, lipid profile, liver enzymes, and hormonal triggers like thyroid or PCOS to uncover why weight loss has stalled."
        },
        {
          num: "02",
          title: "Joint Medical & Dietary Consultation",
          desc: "Meeting with both Consultant Endocrinologist Dr. Navya and Clinical Dietician Dr. Syamini Siripuram to evaluate authentic food habits, sleep cycles, and daily stressors."
        }
      ]
    },
    {
      id: "therapy-maintenance",
      title: "Phases 03 & 04: Tailored Medical Therapy & Sustainable Maintenance",
      subtitle: "Andhra Nutrition Planning, Evidence-Based Pharmacotherapy & Body Composition Follow-ups",
      badge: "Treatment & Longevity",
      icon: Apple,
      iconVariant: "emerald" as const,
      phases: [
        {
          num: "03",
          title: "Customized Medical & Nutrition Plan",
          desc: "Formulation of realistic medical nutrition therapy, physical activity pacing, and prescription of evidence-based obesity pharmacotherapy if clinically indicated."
        },
        {
          num: "04",
          title: "Long-term Monitoring & Support",
          desc: "Structured follow-ups to measure metabolic improvements, track body composition, and solidify sustainable lifelong health habits without rebound weight gain."
        }
      ]
    }
  ];

  const whoBenefits = [
    "Individuals with persistent weight gain despite standard dieting",
    "Patients diagnosed with prediabetes, Type 2 diabetes, or insulin resistance",
    "Women experiencing PCOS-related weight struggles and cycle irregularities",
    "Individuals with non-alcoholic fatty liver disease (NAFLD) or dyslipidemia",
    "Anyone seeking safe, scientific, and medically supervised weight management"
  ];

  return (
    <div className="overflow-hidden bg-background min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 bg-gradient-hero border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-soft-teal/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-border text-primary font-semibold rounded-full text-xs sm:text-sm mb-6 shadow-2xs">
              <Sparkles className="w-4 h-4 text-primary" />
              Specialized Superspeciality Care
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-navy mb-6 leading-tight">
              Obesity & <span className="text-primary">Lifestyle Clinic</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              A scientific, compassionate, and multidisciplinary approach to metabolic health and sustainable weight loss in Vizianagaram.
            </p>

            {/* Prominent Schedule Banner */}
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white border border-border rounded-3xl p-6 sm:p-7 shadow-card max-w-2xl w-full">
              <div className="w-12 h-12 bg-soft-teal text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xs font-bold text-primary uppercase tracking-widest">Clinic Schedule</div>
                <div className="text-2xl font-black font-heading text-navy">{clinic.schedule}</div>
                <div className="text-xs text-text-secondary mt-0.5">{clinic.team} • Prior Booking Recommended</div>
              </div>
              <button
                onClick={openModal}
                className="mt-2 sm:mt-0 sm:ml-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-sm shadow-card hover:shadow-card-hover transition-all cursor-pointer"
              >
                Book Slot
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content & Approach */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="right">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy leading-tight">
                  Moving Beyond Simplistic Advice to Medical Science
                </h2>
                <p className="text-text-secondary leading-relaxed text-xs sm:text-sm md:text-base">
                  Obesity is not a lack of willpower; it is a complex, neuroendocrine and metabolic condition where hormonal signals regulating hunger, satiety, fat storage, and metabolic rate become dysregulated.
                </p>
                <p className="text-text-secondary leading-relaxed text-xs sm:text-sm md:text-base">
                  At Dr. Navya’s EndoCare Obesity & Lifestyle Clinic, we partner an <strong className="text-navy font-bold">Endocrinologist</strong> with a <strong className="text-navy font-bold">Dedicated Clinical Dietician</strong> to evaluate and treat the medical drivers of excess weight. We do not promote unsustainable crash diets or unverified supplements.
                </p>

                <div className="space-y-2.5 pt-1">
                  {clinic.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-text-primary text-xs sm:text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-border shadow-card space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-border-light">
                    <div className="w-10 h-10 rounded-xl bg-soft-teal text-primary flex items-center justify-center shadow-2xs">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold font-heading text-navy text-base">Who Should Consult?</h3>
                      <p className="text-xs text-text-muted">Indications for medical obesity evaluation</p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {whoBenefits.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary bg-background-alt p-3 rounded-xl border border-border">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={openModal}
                      className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-card hover:shadow-card-hover transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                    >
                      <CalendarHeart className="w-4 h-4" />
                      <span>Reserve Wednesday Slot</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* 4 Step Process Grouped Accordion */}
          <div>
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy mb-2">
                  How the Clinic Works
                </h2>
                <p className="text-text-secondary text-xs sm:text-sm md:text-base">
                  Structured into two streamlined clinical stages from root-cause diagnosis to lasting lifestyle transformation.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {phaseGroups.map((grp, idx) => {
                const isExpanded = openPhaseGroupId === grp.id;

                return (
                  <ScrollReveal key={grp.id} delay={idx * 0.06} direction="up">
                    <ExpandableGroup
                      id={grp.id}
                      title={grp.title}
                      subtitle={grp.subtitle}
                      badge={grp.badge}
                      icon={grp.icon}
                      iconVariant={grp.iconVariant}
                      itemCount={`${grp.phases.length} Phases`}
                      isExpanded={isExpanded}
                      onToggle={() => setOpenPhaseGroupId((prev) => (prev === grp.id ? null : grp.id))}
                      variant="card"
                      toggleStyle="pill"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                        {grp.phases.map((st) => (
                          <div
                            key={st.num}
                            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-soft-teal text-primary border border-primary/20 rounded-md font-bold text-[11px]">
                                  PHASE {st.num}
                                </span>
                                <h4 className="text-xs sm:text-sm font-bold font-heading text-navy">
                                  {st.title}
                                </h4>
                              </div>
                              <p className="text-xs text-text-secondary leading-relaxed">
                                {st.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ExpandableGroup>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl mt-6">
        <ScrollReveal>
          <div className="bg-gradient-navy rounded-[2.5rem] p-6 sm:p-10 md:p-12 text-center text-white relative overflow-hidden shadow-xl border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 text-white">
                Take the First Step This Wednesday
              </h3>
              <p className="text-white/85 max-w-xl mx-auto text-xs sm:text-sm md:text-base mb-6">
                Join Dr. Navya and our clinical dietician every Wednesday between 4:00 PM and 6:00 PM. Reserve your dedicated consultation slot today.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
                <button
                  onClick={openModal}
                  className="px-8 py-3 bg-white text-navy font-bold rounded-full shadow-md hover:bg-soft-teal transition-all text-xs sm:text-sm cursor-pointer"
                >
                  Book Appointment
                </button>
                <a
                  href="tel:8464070196"
                  className="px-7 py-3 bg-primary/80 hover:bg-primary text-white font-semibold rounded-full border border-white/20 transition-all text-xs sm:text-sm inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" />
                  Call: 8464070196
                </a>
                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md transition-all text-xs sm:text-sm inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: 8464070196
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

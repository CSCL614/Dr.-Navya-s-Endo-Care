"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Clock, Users, Scale, HeartPulse, Sparkles, CheckCircle2, ArrowRight, 
  ShieldCheck, Activity, HelpCircle, Phone, MessageCircle, Apple, LineChart, LucideIcon, CalendarHeart,
  XCircle, Dna, Stethoscope, Flame
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
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 py-1 px-3.5 bg-soft-teal border border-primary/20 text-primary font-bold rounded-full text-xs mb-3 shadow-2xs">
                <Dna className="w-3.5 h-3.5 text-primary" />
                <span>CLINICAL METABOLIC SCIENCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy leading-tight mb-4">
                Moving Beyond Simplistic Advice to <span className="text-primary">Medical Science</span>
              </h2>
              <p className="text-text-secondary leading-relaxed text-xs sm:text-sm md:text-base">
                Obesity is not a lack of willpower; it is a complex, neuroendocrine and metabolic condition where hormonal signals regulating hunger, satiety, fat storage, and metabolic rate become dysregulated.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left 7 Columns: The Scientific Paradigm Comparison & Team */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Comparison Cards: Old Way vs Medical Science */}
              <ScrollReveal direction="right">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Outdated Approach */}
                  <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-200/80 shadow-2xs space-y-3">
                    <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Outdated Approach</span>
                    </div>
                    <div className="text-sm font-bold text-navy leading-snug">
                      Simplistic Calorie Counting & Generic Diets
                    </div>
                    <ul className="space-y-2 text-xs text-rose-900/85">
                      <li className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>Ignores biological hunger hormones (Leptin & Ghrelin)</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>Crash diets cause starvation response and muscle loss</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>90%+ rebound weight regain due to metabolic adaptation</span>
                      </li>
                    </ul>
                  </div>

                  {/* Medical Science Approach */}
                  <div className="bg-gradient-to-br from-soft-teal/80 via-white to-soft-teal/40 rounded-2xl p-5 border border-primary/30 shadow-2xs space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>The EndoCare Science</span>
                    </div>
                    <div className="text-sm font-bold text-navy leading-snug">
                      Hormonal Evaluation & Clinical Medicine
                    </div>
                    <ul className="space-y-2 text-xs text-text-primary">
                      <li className="flex items-start gap-1.5">
                        <span className="text-primary font-bold">✓</span>
                        <span>Comprehensive insulin resistance & metabolic profiling</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-primary font-bold">✓</span>
                        <span>Evidence-based medical pharmacotherapy if indicated</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-primary font-bold">✓</span>
                        <span>Protects muscle mass while targeting visceral adipose tissue</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </ScrollReveal>

              {/* Dual Specialist Care Banner */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="bg-gradient-to-r from-navy via-navy-light to-navy rounded-2xl p-5 sm:p-6 text-white shadow-card border border-white/10 relative overflow-hidden">
                  <div className="relative z-10 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[11px] font-semibold text-emerald-300">
                      <Users className="w-3.5 h-3.5" />
                      <span>Dual-Specialist Synergy</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white leading-snug">
                      Endocrinologist + Clinical Dietician in Every Session
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                      At Dr. Navya’s EndoCare, you don’t receive generic advice. Dr. Navya Sruthi Mandapati, DM (Endocrinology) evaluates endocrine drivers, while our Clinical Dietician personalizes evidence-based medical nutrition therapy tailored to your exact metabolic profile.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                      {clinic.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right 5 Columns: Who Should Consult? Enhanced Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-border shadow-card space-y-4 hover:shadow-xl transition-all">
                  
                  <div className="flex items-center gap-3 pb-3 border-b border-border-light">
                    <div className="w-11 h-11 rounded-2xl bg-soft-teal text-primary flex items-center justify-center shadow-2xs shrink-0">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold font-heading text-navy text-base sm:text-lg">Who Should Consult?</h3>
                      <p className="text-xs text-text-muted font-medium">Indications for medical obesity evaluation</p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {whoBenefits.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2.5 text-xs text-text-primary bg-background-alt hover:bg-soft-teal/30 p-3 rounded-xl border border-border/80 transition-colors"
                      >
                        <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                          {idx + 1}
                        </div>
                        <span className="font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={openModal}
                      className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-card hover:shadow-card-hover transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer group"
                    >
                      <CalendarHeart className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span>Reserve Wednesday Consultation</span>
                    </button>
                    <div className="text-[11px] text-text-muted text-center mt-2 font-medium">
                      Joint slot: Endocrinologist & Dietician • Prior booking recommended
                    </div>
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

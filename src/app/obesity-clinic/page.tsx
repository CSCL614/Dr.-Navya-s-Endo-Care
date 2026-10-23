"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Clock, Users, Scale, HeartPulse, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Activity, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";
import Link from "next/link";

export default function ObesityClinicPage() {
  const { openModal } = useAppointment();
  const clinic = doctorData.obesityClinic;

  const steps = [
    {
      num: "01",
      title: "Comprehensive Metabolic Assessment",
      desc: "Detailed evaluation of fasting glucose, insulin levels, lipid profile, liver enzymes, and hormonal triggers like thyroid or PCOS."
    },
    {
      num: "02",
      title: "Joint Medical & Dietary Consultation",
      desc: "Meeting with both the Consultant Endocrinologist and Clinical Dietician to analyze food habits, sleep cycles, and daily stressors."
    },
    {
      num: "03",
      title: "Customized Medical & Nutrition Plan",
      desc: "Formulation of realistic medical nutrition therapy, physical activity pacing, and prescription of obesity pharmacotherapy if clinically indicated."
    },
    {
      num: "04",
      title: "Long-term Monitoring & Support",
      desc: "Structured follow-ups to measure metabolic improvements, track body composition, and solidify sustainable lifelong health habits."
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
      <section className="relative pt-16 lg:pt-20 pb-20 bg-gradient-hero border-b border-border overflow-hidden">
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
                className="mt-2 sm:mt-0 sm:ml-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-sm shadow-card hover:shadow-card-hover transition-all"
              >
                Book Slot
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content & Approach */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="right">
                <h2 className="text-3xl font-bold font-heading text-navy">
                  Moving Beyond Simplistic Advice to Medical Science
                </h2>
                <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                  Obesity is not a lack of willpower; it is a complex, neuroendocrine and metabolic condition where hormonal signals regulating hunger, satiety, fat storage, and metabolic rate become dysregulated.
                </p>
                <p className="text-text-secondary leading-relaxed text-base">
                  At Dr. Navya’s EndoCare Obesity & Lifestyle Clinic, we partner an <strong className="text-navy font-bold">Endocrinologist</strong> with a <strong className="text-navy font-bold">Dedicated Clinical Dietician</strong> to evaluate and treat the medical drivers of excess weight. We do not promote unsustainable crash diets or unverified supplements.
                </p>

                <div className="space-y-3 pt-2">
                  {clinic.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-text-primary text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-3xl p-8 border border-border shadow-card space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-border-light">
                    <div className="w-10 h-10 rounded-xl bg-soft-teal text-primary flex items-center justify-center shadow-2xs">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold font-heading text-navy text-lg">Who Should Consult?</h3>
                      <p className="text-xs text-text-muted">Indications for medical obesity evaluation</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {whoBenefits.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary bg-background-alt p-3.5 rounded-xl border border-border">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={openModal}
                      className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-card hover:shadow-card-hover transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <span>Schedule a Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* 4 Step Process */}
          <div className="pt-10">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl font-bold font-heading text-navy mb-3">
                  How the Clinic Works
                </h2>
                <p className="text-text-secondary text-sm sm:text-base">
                  A structured, empathetic patient journey from root-cause diagnosis to lasting lifestyle transformation.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, i) => (
                <ScrollReveal key={st.num} delay={i * 0.1} direction="up">
                  <div className="bg-white rounded-3xl p-7 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <span className="text-xs font-bold text-primary bg-soft-teal/80 border border-primary/20 px-3 py-1 rounded-full w-fit mb-4">
                      PHASE {st.num}
                    </span>
                    <h3 className="text-base font-bold font-heading text-navy mb-2">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-grow">
                      {st.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl">
        <ScrollReveal>
          <div className="bg-gradient-navy rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                Take the First Step This Wednesday
              </h3>
              <p className="text-white/85 max-w-xl mx-auto text-base mb-8">
                Join Dr. Navya and our clinical dietician every Wednesday between 4:00 PM and 6:00 PM. Reserve your dedicated consultation slot today.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                <button
                  onClick={openModal}
                  className="px-8 py-3.5 bg-white text-navy font-bold rounded-full shadow-md hover:bg-soft-teal transition-all text-base"
                >
                  Book Appointment
                </button>
                <a
                  href="tel:8464070196"
                  className="px-7 py-3.5 bg-primary/80 hover:bg-primary text-white font-semibold rounded-full border border-white/20 transition-all text-base inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" />
                  Call: 8464070196
                </a>
                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md transition-all text-base inline-flex items-center gap-2"
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

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, GraduationCap, Microscope, Calendar, CheckCircle2, Star, Shield, Quote, HeartPulse, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { doctorData } from "@/data/doctorData";
import { useAppointment } from "@/context/AppointmentContext";

export function DoctorProfile() {
  const { openModal } = useAppointment();

  const highlightBadges = [
    { label: "DM Endocrinology", value: "University Topper", icon: Award },
    { label: "MBBS Distinction", value: "Multiple Gold Medals", icon: GraduationCap },
    { label: "Medical Excellence", value: "Best Outgoing Student", icon: Star },
    { label: "Consultation Scope", value: "Adult & Paediatric", icon: HeartPulse },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="doctor-profile">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[100px] transform-gpu" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-[100px] transform-gpu" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 bg-white border border-border rounded-full px-5 py-2 mb-6 shadow-2xs">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase">Know Your Doctor</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-6 tracking-tight">
              {doctorData.headline}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Dedicated to helping adults and children achieve lasting vitality through scientific, evidence-based endocrinology and deeply personalized, compassionate guidance.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Doctor Image & Highlights (Left Side) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right">
              <div className="relative z-10 sticky top-28">
                {/* Image Frame */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white z-20">
                  <Image
                    src="/images/dr-navya-sruthi-mandapati.jpg"
                    alt="Dr. Navya Sruthi Mandapati — Consultant Endocrinologist"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                    <span className="text-xs font-semibold tracking-wider uppercase text-accent-warm block mb-1">Consultant Endocrinologist</span>
                    <h3 className="text-2xl font-bold font-heading text-white">{doctorData.name}</h3>
                    <p className="text-sm text-white/90">{doctorData.degrees}</p>
                  </div>
                </div>
                
                {/* Background Accent Gradients */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-soft-teal/30 rounded-3xl -rotate-2 z-10 blur-sm pointer-events-none" />

                {/* Floating University Topper Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 bg-white border border-border p-5 rounded-2xl shadow-card flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-soft-teal rounded-2xl flex items-center justify-center text-primary font-bold text-2xl shrink-0 shadow-2xs">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-semibold uppercase tracking-wider">DM Endocrinology</p>
                    <p className="text-lg font-bold text-navy leading-tight">University Topper</p>
                    <p className="text-xs text-primary font-medium">Multiple MBBS Gold Medals</p>
                  </div>
                </motion.div>

                {/* Consultation Details Card */}
                <div className="mt-4 bg-background-alt rounded-2xl p-5 border border-border">
                  <div className="flex items-center gap-3 text-text-primary font-medium text-sm mb-3">
                    <FileText className="w-4 h-4 text-primary shrink-0" />
                    <span>Thorough review of past medical records & labs</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-primary font-medium text-sm mb-4">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Personalized nutrition, activity & sleep guidance</span>
                  </div>
                  <button
                    onClick={openModal}
                    className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold shadow-card hover:shadow-card-hover text-sm transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Book Consultation with Dr. Navya</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Doctor Bio & Key Highlights (Right Side) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Primary Bio Card */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-primary-light to-accent-warm" />
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-3xl lg:text-4xl font-bold font-heading text-navy">
                    {doctorData.name}
                  </h3>
                </div>

                <div className="inline-block bg-soft-teal text-primary-dark px-3.5 py-1 rounded-full text-sm font-semibold mb-6">
                  {doctorData.role}
                </div>
                
                <div className="prose prose-lg text-text-secondary max-w-none leading-relaxed space-y-4">
                  <p>
                    Dr. Navya Sruthi Mandapati is an accomplished Endocrinologist specializing in adult and paediatric hormonal and metabolic disorders. Having secured top university honors throughout her medical training—including graduating as the <strong className="text-navy font-bold">University Topper in DM Endocrinology</strong> and earning <strong className="text-navy font-bold">multiple Gold Medals along with the Best Outgoing Student award</strong> in MBBS—she combines academic rigor with empathetic, human-centered clinical care.
                  </p>
                  <p>
                    Dr. Navya's core philosophy is anchored in patient-centred care. Rather than hurried visits that merely end with a prescription, she dedicates substantial consultation time to thoroughly reviewing each patient's previous medical files, explaining physiological mechanisms, and answering questions in clear, accessible language.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Featured Statement 1 (Prominently Highlighted) */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="bg-gradient-to-br from-teal-500 to-primary-dark rounded-3xl p-8 lg:p-9 text-white shadow-xl shadow-teal-500/15 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <Quote className="w-12 h-12 text-teal-200/40 mb-3" />
                <blockquote className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium font-heading leading-snug mb-4">
                  “{doctorData.featuredQuote1}”
                </blockquote>
                <p className="text-sm text-teal-100/90 font-light">
                  — A core conviction driving every patient interaction at Dr. Navya's EndoCare.
                </p>
              </div>
            </ScrollReveal>

            {/* Featured Statement 2 */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="bg-slate-50 border-l-4 border-primary rounded-2xl p-6 lg:p-7 relative">
                <Quote className="w-8 h-8 text-primary/30 mb-2" />
                <h4 className="text-lg lg:text-xl font-bold font-heading text-slate-800 mb-2">
                  “{doctorData.featuredQuote2}”
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every consultation is structured to ensure patients clearly grasp what caused their symptoms, why specific investigations were recommended, how their medications function, and which sustainable daily habits—nutrition, physical activity, sleep hygiene, and stress mitigation—will keep their metabolism resilient.
                </p>
              </div>
            </ScrollReveal>

            {/* Academic Highlights Grid */}
            <div>
              <ScrollReveal direction="up" delay={0.3}>
                <h4 className="text-xl font-bold font-heading text-slate-800 mb-5 pl-2 border-l-4 border-primary">
                  Academic Distinctions
                </h4>
              </ScrollReveal>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {highlightBadges.map((badge, index) => (
                  <ScrollReveal key={index} delay={0.35 + index * 0.08} direction="up">
                    <div className="flex items-center gap-4 bg-slate-50/90 p-4.5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0">
                        <badge.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">{badge.label}</span>
                        <span className="text-base font-bold text-slate-800 leading-tight block">{badge.value}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

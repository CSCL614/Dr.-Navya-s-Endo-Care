"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, GraduationCap, CheckCircle2, Star, Shield, Quote, HeartPulse, FileText, ArrowRight, Phone, MessageCircle, CalendarHeart } from "lucide-react";
import Image from "next/image";
import { doctorData } from "@/data/doctorData";
import { useAppointment } from "@/context/AppointmentContext";

export function DoctorProfile() {
  const { openModal } = useAppointment();

  return (
    <section className="pt-6 sm:pt-10 pb-16 lg:pb-24 bg-white relative overflow-hidden" id="doctor-profile">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[100px] transform-gpu" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-[100px] transform-gpu" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal>
            <div className="badge-mint mb-3.5 inline-flex">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>Know Your Doctor • షుగర్ & హార్మోన్ల నిపుణులు</span>
            </div>
            <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy mb-4 tracking-tight leading-tight">
              {doctorData.headline}
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto font-normal">
              Dedicated to helping adults and children achieve lasting vitality through scientific, evidence-based endocrinology and deeply personalized, compassionate guidance.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Doctor Image & Highlights (Left Side) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right">
              <div className="relative z-10 sticky top-24 space-y-4">
                {/* Image Frame */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white z-20">
                  <Image
                    src="/images/dr-navya-sruthi-mandapati.jpg"
                    alt="Dr. Navya Sruthi Mandapati — Consultant Endocrinologist"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white pointer-events-none">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-soft-teal block mb-1">Consultant Endocrinologist</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">{doctorData.name}</h3>
                    <p className="text-xs text-white/90">{doctorData.degrees}</p>
                  </div>
                </div>
                
                {/* Background Accent Gradients */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-soft-teal/30 rounded-3xl -rotate-2 z-10 blur-sm pointer-events-none" />

                {/* Academic Distinctions Section — Directly below her image */}
                <div className="pt-2">
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    <h4 className="text-xl font-bold font-heading text-navy">
                      Academic Distinctions
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {/* Card 1: University Topper */}
                    <div className="bg-white rounded-3xl border border-[#E3EBF0] p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_12px_rgba(23,59,87,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,87,0.08)] hover:border-primary/40 transition-all group">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border bg-[#FEF8EC] border-[#FDE68A] shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                        <Award className="w-5 h-5 text-[#D97706]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block leading-none mb-1.5">
                          DM ENDOCRINOLOGY
                        </span>
                        <span className="text-base sm:text-[17px] font-bold text-navy leading-tight block group-hover:text-primary transition-colors">
                          University Topper
                        </span>
                      </div>
                    </div>

                    {/* Card 2: Multiple Gold Medals */}
                    <div className="bg-white rounded-3xl border border-[#E3EBF0] p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_12px_rgba(23,59,87,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,87,0.08)] hover:border-primary/40 transition-all group">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border bg-[#EBF7F5] border-[#A7F3D0] shadow-[0_0_15px_rgba(22,124,128,0.2)]">
                        <GraduationCap className="w-5 h-5 text-[#167C80]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block leading-none mb-1.5">
                          MBBS DISTINCTION
                        </span>
                        <span className="text-base sm:text-[17px] font-bold text-navy leading-tight block group-hover:text-primary transition-colors">
                          Multiple Gold Medals
                        </span>
                      </div>
                    </div>

                    {/* Card 3: Best Outgoing Student */}
                    <div className="bg-white rounded-3xl border border-[#E3EBF0] p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_12px_rgba(23,59,87,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,87,0.08)] hover:border-primary/40 transition-all group">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border bg-[#F1F1FD] border-[#C7D2FE] shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        <Star className="w-5 h-5 text-[#6366F1]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block leading-none mb-1.5">
                          MEDICAL EXCELLENCE
                        </span>
                        <span className="text-base sm:text-[17px] font-bold text-navy leading-tight block group-hover:text-primary transition-colors">
                          Best Outgoing Student
                        </span>
                      </div>
                    </div>

                    {/* Card 4: Adult & Paediatric */}
                    <div className="bg-white rounded-3xl border border-[#E3EBF0] p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_12px_rgba(23,59,87,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,87,0.08)] hover:border-primary/40 transition-all group">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border bg-[#E6FAF2] border-[#A7F3D0] shadow-[0_0_15px_rgba(5,150,105,0.2)]">
                        <HeartPulse className="w-5 h-5 text-[#059669]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block leading-none mb-1.5">
                          CONSULTATION SCOPE
                        </span>
                        <span className="text-base sm:text-[17px] font-bold text-navy leading-tight block group-hover:text-primary transition-colors">
                          Adult & Paediatric
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Details & Quick Actions Card */}
                <div className="mt-4 bg-[#F8FAFC] rounded-3xl p-5 border border-[#E3EBF0] space-y-3">
                  <div className="flex items-center gap-2.5 text-navy font-semibold text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-primary shrink-0" />
                    <span>Thorough review of past medical records & labs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-navy font-semibold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Personalized nutrition, activity & sleep guidance</span>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      onClick={openModal}
                      className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft hover:shadow-card-hover text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group touch-target"
                    >
                      <CalendarHeart className="w-4 h-4" />
                      <span>Book Consultation with Dr. Navya</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:8464070196"
                        className="py-2.5 px-3 bg-white hover:bg-slate-50 text-navy border border-border rounded-full font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs touch-target"
                      >
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        <span>Call Now</span>
                      </a>
                      <a
                        href="https://wa.me/918464070196?text=Hello%20Dr.%20Navya%27s%20EndoCare,%20I%20would%20like%20to%20book%20a%20consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 bg-[#059669] hover:bg-[#047857] text-white rounded-full font-bold text-xs transition-all flex items-center justify-center gap-1.5 touch-target shadow-2xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
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

            {/* Patient Consultation Standards */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-gradient-to-br from-soft-teal/30 via-white to-white rounded-3xl p-6 sm:p-8 border border-[#E3EBF0] shadow-card">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-1.5 h-6 bg-primary rounded-full" />
                  <h4 className="text-xl font-bold font-heading text-navy">
                    Our Patient-Centered Care Standards
                  </h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-navy">
                  <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-border shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-navy font-bold">Unrushed Appointments</strong>
                      <span className="text-[#344654] text-xs">Ample time to listen to your entire health story</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-border shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-navy font-bold">Root-Cause Diagnosis</strong>
                      <span className="text-[#344654] text-xs">Treating underlying hormone imbalance, not just numbers</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-border shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-navy font-bold">Telugu & English Explanations</strong>
                      <span className="text-[#344654] text-xs">Clearly understanding your condition in plain language</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-border shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-navy font-bold">Sustainable Daily Habits</strong>
                      <span className="text-[#344654] text-xs">Practical home food, activity, and sleep advice</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}

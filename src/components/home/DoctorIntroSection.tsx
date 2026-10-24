"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, Quote, ArrowRight, ShieldCheck, CheckCircle2, Phone, CalendarHeart, Clock, MapPin, MessageCircle, GraduationCap, HeartPulse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function DoctorIntroSection() {
  const { openModal } = useAppointment();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="doctor-intro">
      {/* Decorative ambient gradients */}
      <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-soft-teal/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[10%] left-[3%] w-72 h-72 rounded-full bg-pale-blue/30 blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <ScrollReveal>
            <div className="badge-mint mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Meet Your Doctor • షుగర్, థైరాయిడ్ & హార్మోన్ల నిపుణులు</span>
            </div>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-bold font-heading text-navy leading-tight">
              Compassionate Care.{" "}
              <span className="text-highlight-teal">
                Clear Explanations.
              </span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#344654] mt-2 font-normal">
              Specialized endocrine care for adults and children in Vizianagaram. We take the time to listen, explain your health, and treat the root cause.
            </p>
          </ScrollReveal>
        </div>

        {/* Doctor Main Card: Photo First + Plain Language Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Priority 1 — Doctor Photograph & 2x2 Credentials Grid Directly Below Image */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            <ScrollReveal direction="right">
              <div>
                {/* Authentic Doctor Portrait Card */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-50 z-10">
                  <Image
                    src="/images/dr-navya-sruthi-mandapati.jpg"
                    alt="Dr. Navya Sruthi Mandapati — Consultant Endocrinologist"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent pointer-events-none" />
                  
                  {/* Doctor Name & Designation Overlay on Photo */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white pointer-events-none">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-soft-teal block mb-1">
                      Consultant Endocrinologist
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold font-heading mb-0.5 leading-snug">
                      {doctorData.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 font-medium">
                      MBBS, MD (General Medicine), DM (Endocrinology)
                    </p>
                  </div>
                </div>

                {/* 2x2 Distinction Cards Below Doctor Image */}
                <div className="grid grid-cols-2 gap-3 sm:gap-3.5 mt-4 sm:mt-5">
                  {/* Card 1: University Topper */}
                  <div className="bg-white rounded-3xl p-3.5 sm:p-4 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,87,0.08)] hover:border-amber-300 transition-all text-center flex flex-col items-center justify-center group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FEF8EC] border border-[#FDE68A] text-[#D97706] shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center justify-center mb-2.5 shrink-0">
                      <Award className="w-5 h-5 text-[#D97706]" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-navy leading-snug mb-0.5 group-hover:text-amber-700 transition-colors">
                      University Topper
                    </h4>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-[#C05621] uppercase tracking-wide block leading-tight mb-1">
                      DM ENDOCRINOLOGY
                    </span>
                    <p className="text-[10px] sm:text-[11px] text-[#64748B] font-medium leading-tight">
                      Dr. YSR University of Health Sciences
                    </p>
                  </div>

                  {/* Card 2: Multiple Gold Medals */}
                  <div className="bg-white rounded-3xl p-3.5 sm:p-4 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,87,0.08)] hover:border-primary/40 transition-all text-center flex flex-col items-center justify-center group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EBF7F5] border border-[#A7F3D0] text-[#167C80] shadow-[0_0_15px_rgba(22,124,128,0.2)] flex items-center justify-center mb-2.5 shrink-0">
                      <GraduationCap className="w-5 h-5 text-[#167C80]" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-navy leading-snug mb-0.5 group-hover:text-primary transition-colors">
                      Multiple Gold Medals
                    </h4>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-[#167C80] uppercase tracking-wide block leading-tight mb-1">
                      MBBS & MD DISTINCTION
                    </span>
                    <p className="text-[10px] sm:text-[11px] text-[#64748B] font-medium leading-tight">
                      Best Outgoing Student
                    </p>
                  </div>

                  {/* Card 3: Adult & Paediatric */}
                  <div className="bg-white rounded-3xl p-3.5 sm:p-4 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,87,0.08)] hover:border-primary/40 transition-all text-center flex flex-col items-center justify-center group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E6FAF2] border border-[#A7F3D0] text-[#059669] shadow-[0_0_15px_rgba(5,150,105,0.2)] flex items-center justify-center mb-2.5 shrink-0">
                      <HeartPulse className="w-5 h-5 text-[#059669]" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-navy leading-snug mb-0.5 group-hover:text-primary transition-colors">
                      Adult & Paediatric
                    </h4>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-[#167C80] uppercase tracking-wide block leading-tight mb-1">
                      COMPLETE ENDOCRINE CARE
                    </span>
                    <p className="text-[10px] sm:text-[11px] text-[#64748B] font-medium leading-tight">
                      Infants, Kids, Teens & Seniors
                    </p>
                  </div>

                  {/* Card 4: Dedicated Clinic */}
                  <div className="bg-white rounded-3xl p-3.5 sm:p-4 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,87,0.08)] hover:border-emerald-300 transition-all text-center flex flex-col items-center justify-center group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E6FAF2] border border-[#A7F3D0] text-[#0D9488] shadow-[0_0_15px_rgba(13,148,136,0.2)] flex items-center justify-center mb-2.5 shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#0D9488]" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-navy leading-snug mb-0.5 group-hover:text-emerald-700 transition-colors">
                      Dedicated Clinic
                    </h4>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-[#0D9488] uppercase tracking-wide block leading-tight mb-1">
                      VIZIANAGARAM CENTER
                    </span>
                    <p className="text-[10px] sm:text-[11px] text-[#64748B] font-medium leading-tight">
                      Daily 9:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Priority 2 — Understandable Doctor Overview & Patient-Friendly Care Philosophy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <ScrollReveal direction="left">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  Dr. Navya Sruthi Mandapati
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-navy leading-snug">
                  Super Specialist for Sugar, Thyroid & Hormones in Vizianagaram
                </h3>
              </div>

              <p className="text-[#344654] text-xs sm:text-sm lg:text-base leading-relaxed">
                When you visit Dr. Navya, consultations are never rushed. She takes the time to listen to your health story, carefully reviews your previous tests, and explains your condition in simple Telugu or English so you clearly understand your treatment.
              </p>

              {/* Patient Philosophy Box */}
              <div className="relative bg-soft-teal/30 rounded-2xl p-4 sm:p-5 border border-primary/20 shadow-2xs">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base font-bold font-heading text-navy leading-snug">
                      &ldquo;Good treatment should help you understand your condition—<span className="text-highlight-teal">not simply give you medicines for it.</span>&rdquo;
                    </p>
                    <p className="text-[11px] sm:text-xs text-text-secondary mt-1 font-medium">
                      — Dr. Navya Sruthi Mandapati, DM (Endocrinology)
                    </p>
                  </div>
                </div>
              </div>

              {/* Priority Care Highlights — Plain, Easy-to-Understand Points */}
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-navy bg-slate-50 p-2.5 rounded-xl border border-border">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy font-bold">Thorough Report Review</strong>
                    <span className="text-[11px] sm:text-xs text-[#344654]">In-depth review of previous blood tests and scans</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-navy bg-slate-50 p-2.5 rounded-xl border border-border">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy font-bold">Adults & Children</strong>
                    <span className="text-[11px] sm:text-xs text-[#344654]">Caring for kids, teenagers, adults, and seniors</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-navy bg-slate-50 p-2.5 rounded-xl border border-border">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy font-bold">Practical Lifestyle Habits</strong>
                    <span className="text-[11px] sm:text-xs text-[#344654]">Achievable diet and walking routines that fit home cooking</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-navy bg-slate-50 p-2.5 rounded-xl border border-border">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy font-bold">Telugu, English & Hindi</strong>
                    <span className="text-[11px] sm:text-xs text-[#344654]">Comfortable, clear conversation in your preferred language</span>
                  </div>
                </div>
              </div>

              {/* Clinic Timings & Location Information Card */}
              <div className="p-3 sm:p-3.5 bg-white rounded-2xl border border-[#E3EBF0] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                <div className="flex items-center gap-2 text-navy">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span><strong>Daily Clinic:</strong> Mon – Sat, 9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Phool Bagh Rd, Ambati Satram Area, Vizianagaram</span>
                </div>
              </div>

              {/* Doctor Actions */}
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={openModal}
                  className="btn-primary text-xs sm:text-sm py-3 px-5 font-bold shadow-soft touch-target inline-flex items-center justify-center gap-2"
                >
                  <CalendarHeart className="w-4 h-4 text-white" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href="tel:8464070196"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-soft-teal hover:bg-soft-teal-dark text-primary rounded-full font-bold text-xs sm:text-sm transition-all duration-200 border border-primary/20 touch-target"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Call: 8464070196</span>
                </a>

                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 border border-emerald-200 touch-target"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  href="/about"
                  className="text-xs sm:text-sm font-semibold text-navy hover:text-primary py-2 px-3 inline-flex items-center justify-center gap-1 transition-colors"
                >
                  <span>View Doctor Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}


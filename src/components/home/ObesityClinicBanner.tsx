"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Clock, Users, Scale, ArrowRight, CheckCircle2, Sparkles, UserCheck } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";
import { doctorData } from "@/data/doctorData";

export function ObesityClinicBanner() {
  const { openModal } = useAppointment();
  const clinic = doctorData.obesityClinic;

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-teal-50/30 to-white relative overflow-hidden" id="obesity-clinic">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <ScrollReveal>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-14 border border-teal-100 shadow-xl shadow-teal-500/5 relative overflow-hidden">
            
            {/* Corner Decorative Blur */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Timing, Overview & Actions */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Specialized Clinic Feature
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight">
                  Dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Obesity & Lifestyle Clinic</span>
                </h2>

                {/* EXACT Schedule Highlight Box */}
                <div className="bg-slate-50 border-2 border-teal-500/30 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">Weekly Dedicated Session</span>
                      <span className="text-xl sm:text-2xl font-black font-heading text-slate-800 block">
                        EVERY WEDNESDAY | 4:00 PM – 6:00 PM
                      </span>
                    </div>
                  </div>
                  <div className="bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-2 shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Endocrinologist + Dietician Support</span>
                  </div>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  A science-driven, empathetic clinic for individuals seeking evidence-based management for metabolic health and sustainable weight loss—free from unscientific fad diets.
                </p>

                {/* Feature Bullet Points */}
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Joint Endocrinologist & Dietician consultation</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>In-depth metabolic & insulin resistance evaluation</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Personalised medical nutrition therapy for Andhra foods</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Medical obesity pharmacotherapy where appropriate</span>
                  </div>
                </div>

                {/* Primary CTA requested */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                  <button
                    onClick={openModal}
                    className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-soft hover:shadow-glow transition-all flex items-center justify-center gap-2 text-sm sm:text-base group"
                  >
                    <span>BOOK OBESITY CLINIC APPOINTMENT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    href="/obesity-metabolic-health"
                    className="px-6 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-full border border-slate-200 transition-all flex items-center justify-center text-sm sm:text-base"
                  >
                    Learn More About the Clinic
                  </Link>
                </div>

              </div>

              {/* Right Column: Multidisciplinary Team Card with Dr Syamini Siripuram */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-slate-50 to-teal-50/70 rounded-3xl p-7 sm:p-8 border border-teal-100 shadow-sm space-y-6">
                  
                  <div className="flex items-center gap-3 pb-4 border-b border-teal-100">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-heading text-slate-800 text-base">Integrated Clinical Team</h4>
                      <p className="text-xs text-slate-500">Dual-specialist evaluation every Wednesday</p>
                    </div>
                  </div>

                  {/* Specialist 1: Dr. Navya */}
                  <div className="bg-white p-4.5 rounded-2xl border border-slate-100 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-teal-700 uppercase">Endocrinologist</span>
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <div className="font-bold font-heading text-slate-800 text-base">Dr. Navya Sruthi Mandapati</div>
                    <p className="text-xs text-slate-500">MBBS, MD (Gen Med), DM (Endocrinology) — University Topper</p>
                    <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                      Evaluates hormonal pathways, insulin sensitivity, thyroid function, and prescribes medical obesity therapy where clinically indicated.
                    </p>
                  </div>

                  {/* Specialist 2: Dr Syamini Siripuram */}
                  <div className="bg-white p-4.5 rounded-2xl border border-slate-100 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-sky-700 uppercase">Consultant Dietician</span>
                      <UserCheck className="w-4 h-4 text-sky-600" />
                    </div>
                    <div className="font-bold font-heading text-slate-800 text-base">Dr Syamini Siripuram</div>
                    <p className="text-xs text-slate-500">MSc Nutrition and Dietetics, Consultant Dietician</p>
                    <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                      Provides realistic, culturally tailored nutrition counselling and behavioural guidance suited to everyday family routines and food habits.
                    </p>
                  </div>

                  <div className="p-3.5 bg-teal-100/70 rounded-2xl text-center">
                    <span className="text-xs font-bold text-teal-900 block">
                      Timing: EVERY WEDNESDAY | 4:00 PM – 6:00 PM
                    </span>
                    <span className="text-[11px] text-teal-700 block mt-0.5">
                      Prior appointment booking recommended
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

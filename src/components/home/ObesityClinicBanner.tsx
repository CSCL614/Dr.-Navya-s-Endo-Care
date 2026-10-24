"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Clock, Users, Scale, ArrowRight, CheckCircle2, Sparkles, UserCheck } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";

export function ObesityClinicBanner() {
  const { openModal } = useAppointment();

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="obesity-clinic">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pale-blue/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-soft-teal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <ScrollReveal direction="up">
          <div className="card-white bg-gradient-to-br from-pale-blue/30 via-white to-soft-teal/20 rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E3EBF0] shadow-card relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Timing, Overview & Actions */}
              <div className="lg:col-span-7 space-y-5">
                
                <div className="badge-mint">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Specialized Clinic Feature</span>
                </div>

                <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-navy leading-tight tracking-tight">
                  Dedicated{" "}
                  <span className="text-highlight-teal">
                    Obesity & Lifestyle Clinic
                  </span>
                </h2>

                {/* EXACT Schedule Highlight Box */}
                <div className="bg-white border-2 border-primary/25 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 shadow-2xs">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 bg-primary text-white rounded-xl flex items-center justify-center shrink-0 shadow-2xs">
                      <Clock className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10.5px] font-bold text-primary uppercase tracking-wider block">Weekly Dedicated Session</span>
                      <span className="text-base sm:text-lg font-extrabold font-heading text-navy block">
                        EVERY WEDNESDAY | 4:00 PM – 6:00 PM
                      </span>
                    </div>
                  </div>
                  <div className="bg-soft-teal px-3 py-1.5 rounded-xl border border-primary/15 text-xs font-bold text-primary flex items-center gap-1.5 shrink-0">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    <span>Endocrinologist + Dietician</span>
                  </div>
                </div>

                <p className="text-[#344654] text-xs sm:text-sm lg:text-base leading-relaxed">
                  A science-driven, empathetic clinic for individuals seeking evidence-based management for metabolic health and sustainable weight loss—free from unscientific fad diets.
                </p>

                {/* Feature Bullet Points */}
                <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Joint Endocrinologist & Dietician consultation</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>In-depth metabolic & insulin resistance evaluation</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Personalised medical nutrition for Andhra foods</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Medical obesity pharmacotherapy where appropriate</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    onClick={openModal}
                    className="btn-primary text-xs sm:text-sm py-3 px-6 group touch-target"
                  >
                    <span>BOOK OBESITY CLINIC APPOINTMENT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <Link
                    href="/obesity-metabolic-health"
                    className="btn-secondary text-xs sm:text-sm py-3 px-6 touch-target text-center"
                  >
                    <span>Learn More About the Clinic</span>
                  </Link>
                </div>

              </div>

              {/* Right Column: Multidisciplinary Team Card */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E3EBF0] shadow-card space-y-4">
                  
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-soft-teal text-primary flex items-center justify-center shadow-2xs">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-heading text-navy text-sm sm:text-base">Integrated Clinical Team</h4>
                      <p className="text-[11px] text-text-secondary">Dual-specialist evaluation every Wednesday</p>
                    </div>
                  </div>

                  {/* Specialist 1: Dr. Navya */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-border space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-bold text-primary uppercase tracking-wide">Endocrinologist</span>
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <div className="font-bold font-heading text-navy text-sm sm:text-base">Dr. Navya Sruthi Mandapati</div>
                    <p className="text-xs font-semibold text-text-primary">MBBS, MD (Gen Med), DM (Endocrinology) — University Topper</p>
                    <p className="text-[11px] sm:text-xs text-[#344654] pt-0.5 leading-relaxed">
                      Evaluates hormonal pathways, insulin sensitivity, thyroid function, and prescribes medical obesity therapy where clinically indicated.
                    </p>
                  </div>

                  {/* Specialist 2: Dr Syamini Siripuram */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-border space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-bold text-navy uppercase tracking-wide">Consultant Dietician</span>
                      <UserCheck className="w-4 h-4 text-navy" />
                    </div>
                    <div className="font-bold font-heading text-navy text-sm sm:text-base">Dr Syamini Siripuram</div>
                    <p className="text-xs font-semibold text-text-primary">MSc Nutrition and Dietetics, Consultant Dietician</p>
                    <p className="text-[11px] sm:text-xs text-[#344654] pt-0.5 leading-relaxed">
                      Provides realistic, culturally tailored nutrition counselling and behavioural guidance suited to everyday family routines and Andhra food habits.
                    </p>
                  </div>

                  <div className="p-3 bg-soft-teal/60 rounded-xl text-center border border-primary/15">
                    <span className="text-xs font-bold text-navy block">
                      Timing: EVERY WEDNESDAY | 4:00 PM – 6:00 PM
                    </span>
                    <span className="text-[10.5px] text-text-secondary block mt-0.5">
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

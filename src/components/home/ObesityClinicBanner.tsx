"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Clock, Users, Scale, ArrowRight, CheckCircle2, Sparkles, UserCheck } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";

export function ObesityClinicBanner() {
  const { openModal } = useAppointment();

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="obesity-clinic">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pale-blue/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <ScrollReveal direction="up">
          <div className="bg-gradient-to-br from-pale-blue/40 via-white to-pale-blue/20 rounded-[2.5rem] p-8 md:p-12 lg:p-14 border border-border/80 shadow-card-hover relative overflow-hidden">
            
            {/* Corner Decorative Blur */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Timing, Overview & Actions */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="section-tag">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Specialized Clinic Feature</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-heading text-navy leading-tight tracking-tight">
                  Dedicated{" "}
                  <span className="gradient-text">
                    Obesity & Lifestyle Clinic
                  </span>
                </h2>

                {/* EXACT Schedule Highlight Box */}
                <div className="glass-card border-2 border-primary/20 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                      <Clock className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block">Weekly Dedicated Session</span>
                      <span className="text-lg sm:text-xl font-extrabold font-heading text-navy block">
                        EVERY WEDNESDAY | 4:00 PM – 6:00 PM
                      </span>
                    </div>
                  </div>
                  <div className="bg-white px-3.5 py-2 rounded-xl border border-border text-xs font-bold text-navy flex items-center gap-2 shrink-0 shadow-2xs">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Endocrinologist + Dietician</span>
                  </div>
                </div>

                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  A science-driven, empathetic clinic for individuals seeking evidence-based management for metabolic health and sustainable weight loss—free from unscientific fad diets.
                </p>

                {/* Feature Bullet Points */}
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Joint Endocrinologist & Dietician consultation</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>In-depth metabolic & insulin resistance evaluation</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Personalised medical nutrition therapy for Andhra foods</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Medical obesity pharmacotherapy where appropriate</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                  <button
                    onClick={openModal}
                    className="btn-primary group"
                  >
                    <span>BOOK OBESITY CLINIC APPOINTMENT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <Link
                    href="/obesity-metabolic-health"
                    className="btn-secondary"
                  >
                    <span>Learn More About the Clinic</span>
                  </Link>
                </div>

              </div>

              {/* Right Column: Multidisciplinary Team Card */}
              <div className="lg:col-span-5">
                <div className="glass-card rounded-3xl p-7 sm:p-8 border border-border/80 shadow-card space-y-6">
                  
                  <div className="flex items-center gap-3 pb-4 border-b border-border/70">
                    <div className="w-11 h-11 rounded-2xl bg-pale-blue text-primary flex items-center justify-center shadow-xs">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-heading text-navy text-base">Integrated Clinical Team</h4>
                      <p className="text-xs text-text-secondary">Dual-specialist evaluation every Wednesday</p>
                    </div>
                  </div>

                  {/* Specialist 1: Dr. Navya */}
                  <div className="bg-white p-5 rounded-2xl border border-border/80 shadow-xs space-y-1.5 hover:border-primary/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary uppercase tracking-wide">Endocrinologist</span>
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <div className="font-bold font-heading text-navy text-base">Dr. Navya Sruthi Mandapati</div>
                    <p className="text-xs font-medium text-text-primary">MBBS, MD (Gen Med), DM (Endocrinology) — University Topper</p>
                    <p className="text-xs text-text-secondary pt-1 leading-relaxed">
                      Evaluates hormonal pathways, insulin sensitivity, thyroid function, and prescribes medical obesity therapy where clinically indicated.
                    </p>
                  </div>

                  {/* Specialist 2: Dr Syamini Siripuram */}
                  <div className="bg-white p-5 rounded-2xl border border-border/80 shadow-xs space-y-1.5 hover:border-navy/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-navy uppercase tracking-wide">Consultant Dietician</span>
                      <UserCheck className="w-4 h-4 text-navy" />
                    </div>
                    <div className="font-bold font-heading text-navy text-base">Dr Syamini Siripuram</div>
                    <p className="text-xs font-medium text-text-primary">MSc Nutrition and Dietetics, Consultant Dietician</p>
                    <p className="text-xs text-text-secondary pt-1 leading-relaxed">
                      Provides realistic, culturally tailored nutrition counselling and behavioural guidance suited to everyday family routines and Andhra food habits.
                    </p>
                  </div>

                  <div className="p-3.5 bg-pale-blue/60 rounded-xl text-center border border-primary/20">
                    <span className="text-xs font-bold text-navy block">
                      Timing: EVERY WEDNESDAY | 4:00 PM – 6:00 PM
                    </span>
                    <span className="text-[11px] text-text-secondary block mt-0.5">
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

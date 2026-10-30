"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Clock, Users, Scale, ArrowRight, CheckCircle2, Sparkles, UserCheck, CalendarHeart, ChevronDown } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function ObesityClinicBanner() {
  const { openModal } = useAppointment();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-pale-blue/30 to-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="obesity-clinic">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pale-blue/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-soft-teal/25 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <ScrollReveal direction="glow">
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-border shadow-card card-interactive-glow glow-card-featured relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-amber-500/10 via-soft-teal/20 to-transparent rounded-full pointer-events-none" />

            {/* Header & Schedule Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="badge-mint mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Specialized Wednesday Clinic</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy leading-tight">
                  Dedicated <span className="text-highlight-teal">Obesity & Lifestyle Clinic</span>
                </h2>
                <p className="text-xs sm:text-sm text-primary font-semibold mt-1">
                  ఊబకాయం & జీవనశైలి క్లినిక్ — ప్రతి బుధవారం సాయంత్రం 4:00 నుండి 6:00 వరకు
                </p>
              </div>

              {/* Timing Badge with Warm Amber Glow */}
              <div className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-3.5 sm:p-4 shrink-0 flex items-center gap-3 shadow-2xs badge-glow-amber">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wide">Weekly Session</div>
                  <div className="text-xs sm:text-sm font-extrabold text-navy font-heading">WEDNESDAY 4 – 6 PM</div>
                  <div className="text-[10px] text-text-secondary">Prior Booking Recommended</div>
                </div>
              </div>
            </div>

            {/* Integrated Multidisciplinary Team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6">
              {/* Doctor 1 */}
              <div className="bg-slate-50/90 p-4 rounded-2xl border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-soft-teal text-primary flex items-center justify-center shrink-0 font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-primary tracking-wide block">Consultant Endocrinologist</span>
                  <div className="text-xs sm:text-sm font-bold text-navy">Dr. Navya Sruthi Mandapati</div>
                  <p className="text-[11px] text-text-secondary mt-0.5 leading-snug">
                    DM (Endocrinology) — University Topper. Evaluates hormonal drivers, insulin resistance & medical obesity therapy.
                  </p>
                </div>
              </div>

              {/* Dietician 2 */}
              <div className="bg-slate-50/90 p-4 rounded-2xl border border-slate-200/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shrink-0 font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-800 tracking-wide block">Clinical Dietician</span>
                  <div className="text-xs sm:text-sm font-bold text-navy">Dr Syamini Siripuram</div>
                  <p className="text-[11px] text-text-secondary mt-0.5 leading-snug">
                    MSc Nutrition & Dietetics. Formulates authentic Andhra-friendly meal plans suited to home cooking without starvation.
                  </p>
                </div>
              </div>
            </div>

            {/* Minimize / Expand Clinical Protocols Feature */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full py-2.5 px-4 rounded-xl bg-soft-teal/50 hover:bg-soft-teal text-primary border border-primary/20 font-bold text-xs flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{isExpanded ? "Hide Clinic Features & Testing Scope" : "Explore Clinic Protocols & Nutrition Guidance (+)"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pt-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200">
                      <div className="flex items-start gap-2 text-xs text-navy font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>Joint Endocrinologist & Dietician consultation in one visit</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-navy font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>In-depth fasting insulin & metabolic syndrome testing</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-navy font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>Culturally tailored Andhra nutrition with sustainable walking routines</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-navy font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>Evidence-based medical weight loss pharmacotherapy where indicated</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 mt-5 border-t border-slate-100">
              <button
                onClick={openModal}
                className="btn-primary text-xs sm:text-sm py-2.5 px-5 font-bold shadow-soft flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarHeart className="w-4 h-4" />
                <span>Book Wednesday Clinic Appointment</span>
              </button>

              <Link
                href="/obesity-metabolic-health"
                className="py-2.5 px-4 rounded-xl border border-border text-navy hover:text-primary hover:border-primary/40 font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <span>Full Clinic Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

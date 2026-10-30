"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Award, Quote, ArrowRight, ShieldCheck, CheckCircle2, Phone, 
  CalendarHeart, Clock, MapPin, MessageCircle, GraduationCap, HeartPulse, Sparkles, ChevronDown 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";
import { motion, AnimatePresence } from "framer-motion";

export function DoctorIntroSection() {
  const { openModal } = useAppointment();
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-pale-blue/20 to-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="doctor-intro">
      {/* Decorative ambient gradients */}
      <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-soft-teal/25 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[10%] left-[3%] w-72 h-72 rounded-full bg-pale-blue/40 blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
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

        {/* Creative & Minimal Doctor Showcase Card with Glowing Border */}
        <ScrollReveal direction="glow">
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-9 border border-border/80 shadow-card card-interactive-glow glow-card-featured transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-soft-teal/30 via-transparent to-transparent rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Doctor Avatar with Creative Floating Distinction Badge */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-100 ring-2 ring-primary/20 group">
                  <Image
                    src="/images/dr-navya-sruthi-mandapati.jpg"
                    alt="Dr. Navya Sruthi Mandapati — Consultant Endocrinologist"
                    fill
                    sizes="(max-width: 768px) 220px, 260px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-soft-teal block">
                      Consultant Endocrinologist
                    </span>
                  </div>
                </div>

                <div className="mt-3.5">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-navy">
                    {doctorData.name}
                  </h3>
                  <p className="text-xs text-primary font-semibold mt-0.5">
                    MBBS, MD (Gen Med), DM (Endocrinology)
                  </p>
                  <span className="inline-flex items-center gap-1 mt-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs badge-glow-amber">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    University Topper • Gold Medalist
                  </span>
                </div>
              </div>

              {/* Minimalist Creative Details & Key Distinction Chips */}
              <div className="md:col-span-7 space-y-4">
                
                {/* Quote Strip */}
                <div className="bg-soft-teal/30 rounded-2xl p-3.5 sm:p-4 border border-primary/20 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-navy leading-relaxed">
                    &ldquo;Good treatment should help you understand your condition—<span className="text-primary font-bold">not simply give you medicines for it.</span>&rdquo;
                  </p>
                </div>

                {/* Creative 4 Key Distinctions Minimal Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 text-left">
                  <div className="bg-slate-50/90 p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-navy leading-tight">University Topper</div>
                      <div className="text-[10px] text-text-secondary">Dr. YSR UHS (DM)</div>
                    </div>
                  </div>

                  <div className="bg-slate-50/90 p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-teal-100/80 text-primary flex items-center justify-center shrink-0">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-navy leading-tight">Adults & Children</div>
                      <div className="text-[10px] text-text-secondary">All Age Groups</div>
                    </div>
                  </div>

                  <div className="bg-slate-50/90 p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-100/80 text-sky-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-navy leading-tight">Unhurried Care</div>
                      <div className="text-[10px] text-text-secondary">Telugu & English</div>
                    </div>
                  </div>

                  <div className="bg-slate-50/90 p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-navy leading-tight">9:00 AM – 8:00 PM</div>
                      <div className="text-[10px] text-text-secondary">Mon – Sat Daily</div>
                    </div>
                  </div>
                </div>

                {/* Collapsible / Expandable More Details */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowFullDetails(!showFullDetails)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors py-1 cursor-pointer"
                  >
                    <span>{showFullDetails ? "Show Less Doctor Information" : "Read Full Philosophy & Clinical Approach"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showFullDetails ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {showFullDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pt-2"
                      >
                        <p className="text-xs text-text-secondary leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                          When you visit Dr. Navya, consultations are never rushed. She takes the time to listen to your health story, carefully reviews your previous laboratory tests, and explains your condition in simple Telugu or English so you clearly understand the root cause and treatment roadmap.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Streamlined Quick Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={openModal}
                    className="flex-1 min-w-[140px] py-2.5 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer active:scale-95"
                  >
                    <CalendarHeart className="w-3.5 h-3.5" />
                    <span>Book Consultation</span>
                  </button>

                  <a
                    href="tel:8464070196"
                    className="py-2.5 px-4 bg-soft-teal hover:bg-soft-teal/80 text-primary border border-primary/20 rounded-xl font-bold text-xs inline-flex items-center gap-1.5 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>8464070196</span>
                  </a>

                  <Link
                    href="/about"
                    className="py-2.5 px-3.5 rounded-xl border border-border text-navy hover:text-primary hover:border-primary/40 font-bold text-xs inline-flex items-center gap-1 transition-all"
                  >
                    <span>Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

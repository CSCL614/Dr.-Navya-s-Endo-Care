"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Footprints, FlaskConical, Pill, Scale, 
  ArrowRight, Phone, CalendarHeart, Sparkles, CheckCircle2, ChevronDown, LucideIcon 
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconBadgeVariant } from "@/components/ui/CreativeCard";

interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  badgeVariant: IconBadgeVariant;
  badge: string;
  badgeColor: string;
  ctaText: string;
  ctaHref: string;
}

interface ClinicFacilitiesSectionProps {
  isCompact?: boolean;
}

export function ClinicFacilitiesSection({ isCompact = false }: ClinicFacilitiesSectionProps) {
  const { openModal } = useAppointment();
  // All cards start compact (less content) by default as requested. Clicking maximizes the content.
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleFacility = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const facilities: FacilityItem[] = [
    {
      id: "diabetic-foot-lab",
      title: "Diabetic Foot Risk Assessment Lab",
      subtitle: "Comprehensive Neuropathy & Vascular Complication Screening",
      description: "Dedicated non-invasive diagnostic workstation for early detection of diabetic neuropathy, peripheral vascular disease, and abnormal pressure points to prevent ulceration and amputations.",
      highlights: [
        "Digital Biothesiometry (vibration perception threshold)",
        "10g Monofilament tactile sensory loss assessment",
        "Vascular Doppler screening (Ankle-Brachial Index)",
        "Specialized diabetic footwear and daily home foot care guidance"
      ],
      icon: Footprints,
      badgeVariant: "teal",
      badge: "Specialized Lab",
      badgeColor: "bg-soft-teal text-primary border-primary/20",
      ctaText: "Learn About Foot Care",
      ctaHref: "/diabetes-care#foot-assessment"
    },
    {
      id: "lab-services",
      title: "Laboratory Diagnostics Services",
      subtitle: "Fast, In-House Endocrine & Metabolic Testing",
      description: "Fast, accurate on-site laboratory testing for metabolic, hormonal, and systemic health parameters. Designed for seamless correlation during your endocrine consultation.",
      highlights: [
        "Glycated Haemoglobin (HbA1c) automated testing",
        "Complete Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
        "Lipid profile, liver enzymes, and renal function markers",
        "Serum Calcium, Vitamin D, and reproductive hormonal assays"
      ],
      icon: FlaskConical,
      badgeVariant: "sky",
      badge: "In-House Lab",
      badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
      ctaText: "Inquire at Clinic",
      ctaHref: "/contact"
    },
    {
      id: "pharmacy-247",
      title: "24/7 Pharmacy Support",
      subtitle: "Cold-Chain Preserved Endocrine & Critical Medicines",
      description: "Continuous 24-hour on-premise pharmacy stocking genuine endocrine, diabetes, thyroid, and critical emergency medications with strict temperature monitoring.",
      highlights: [
        "Strict cold-chain refrigeration for insulins & peptide biologics",
        "Full inventory of diabetes, thyroid & hormone medications",
        "Glucose monitors, lancets, pen needles & testing strips",
        "Emergency medication dispensing available round-the-clock"
      ],
      icon: Pill,
      badgeVariant: "emerald",
      badge: "Open 24/7",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      ctaText: "Call Pharmacy",
      ctaHref: "tel:8464070196"
    },
    {
      id: "obesity-clinic",
      title: "Dedicated Joint Obesity Clinic",
      subtitle: "Every Wednesday | 4:00 PM – 6:00 PM",
      description: "Science-backed medical weight management addressing neuroendocrine drivers, visceral adiposity, and insulin resistance with joint medical and dietary guidance.",
      highlights: [
        "Joint consultation: Consultant Endocrinologist + Clinical Dietician",
        "Dietician Dr Syamini Siripuram (MSc Nutrition & Dietetics)",
        "Metabolic health & body composition assessment",
        "Evidence-based medical weight loss pharmacotherapy"
      ],
      icon: Scale,
      badgeVariant: "amber",
      badge: "Every Wednesday",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      ctaText: "Obesity Clinic Details",
      ctaHref: "/obesity-metabolic-health"
    }
  ];

  return (
    <section id="facilities" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Soft Ambient Accents */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-pale-blue/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-soft-teal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Header - Clean presentation without clunky section-level minimize buttons */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <ScrollReveal>
            <div className="badge-mint mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Integrated Healthcare Infrastructure</span>
            </div>

            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-navy mb-3 leading-tight tracking-tight">
              Comprehensive <span className="text-highlight-teal">Clinic Facilities</span>
            </h2>

            <p className="text-[#344654] text-xs sm:text-sm lg:text-base leading-relaxed">
              Dr. Navya’s EndoCare is equipped with dedicated medical facilities to provide complete, integrated adult and paediatric endocrine care under one roof in Vizianagaram.
            </p>

            <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
              <span>Tap any card below to view detailed equipment & facilities</span>
            </div>
          </ScrollReveal>
        </div>

        {/* 4 Interactive Facility Cards: Visible with Less Content initially, Maximizes on Click */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {facilities.map((fac, idx) => {
            const isExpanded = expandedIds.includes(fac.id);
            const Icon = fac.icon;

            const iconStyles: Record<IconBadgeVariant, string> = {
              teal: "bg-teal-50 text-teal-600 border-teal-200/80",
              sky: "bg-sky-50 text-sky-600 border-sky-200/80",
              emerald: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
              amber: "bg-amber-50 text-amber-600 border-amber-200/80",
              rose: "bg-rose-50 text-rose-600 border-rose-200/80",
              navy: "bg-slate-100 text-navy border-slate-200/80",
              mint: "bg-emerald-50 text-teal-700 border-emerald-200/80",
              indigo: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
            };
            const currentIconStyle = iconStyles[fac.badgeVariant] || iconStyles.teal;

            return (
              <ScrollReveal key={fac.id} delay={idx * 0.05} direction="up">
                <div
                  onClick={() => toggleFacility(fac.id)}
                  className={`group rounded-3xl border transition-all duration-300 p-5 sm:p-6 bg-white cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isExpanded
                      ? "border-primary/60 shadow-elevated glow-card-featured ring-1 ring-primary/30 bg-gradient-to-b from-white to-slate-50/60"
                      : "border-border/80 hover:border-primary/50 shadow-xs hover:shadow-card hover:-translate-y-1 card-interactive-glow"
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Badge + Expand Pill */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs shrink-0 transition-transform group-hover:scale-105 ${currentIconStyle}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-1 ${fac.badgeColor}`}>
                            {fac.badge}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold font-heading text-navy leading-snug group-hover:text-primary transition-colors">
                            {fac.title}
                          </h3>
                        </div>
                      </div>

                      {/* Expand / Minimize Toggle Pill */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFacility(fac.id);
                        }}
                        className={`shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                          isExpanded
                            ? "bg-primary text-white shadow-xs"
                            : "bg-slate-100 group-hover:bg-soft-teal text-slate-700 group-hover:text-primary border border-slate-200/80"
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Minimize" : "Expand"}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3 font-normal">
                      {fac.subtitle}
                    </p>

                    {/* Compact View Highlights Preview (When Not Expanded) */}
                    {!isExpanded && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {fac.highlights.slice(0, 2).map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-lg"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                            <span className="truncate max-w-[200px] sm:max-w-none">{h}</span>
                          </span>
                        ))}
                        <span className="text-[11px] font-semibold text-primary inline-flex items-center px-1.5 py-1">
                          +{fac.highlights.length - 2} more capabilities
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Expanded Content: Full Description, All 4 Highlights & Action Buttons */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden pt-3 border-t border-slate-100 mt-4 space-y-3.5"
                      >
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/70">
                          {fac.description}
                        </p>

                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">
                            Key Equipment & Diagnostic Capabilities:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {fac.highlights.map((item, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-1.5 text-xs text-slate-700 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2" onClick={(e) => e.stopPropagation()}>
                          <Link
                            href={fac.ctaHref}
                            className="py-2.5 px-4 rounded-xl bg-soft-teal hover:bg-soft-teal/80 text-primary border border-primary/20 font-bold text-xs flex items-center gap-1.5 group/link transition-all"
                          >
                            <span>{fac.ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </Link>

                          {fac.id === "obesity-clinic" ? (
                            <button
                              type="button"
                              onClick={openModal}
                              className="py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer active:scale-95"
                            >
                              <CalendarHeart className="w-3.5 h-3.5" />
                              <span>Book Slot</span>
                            </button>
                          ) : (
                            <a
                              href="tel:8464070196"
                              className="py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all active:scale-95"
                            >
                              <Phone className="w-3.5 h-3.5 text-white" />
                              <span>Call Clinic</span>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

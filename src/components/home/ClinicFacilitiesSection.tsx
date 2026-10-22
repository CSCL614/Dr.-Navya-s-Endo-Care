"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Footprints, FlaskConical, Pill, Scale, 
  Clock, ShieldCheck, ArrowRight, Phone, CalendarHeart, Sparkles, CheckCircle2, MessageCircle 
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";

interface ClinicFacilitiesSectionProps {
  isCompact?: boolean;
}

export function ClinicFacilitiesSection({ isCompact = false }: ClinicFacilitiesSectionProps) {
  const { openModal } = useAppointment();

  const facilities = [
    {
      id: "diabetic-foot-lab",
      title: "Diabetic Foot Lab Facility Available",
      subtitle: "Comprehensive Foot Complication Screening",
      description: "Dedicated non-invasive diagnostic workstation for early detection of diabetic neuropathy, peripheral vascular disease, and pressure-point abnormalities to prevent foot ulcers.",
      highlights: [
        "Digital Biothesiometry (vibration sensory testing)",
        "Monofilament sensory loss assessment",
        "Vascular Doppler screening (ABI)",
        "Custom diabetic foot care and footwear guidance"
      ],
      icon: Footprints,
      badge: "Specialized Lab",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      ctaText: "Learn About Foot Care",
      ctaHref: "/diabetes-care#foot-assessment"
    },
    {
      id: "lab-services",
      title: "Laboratory Services",
      subtitle: "Complete Diagnostic Support",
      description: "Fast, accurate on-site laboratory testing for metabolic, hormonal, and systemic health parameters. Designed for seamless correlation during your endocrine consultation.",
      highlights: [
        "Glycated Haemoglobin (HbA1c) testing",
        "Complete Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
        "Lipid panel, liver enzymes, and renal function",
        "Serum Calcium, Vitamin D, and hormonal assays"
      ],
      icon: FlaskConical,
      badge: "In-House Lab",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      ctaText: "Inquire at Clinic",
      ctaHref: "/contact"
    },
    {
      id: "pharmacy-247",
      title: "24/7 Pharmacy",
      subtitle: "Round-the-Clock Medicine Availability",
      description: "Continuous 24-hour on-premise pharmacy stocking genuine endocrine, diabetes, thyroid, and critical emergency medications with strict cold-chain preservation.",
      highlights: [
        "Strict cold-chain refrigeration for insulins & biologics",
        "Full inventory of diabetes, thyroid & hormone medications",
        "Glucose monitors, lancets, pen needles & accessories",
        "Emergency medication support anytime day or night"
      ],
      icon: Pill,
      badge: "Open 24/7",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      ctaText: "Call Pharmacy",
      ctaHref: "tel:8464070196"
    },
    {
      id: "obesity-clinic",
      title: "Dedicated Obesity Clinics",
      subtitle: "Every Wednesday | 4:00 PM – 6:00 PM",
      description: "Science-backed medical weight management addressing neuroendocrine drivers, visceral fat, and insulin resistance with joint medical and dietary guidance.",
      highlights: [
        "Joint consultation: Endocrinologist + Clinical Dietician",
        "Dietician Dr Syamini Siripuram (MSc Nutrition & Dietetics)",
        "Metabolic health & body composition assessment",
        "Evidence-based medical weight loss pharmacotherapy"
      ],
      icon: Scale,
      badge: "Every Wednesday",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      ctaText: "Obesity Clinic Details",
      ctaHref: "/obesity-metabolic-health"
    }
  ];

  if (isCompact) {
    return (
      <section className="py-14 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-teal-100/70 border border-teal-200 text-teal-800 font-semibold rounded-full text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Clinic Infrastructure
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                Clinic Facilities & Support Services
              </h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <a
                href="tel:8464070196"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-700 hover:text-primary font-bold rounded-full border border-slate-200 shadow-xs hover:border-primary transition-all text-xs sm:text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                Call: 8464070196
              </a>
              <Link
                href="/services#clinic-facilities"
                className="text-xs sm:text-sm font-semibold text-primary hover:text-primary-dark transition-colors inline-flex items-center"
              >
                View Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <ScrollReveal key={fac.id} delay={idx * 0.06} direction="up">
                  <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full group">
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${fac.badgeColor}`}>
                        {fac.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-heading text-slate-800 mb-1 group-hover:text-primary transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-teal-700 font-medium mb-2">
                      {fac.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {fac.description}
                    </p>

                    <Link
                      href={fac.ctaHref}
                      className="text-xs font-semibold text-primary group-hover:text-primary-dark inline-flex items-center mt-auto pt-2 border-t border-slate-100"
                    >
                      {fac.ctaText} <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Full comprehensive section
  return (
    <section id="clinic-facilities" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden scroll-mt-24">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200 text-teal-800 font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              Integrated Healthcare Infrastructure
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-4 leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Clinic Facilities</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Dr. Navya’s EndoCare is equipped with dedicated medical facilities to provide complete, integrated adult and paediatric endocrine care under one roof in Vizianagaram.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <ScrollReveal key={fac.id} delay={idx * 0.08} direction="up">
                <div className="bg-white rounded-3xl p-7 lg:p-9 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                  
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${fac.badgeColor}`}>
                      {fac.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-800 mb-1 group-hover:text-primary transition-colors">
                    {fac.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-teal-700 mb-4">
                    {fac.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {fac.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-8 flex-grow">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Key Highlights:
                    </span>
                    {fac.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                    <Link
                      href={fac.ctaHref}
                      className="text-xs sm:text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center transition-colors"
                    >
                      {fac.ctaText} <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>

                    {fac.id === "obesity-clinic" ? (
                      <button
                        onClick={openModal}
                        className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-xs transition-colors shadow-xs"
                      >
                        Book Slot
                      </button>
                    ) : (
                      <a
                        href="tel:8464070196"
                        className="px-3.5 py-1.5 bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-primary rounded-xl font-semibold text-xs border border-slate-200 transition-colors inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3 h-3 text-primary" /> Call Clinic
                      </a>
                    )}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Prominent Call The Clinic Bar with Phone: 8464070196 */}
        <div className="bg-gradient-to-r from-teal-900 via-primary-dark to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-xs uppercase tracking-widest font-bold text-teal-300 block mb-1">
              Direct Patient Assistance
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
              Have Inquiries About Our Facilities?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Reach out directly to confirm laboratory timing, diabetic foot screening appointments, or 24/7 pharmacy queries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:8464070196"
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-primary hover:bg-teal-50 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              Call: 8464070196
            </a>
            <a
              href="https://wa.me/918464070196"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: 8464070196
            </a>
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-6 py-3.5 bg-teal-700/80 hover:bg-teal-700 text-white font-bold rounded-xl text-sm border border-teal-300/40 transition-all flex items-center justify-center gap-2"
            >
              <CalendarHeart className="w-4 h-4 text-teal-200" />
              Book Appointment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

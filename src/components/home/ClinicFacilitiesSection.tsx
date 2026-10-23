"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Footprints, FlaskConical, Pill, Scale, 
  ArrowRight, Phone, CalendarHeart, Sparkles, CheckCircle2, MessageCircle 
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
      badgeColor: "bg-primary/10 text-primary border-primary/25",
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
      badgeColor: "bg-sky-500/10 text-sky-700 border-sky-300/40",
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
      badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-300/40",
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
      badgeColor: "bg-amber-500/10 text-amber-800 border-amber-300/40",
      ctaText: "Obesity Clinic Details",
      ctaHref: "/obesity-metabolic-health"
    }
  ];

  if (isCompact) {
    return (
      <section className="py-16 bg-pale-blue/40 border-y border-border/80 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="section-tag mb-3">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Clinic Infrastructure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy">
                Clinic Facilities & <span className="gradient-text">Support Services</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:8464070196"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-navy hover:text-primary font-bold rounded-full border border-border shadow-xs hover:border-primary/40 hover:shadow-card transition-all text-xs sm:text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Call: 8464070196</span>
              </a>
              <Link
                href="/services#clinic-facilities"
                className="text-xs sm:text-sm font-semibold text-primary hover:text-primary-dark transition-colors inline-flex items-center group"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <ScrollReveal key={fac.id} delay={idx * 0.06} direction="up">
                  <div className="glass-card rounded-2xl p-6 border border-border/80 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-pale-blue text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-105">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${fac.badgeColor}`}>
                        {fac.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-heading text-navy mb-1 group-hover:text-primary transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-primary font-semibold mb-2.5">
                      {fac.subtitle}
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4 flex-grow line-clamp-3">
                      {fac.description}
                    </p>

                    <Link
                      href={fac.ctaHref}
                      className="text-xs font-semibold text-primary group-hover:text-primary-dark inline-flex items-center mt-auto pt-3 border-t border-border/70 group-hover:border-primary/30 transition-colors"
                    >
                      <span>{fac.ctaText}</span>
                      <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
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
    <section id="clinic-facilities" className="py-20 lg:py-28 bg-background-alt/50 relative overflow-hidden scroll-mt-24">
      {/* Soft Ambient Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pale-blue/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Integrated Healthcare Infrastructure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy mb-4 leading-tight tracking-tight">
              Comprehensive <span className="gradient-text">Clinic Facilities</span>
            </h2>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Dr. Navya’s EndoCare is equipped with dedicated medical facilities to provide complete, integrated adult and paediatric endocrine care under one roof in Vizianagaram.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <ScrollReveal key={fac.id} delay={idx * 0.08} direction="up">
                <div className="glass-card rounded-3xl p-7 lg:p-9 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                  
                  {/* Subtle hover gradient wash */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-5 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-pale-blue text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-110">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-2xs ${fac.badgeColor}`}>
                      {fac.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy mb-1 group-hover:text-primary transition-colors">
                      {fac.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-primary mb-4">
                      {fac.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6">
                      {fac.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2.5 mb-8 flex-grow">
                      <span className="text-[11px] font-bold text-navy uppercase tracking-wider block mb-1.5">
                        Key Highlights:
                      </span>
                      {fac.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-5 border-t border-border/70 flex items-center justify-between gap-3 mt-auto relative z-10">
                    <Link
                      href={fac.ctaHref}
                      className="text-xs sm:text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center transition-colors group/link"
                    >
                      <span>{fac.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    {fac.id === "obesity-clinic" ? (
                      <button
                        onClick={openModal}
                        className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-xs transition-all shadow-xs hover:shadow-card active:scale-95"
                      >
                        Book Slot
                      </button>
                    ) : (
                      <a
                        href="tel:8464070196"
                        className="px-3.5 py-1.5 bg-pale-blue hover:bg-primary hover:text-white text-navy font-semibold rounded-xl text-xs border border-border/70 transition-all inline-flex items-center gap-1.5 active:scale-95"
                      >
                        <Phone className="w-3 h-3 text-primary group-hover:text-white" />
                        <span>Call Clinic</span>
                      </a>
                    )}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Call The Clinic Bar with Phone: 8464070196 */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            {/* Organic Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-pale-blue/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="text-center md:text-left max-w-xl relative z-10">
              <span className="text-xs uppercase tracking-widest font-bold text-accent-warm block mb-1.5">
                Direct Patient Assistance
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-2.5 text-white">
                Have Inquiries About Our Facilities?
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Reach out directly to confirm laboratory timing, diabetic foot screening appointments, or 24/7 pharmacy queries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto relative z-10">
              <a
                href="tel:8464070196"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-navy hover:bg-pale-blue font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-card hover:scale-[1.02] flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call: 8464070196</span>
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 8464070196</span>
              </a>
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-sm border border-white/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
              >
                <CalendarHeart className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

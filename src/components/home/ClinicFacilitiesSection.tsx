"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Footprints, FlaskConical, Pill, Scale, 
  ArrowRight, Phone, CalendarHeart, Sparkles, CheckCircle2, MessageCircle 
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

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
      badgeVariant: "teal" as IconBadgeVariant,
      badge: "Specialized Lab",
      badgeColor: "bg-soft-teal text-primary border-primary/20",
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
      badgeVariant: "sky" as IconBadgeVariant,
      badge: "In-House Lab",
      badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
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
      badgeVariant: "emerald" as IconBadgeVariant,
      badge: "Open 24/7",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      ctaText: "Call Pharmacy",
      ctaHref: "tel:8464070196"
    },
    {
      id: "obesity-clinic",
      title: "Dedicated Obesity Clinic",
      subtitle: "Every Wednesday | 4:00 PM – 6:00 PM",
      description: "Science-backed medical weight management addressing neuroendocrine drivers, visceral fat, and insulin resistance with joint medical and dietary guidance.",
      highlights: [
        "Joint consultation: Endocrinologist + Clinical Dietician",
        "Dietician Dr Syamini Siripuram (MSc Nutrition & Dietetics)",
        "Metabolic health & body composition assessment",
        "Evidence-based medical weight loss pharmacotherapy"
      ],
      icon: Scale,
      badgeVariant: "amber" as IconBadgeVariant,
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
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
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {facilities.map((fac, idx) => (
            <ScrollReveal key={fac.id} delay={idx * 0.05} direction="up">
              <div className="relative rounded-3xl p-6 sm:p-7 lg:p-8 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full bg-white group card-interactive-glow">
                
                {/* Upper Area: Centered Icon Badge with Status Pill */}
                <div className="flex items-center justify-between mb-4 relative z-10 w-full">
                  <div className="flex items-center gap-3">
                    <CenterIconBadge 
                      icon={fac.icon} 
                      variant={fac.badgeVariant} 
                      size="md" 
                    />
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-2xs uppercase tracking-wider ${fac.badgeColor}`}>
                    {fac.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-navy mb-1 group-hover:text-primary transition-colors">
                    {fac.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-primary mb-3">
                    {fac.subtitle}
                  </div>

                  <p className="text-[#344654] text-xs sm:text-sm leading-relaxed mb-4">
                    {fac.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-[#E3EBF0]">
                    <span className="text-[10.5px] font-bold text-navy uppercase tracking-wider block mb-1">
                      Key Highlights:
                    </span>
                    {fac.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#344654]">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-3 mt-auto relative z-10">
                  <Link
                    href={fac.ctaHref}
                    className="text-xs sm:text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center transition-colors group/link touch-target"
                  >
                    <span>{fac.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  {fac.id === "obesity-clinic" ? (
                    <button
                      onClick={openModal}
                      className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-xs transition-all shadow-xs hover:shadow-card active:scale-95 touch-target"
                    >
                      Book Slot
                    </button>
                  ) : (
                    <a
                      href="tel:8464070196"
                      className="px-3.5 py-2 bg-soft-teal hover:bg-primary hover:text-white text-navy font-bold rounded-xl text-xs border border-primary/20 transition-all inline-flex items-center gap-1.5 active:scale-95 touch-target"
                    >
                      <Phone className="w-3.5 h-3.5 text-primary group-hover:text-white" />
                      <span>Call Clinic</span>
                    </a>
                  )}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Direct Patient Assistance Bar — Editorial Light & White Treatment */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="card-white bg-gradient-to-r from-soft-teal/40 via-white to-pale-blue/40 border border-primary/20 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left max-w-xl">
              <span className="text-[10.5px] uppercase tracking-widest font-bold text-primary block mb-1">
                Direct Patient Assistance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2 text-navy">
                Have Inquiries About Our Facilities?
              </h3>
              <p className="text-[#344654] text-xs sm:text-sm leading-relaxed">
                Reach out directly to confirm laboratory timing, diabetic foot screening appointments, or 24/7 pharmacy queries in Vizianagaram.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full md:w-auto">
              <a
                href="tel:8464070196"
                className="px-5 py-3 bg-white text-navy hover:text-primary border border-border font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 active:scale-95 touch-target"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call: 8464070196</span>
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 active:scale-95 touch-target"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={openModal}
                className="px-5 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs sm:text-sm shadow-soft transition-all flex items-center justify-center gap-2 active:scale-95 touch-target"
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

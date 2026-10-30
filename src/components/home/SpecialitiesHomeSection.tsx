"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, ArrowRight, ActivitySquare, Droplets, Baby, Scale, CheckCircle2, LucideIcon, CalendarHeart 
} from "lucide-react";
import Link from "next/link";
import { IconBadgeVariant } from "@/components/ui/CreativeCard";
import { ExpandableGroup } from "@/components/ui/ExpandableGroup";
import { useAppointment } from "@/context/AppointmentContext";

interface SpecialtyItem {
  id: string;
  title: string;
  teluguTitle: string;
  subtitle: string;
  shortSummary: string;
  fullDescription: string;
  href: string;
  icon: LucideIcon;
  variant: IconBadgeVariant;
  keyPoints: string[];
  badge: string;
}

const mainSpecialties: SpecialtyItem[] = [
  {
    id: "diabetes-care",
    title: "Diabetes Care",
    teluguTitle: "డయాబెటిస్ కేర్",
    subtitle: "Type 1, Type 2 & Gestational Diabetes, Complication Prevention & Monitoring",
    shortSummary: "Comprehensive clinical care for Type 1, Type 2, and Gestational Diabetes.",
    fullDescription: "Complete clinical care for Type 1, Type 2, and Gestational Diabetes, with specialized complication prevention, daily insulin technique guidance, and advanced blood sugar monitoring in Vizianagaram.",
    href: "/diabetes-care",
    icon: Activity,
    variant: "teal",
    badge: "Primary Discipline",
    keyPoints: [
      "Type 1 & Type 2 Diabetes Management",
      "Gestational Diabetes (Pregnancy Care)",
      "Diabetic Foot Neuropathy & Vascular Screening",
      "HbA1c & Continuous Glucose Monitoring Guidance"
    ]
  },
  {
    id: "thyroid-disorders",
    title: "Thyroid Disorders",
    teluguTitle: "థైరాయిడ్ సమస్యలు",
    subtitle: "Hypo/Hyperthyroidism, Thyroid Nodules, Hashimoto's & Pregnancy Thyroid",
    shortSummary: "Accurate diagnosis and personalized therapy for thyroid imbalances and nodules.",
    fullDescription: "Accurate diagnosis and personalized therapy for hypothyroidism, hyperthyroidism, thyroid nodules, Hashimoto's autoimmune thyroiditis, and pregnancy thyroid health.",
    href: "/thyroid-care",
    icon: ActivitySquare,
    variant: "sky",
    badge: "Hormone Speedometer",
    keyPoints: [
      "Hypothyroidism (Underactive Thyroid & Weight Issues)",
      "Hyperthyroidism (Overactive Thyroid & Palpitations)",
      "Thyroid Nodules, Goitre & TI-RADS Evaluation",
      "Pre-Pregnancy & Trimester-Specific Thyroid Targets"
    ]
  },
  {
    id: "hormonal-disorders",
    title: "Hormonal Disorders & PCOS",
    teluguTitle: "హార్మోన్ల సమస్యలు & PCOS",
    subtitle: "PCOS, Irregular Periods, Facial Hair, Hormonal Acne & Glandular Balance",
    shortSummary: "Expert evaluation and balancing for PCOS, cycle irregularity, and hormones.",
    fullDescription: "Expert evaluation and root-cause balancing for PCOS, irregular periods, hirsutism, hormonal weight gain, adrenal disorders, and pituitary gland health.",
    href: "/pcos-womens-health",
    icon: Droplets,
    variant: "rose",
    badge: "Women's Health",
    keyPoints: [
      "Polycystic Ovary Syndrome (PCOS) Phenotypes",
      "Menstrual Irregularity & Hormonal Acne",
      "Hormonal Imbalance, Chronic Fatigue & Mood",
      "Pituitary & Adrenal Gland Evaluation"
    ]
  },
  {
    id: "adult-paediatric",
    title: "Adult & Paediatric Endocrinology",
    teluguTitle: "పెద్దలు & పిల్లల ఎండోక్రినాలజీ",
    subtitle: "Short Stature, Growth Delays, Early/Delayed Puberty & Juvenile Diabetes",
    shortSummary: "Dedicated hormone care for growth delays, early puberty, and all life stages.",
    fullDescription: "Dedicated hormone care across all developmental stages, including slow child growth velocity, short stature, early or delayed puberty, and juvenile endocrine disorders.",
    href: "/paediatric-endocrinology",
    icon: Baby,
    variant: "mint",
    badge: "Growth & Development",
    keyPoints: [
      "Short Stature & Childhood Growth Velocity Evaluation",
      "Early (Precocious) or Delayed Pubertal Development",
      "Paediatric Thyroid & Juvenile Type 1 Diabetes",
      "Lifelong Hormone Wellness Across Generations"
    ]
  },
  {
    id: "obesity-management",
    title: "Obesity & Metabolic Management",
    teluguTitle: "ఊబకాయం & మెటబాలిక్ కేర్",
    subtitle: "Insulin Resistance, Medical Weight Care & Dedicated Wednesday Clinic",
    shortSummary: "Science-based weight care addressing insulin resistance and metabolism.",
    fullDescription: "Science-based medical weight management addressing biological root causes and insulin resistance. Dedicated Wednesday clinic featuring joint consultations with our Consultant Endocrinologist and Clinical Dietician.",
    href: "/obesity-clinic",
    icon: Scale,
    variant: "amber",
    badge: "Metabolic Health",
    keyPoints: [
      "Insulin Resistance, Fatty Liver & Metabolic Syndrome",
      "Evidence-Based Medical Weight Management",
      "Dedicated Wednesday Clinic (4:00 PM – 6:00 PM)",
      "Clinical Dietician Consultation with Andhra Meal Plans"
    ]
  }
];

export function SpecialitiesHomeSection() {
  const [openSpecialtyId, setOpenSpecialtyId] = useState<string | null>("diabetes-care");
  const { openModal } = useAppointment();

  const toggleSpecialty = (id: string) => {
    setOpenSpecialtyId((current) => (current === id ? null : id));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="specialties">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-soft-teal/20 rounded-full blur-3xl pointer-events-none -translate-y-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-pale-blue/30 rounded-full blur-3xl pointer-events-none translate-y-1/3" aria-hidden="true" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="badge-mint mb-2.5">
                Primary Clinical Focus
              </div>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-bold font-heading text-navy leading-tight mb-2">
                Main <span className="text-highlight-teal">Specialties</span> & Groups
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[#344654] leading-relaxed">
                Organised into five focused endocrine groups. Tap any specialty group to view conditions treated, clinical protocols, and care details.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpenSpecialtyId(openSpecialtyId ? null : "diabetes-care")}
                className="px-3.5 py-2 rounded-full text-xs font-bold bg-white hover:bg-soft-teal text-primary border border-primary/25 shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer touch-target shrink-0"
              >
                <span>{openSpecialtyId ? "Minimize All (—)" : "Expand Specialty (+)"}</span>
              </button>
              <Link
                href="/services"
                className="inline-flex items-center text-[#167C80] font-bold hover:text-[#126466] transition-colors duration-200 group text-xs sm:text-sm whitespace-nowrap bg-soft-teal/60 px-4 py-2 rounded-full border border-primary/20 hover:bg-soft-teal touch-target shadow-2xs"
              >
                <span>All 11 Services</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Grouped Accordion List: Clean, Compact, Zero Visual Clutter */}
        <div className="space-y-3.5 sm:space-y-4">
          {mainSpecialties.map((item, index) => {
            const isExpanded = openSpecialtyId === item.id;

            return (
              <ScrollReveal key={item.id} delay={index * 0.04} direction="up">
                <ExpandableGroup
                  id={item.id}
                  title={item.title}
                  teluguTitle={item.teluguTitle}
                  subtitle={item.subtitle}
                  badge={item.badge}
                  icon={item.icon}
                  iconVariant={item.variant}
                  itemCount="4 Focus Areas"
                  isExpanded={isExpanded}
                  onToggle={() => toggleSpecialty(item.id)}
                  variant="card"
                  toggleStyle="pill"
                >
                  <div className="space-y-4 pt-1">
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80">
                      {item.fullDescription}
                    </p>

                    <div className="bg-slate-50/80 p-3.5 sm:p-4 rounded-xl border border-slate-200/60">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-navy block mb-2.5">
                        Key Conditions & Protocols Under {item.title}:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.keyPoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-slate-100">
                      <Link
                        href={item.href}
                        className="py-2.5 px-4 rounded-xl bg-soft-teal hover:bg-soft-teal/80 text-primary border border-primary/20 font-bold text-xs flex items-center justify-center gap-1.5 group/link touch-target transition-all"
                      >
                        <span>Explore Full {item.title} Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>

                      <button
                        onClick={openModal}
                        className="py-2.5 px-5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs touch-target transition-all cursor-pointer active:scale-95"
                      >
                        <CalendarHeart className="w-3.5 h-3.5" />
                        <span>Book Consultation</span>
                      </button>
                    </div>
                  </div>
                </ExpandableGroup>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

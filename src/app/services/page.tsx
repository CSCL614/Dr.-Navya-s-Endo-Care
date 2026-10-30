"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, ArrowRight, Bone, Scale, ActivitySquare, Droplets, Baby, 
  Brain, Apple, Stethoscope, HeartPulse, LineChart, Syringe, Sparkles, CheckCircle2, ShieldCheck, LucideIcon, Phone, MessageCircle, CalendarHeart 
} from "lucide-react";
import Link from "next/link";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";
import { PreventionSection } from "@/components/home/PreventionSection";
import { ClinicFacilitiesSection } from "@/components/home/ClinicFacilitiesSection";
import { IconBadgeVariant } from "@/components/ui/CreativeCard";
import { ExpandableGroup } from "@/components/ui/ExpandableGroup";

interface CategoryMeta {
  id: string;
  label: string;
  subtitle: string;
  icon: LucideIcon;
  variant: IconBadgeVariant;
  badge: string;
}

const categoryMetadata: CategoryMeta[] = [
  {
    id: "metabolic",
    label: "Diabetes & Metabolic Disorders",
    subtitle: "Type 1 & Type 2 Diabetes, Prediabetes Reversal, Medical Obesity & Metabolic Syndrome",
    icon: Activity,
    variant: "teal",
    badge: "Metabolic Care"
  },
  {
    id: "thyroid",
    label: "Thyroid Disorders & Nodules",
    subtitle: "Hypothyroidism, Hyperthyroidism, Hashimoto's, Goitre & Pregnancy Thyroid Health",
    icon: ActivitySquare,
    variant: "sky",
    badge: "Thyroid Care"
  },
  {
    id: "reproductive",
    label: "Reproductive & Women's Hormonal Health",
    subtitle: "PCOS, Cycle Irregularity, Hirsutism, Hormonal Acne & Fertility Balance",
    icon: Droplets,
    variant: "rose",
    badge: "Women's Health"
  },
  {
    id: "paediatric",
    label: "Paediatric & Growth Endocrinology",
    subtitle: "Short Stature, Growth Delays, Early/Delayed Puberty & Juvenile Endocrine Care",
    icon: Baby,
    variant: "mint",
    badge: "Child Growth"
  },
  {
    id: "hormonal",
    label: "Pituitary, Adrenal & Bone Mineral Health",
    subtitle: "Prolactinoma, Cushing's, Adrenal Disorders, Osteoporosis & Calcium Equilibrium",
    icon: Brain,
    variant: "navy",
    badge: "Master Glands"
  }
];

export default function ServicesPage() {
  const { openModal } = useAppointment();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  // Default open the first group or the filtered one
  const [openGroupIds, setOpenGroupIds] = useState<string[]>(["metabolic"]);

  const categoryIcons: Record<string, LucideIcon> = {
    "type-1-diabetes": Activity,
    "type-2-diabetes": LineChart,
    "obesity-metabolic": Scale,
    "thyroid-disorders": ActivitySquare,
    "lifestyle-metabolic": Apple,
    "pcos": Baby,
    "paediatric-endocrinology": HeartPulse,
    "growth-puberty": Sparkles,
    "pituitary-adrenal": Brain,
    "reproductive-endocrinology": Droplets,
    "calcium-bone": Bone,
  };

  const categoryVariants: Record<string, IconBadgeVariant> = {
    "type-1-diabetes": "teal",
    "type-2-diabetes": "teal",
    "obesity-metabolic": "amber",
    "thyroid-disorders": "sky",
    "lifestyle-metabolic": "emerald",
    "pcos": "rose",
    "paediatric-endocrinology": "mint",
    "growth-puberty": "indigo",
    "pituitary-adrenal": "navy",
    "reproductive-endocrinology": "rose",
    "calcium-bone": "amber",
  };

  const detailLinkMap: Record<string, string> = {
    "type-1-diabetes": "/diabetes-care",
    "type-2-diabetes": "/diabetes-care",
    "obesity-metabolic": "/obesity-metabolic-health",
    "thyroid-disorders": "/thyroid-care",
    "lifestyle-metabolic": "/obesity-metabolic-health",
    "pcos": "/pcos-womens-health",
    "paediatric-endocrinology": "/paediatric-endocrinology",
    "growth-puberty": "/paediatric-endocrinology",
    "pituitary-adrenal": "/pituitary-adrenal-care",
    "reproductive-endocrinology": "/pcos-womens-health",
    "calcium-bone": "/bone-mineral-health",
  };

  const filterTabs = [
    { id: "all", label: "All 5 Groups" },
    { id: "metabolic", label: "Diabetes & Metabolism" },
    { id: "thyroid", label: "Thyroid" },
    { id: "reproductive", label: "Reproductive & PCOS" },
    { id: "paediatric", label: "Paediatric & Growth" },
    { id: "hormonal", label: "Pituitary, Adrenal & Bone" }
  ];

  const handleFilterSelect = (catId: string) => {
    setSelectedFilter(catId);
    if (catId === "all") {
      setOpenGroupIds(["metabolic"]);
    } else {
      setOpenGroupIds([catId]);
    }
  };

  const toggleGroup = (groupId: string) => {
    setOpenGroupIds((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  };

  const displayedGroups = selectedFilter === "all"
    ? categoryMetadata
    : categoryMetadata.filter((g) => g.id === selectedFilter);

  return (
    <div className="overflow-hidden bg-background min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 bg-gradient-hero border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-soft-teal/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-border text-primary font-semibold rounded-full text-xs sm:text-sm mb-6 shadow-2xs">
              <Sparkles className="w-4 h-4 text-primary" />
              Adult & Paediatric Superspeciality Care
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-navy mb-6 leading-tight">
              Clinical Interests & <span className="text-primary">Specialities</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Organized into 5 clinical groups covering 11 endocrine specialities. Tap any group to view related services, clinical focus, and guidance by Dr. Navya Sruthi Mandapati, DM (Endocrinology).
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="pt-8 sm:pt-10 pb-4">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {filterTabs.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterSelect(cat.id)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all touch-target cursor-pointer ${
                  selectedFilter === cat.id
                    ? "bg-primary text-white shadow-card scale-102"
                    : "bg-white text-navy hover:bg-soft-teal border border-border hover:border-primary/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grouped Accordion Sections */}
      <section className="py-6 sm:py-10 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="space-y-4 sm:space-y-5">
            {displayedGroups.map((group, idx) => {
              const groupServices = doctorData.specialities.filter(
                (s) => s.category === group.id
              );
              const isExpanded = openGroupIds.includes(group.id);

              return (
                <ScrollReveal key={group.id} delay={idx * 0.05} direction="up">
                  <ExpandableGroup
                    id={group.id}
                    title={group.label}
                    subtitle={group.subtitle}
                    badge={group.badge}
                    icon={group.icon}
                    iconVariant={group.variant}
                    itemCount={`${groupServices.length} Services`}
                    isExpanded={isExpanded}
                    onToggle={() => toggleGroup(group.id)}
                    variant="card"
                    toggleStyle="pill"
                  >
                    {/* Rendered Specialities Inside Group */}
                    <div className="space-y-4 pt-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {groupServices.map((item) => {
                          const Icon = categoryIcons[item.id] || Stethoscope;
                          const variant = categoryVariants[item.id] || "teal";

                          return (
                            <div
                              key={item.id}
                              id={item.id}
                              className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-card transition-all flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 rounded-xl bg-soft-teal/50 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                                    <Icon className="w-5 h-5 text-primary" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm sm:text-base font-bold font-heading text-navy">
                                      {item.title}
                                    </h4>
                                    <p className="text-xs text-text-secondary line-clamp-1">
                                      {item.shortDesc}
                                    </p>
                                  </div>
                                </div>

                                <p className="text-xs text-text-secondary leading-relaxed mb-3">
                                  {item.fullDesc}
                                </p>

                                <div className="space-y-1.5 mb-4 bg-slate-50/70 p-3 rounded-xl border border-slate-200/60">
                                  <span className="text-[10px] font-bold text-navy uppercase tracking-wider block">
                                    Key Clinical Focus:
                                  </span>
                                  {item.keyPoints.map((point, pIdx) => (
                                    <div key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                      <span>{point}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                                {detailLinkMap[item.id] && (
                                  <Link 
                                    href={detailLinkMap[item.id]}
                                    className="flex-1 py-2 px-3 rounded-xl border border-border text-navy hover:text-primary hover:border-primary/40 text-center font-bold transition-colors text-xs flex items-center justify-center gap-1 group/link touch-target"
                                  >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                                  </Link>
                                )}
                                <button 
                                  onClick={openModal}
                                  className="flex-1 py-2 px-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold transition-colors text-xs shadow-2xs text-center active:scale-95 touch-target cursor-pointer flex items-center justify-center gap-1"
                                >
                                  <CalendarHeart className="w-3.5 h-3.5" />
                                  <span>Book Visit</span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </ExpandableGroup>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prevention & Warning Signs Section */}
      <PreventionSection />

      {/* Facilities Section */}
      <ClinicFacilitiesSection />

      {/* Final Appointment CTA with Guaranteed High-Contrast Styling */}
      <section className="py-16 sm:py-20 bg-pale-blue/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-[#173B57] via-[#1E4D6E] to-[#0F2B40] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white/15 border border-white/20 text-teal-200 font-semibold rounded-full text-xs sm:text-sm mb-4">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  Vizianagaram&apos;s Dedicated Endocrine Centre
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading !text-white mb-4">
                  Need Personalized Guidance for <span className="text-amber-300">Your Reports?</span>
                </h2>

                <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                  Book a detailed clinical consultation with Dr. Navya Sruthi Mandapati. We provide clear answers, root-cause diagnosis, and personalized treatment plans in Telugu and English.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3.5">
                  <button
                    onClick={openModal}
                    className="px-8 py-3.5 bg-white hover:bg-teal-50 text-navy font-bold rounded-full shadow-card transition-all text-xs sm:text-sm cursor-pointer active:scale-95"
                  >
                    Book In-Person Consultation
                  </button>
                  <a
                    href="tel:8464070196"
                    className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/25 transition-all text-xs sm:text-sm flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-teal-300" />
                    <span>Call: 8464070196</span>
                  </a>
                  <a
                    href="https://wa.me/918464070196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full shadow-xs transition-all text-xs sm:text-sm flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

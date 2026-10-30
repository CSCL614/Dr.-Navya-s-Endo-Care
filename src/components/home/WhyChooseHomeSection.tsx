"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Award, HeartPulse, Search, MessageSquare, Apple, ShieldCheck, 
  UserCheck, Building2, LucideIcon, CheckCircle2, Sparkles, ArrowRight, ChevronDown 
} from "lucide-react";
import { IconBadgeVariant } from "@/components/ui/CreativeCard";
import { motion, AnimatePresence } from "framer-motion";

interface PillarData {
  id: string;
  tag: string;
  title: string;
  teluguTitle: string;
  shortDesc: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  bgGlow: string;
  points: {
    title: string;
    description: string;
  }[];
}

const pillars: PillarData[] = [
  {
    id: "academic-excellence",
    tag: "Clinical Excellence",
    title: "Superspecialist Academic Rigor",
    teluguTitle: "సూపర్‌స్పెషలిస్ట్ నైపుణ్యం & శాస్త్రీయ చికిత్స",
    shortDesc: "DM Endocrinologist, University Topper credentials and strict adherence to international endocrine guidelines.",
    icon: Award,
    color: "text-amber-600 bg-amber-50 border-amber-200",
    gradient: "from-amber-500/10 via-white to-transparent",
    bgGlow: "bg-amber-400/20",
    points: [
      {
        title: "DM Endocrinologist & University Topper",
        description: "Specialized training exclusively in hormone, diabetes, and metabolic diseases—delivering dedicated superspecialist expertise in Vizianagaram."
      },
      {
        title: "Strict Evidence-Based Protocols",
        description: "Adhering to verified Endocrine Society and ADA clinical standards with transparent explanations and no unscientific shortcuts."
      },
      {
        title: "Target-Driven Complication Prevention",
        description: "Setting personalized laboratory targets (HbA1c, TSH, microalbumin) to proactively protect organs before complications emerge."
      }
    ]
  },
  {
    id: "patient-consultation",
    tag: "Patient Experience",
    title: "Unhurried, Root-Cause Care",
    teluguTitle: "ఓపికతో వినే సంప్రదింపులు & మూలకారణ నిర్ధారణ",
    shortDesc: "Comprehensive file reviews, unhurried time to listen in Telugu or English, and identifying the biological 'why'.",
    icon: HeartPulse,
    color: "text-teal-600 bg-soft-teal border-primary/20",
    gradient: "from-teal-500/10 via-white to-transparent",
    bgGlow: "bg-teal-400/20",
    points: [
      {
        title: "Treating the Root Cause, Not Just Numbers",
        description: "Evaluating cellular insulin resistance, glandular triggers, and metabolic drivers instead of merely masking symptoms."
      },
      {
        title: "Unhurried Discussions in Telugu or English",
        description: "Adequate time to ask questions, review past medical reports, and feel confident about your tailored care roadmap."
      },
      {
        title: "Lifelong Care for All Ages",
        description: "Complete endocrinology from infant growth delays and teenage puberty concerns to adult and geriatric wellness."
      }
    ]
  },
  {
    id: "lifestyle-clinics",
    tag: "Holistic Health",
    title: "Andhra Nutrition & Joint Clinics",
    teluguTitle: "వాస్తవిక జీవనశైలి & ప్రత్యేక క్లినిక్ సేవలు",
    shortDesc: "Andhra-specific practical nutrition, sustainable physical activity, and Wednesday joint dietician clinics.",
    icon: Apple,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    gradient: "from-emerald-500/10 via-white to-transparent",
    bgGlow: "bg-emerald-400/20",
    points: [
      {
        title: "Andhra-Friendly Nutrition & Meal Timing",
        description: "Practical dietary changes tailored to your home kitchen, authentic local foods, and family routine without starvation diets."
      },
      {
        title: "Dedicated Joint Obesity Clinic (Wed 4-6 PM)",
        description: "Comprehensive joint consultations with Consultant Endocrinologist Dr. Navya and Clinical Dietician Dr. Syamini Siripuram."
      }
    ]
  }
];

export function WhyChooseHomeSection() {
  const [activeTab, setActiveTab] = useState<string>("academic-excellence");

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const Icon = currentPillar.icon;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-pale-blue/40 via-white to-pale-blue/20 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="why-choose">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-soft-teal/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pale-blue/40 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <ScrollReveal>
            <div className="badge-mint mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Our Clinical Standards</span>
            </div>

            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-navy leading-tight mb-2.5">
              Why Choose <span className="text-highlight-teal">Dr. Navya&apos;s EndoCare?</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-[#344654] leading-relaxed font-normal">
              Combining superspecialist academic rigor with unhurried listening and practical lifestyle empowerment in Vizianagaram.
            </p>
          </ScrollReveal>
        </div>

        {/* Creative Interactive Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {pillars.map((pillar) => {
            const isActive = activeTab === pillar.id;
            const PillIcon = pillar.icon;

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer touch-target ${
                  isActive
                    ? "bg-primary text-white shadow-card scale-102 ring-2 ring-primary/30 btn-glow-primary"
                    : "bg-white text-navy hover:bg-soft-teal/80 border border-border shadow-2xs hover:border-primary/30"
                }`}
              >
                <PillIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-white" : "text-primary"}`} />
                <span>{pillar.title.split(" ")[0]} {pillar.title.split(" ")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Creative Showcase Card with Dynamic Animation & Glowing Border */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className={`bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-card card-interactive-glow glow-card-featured relative overflow-hidden bg-gradient-to-br ${currentPillar.gradient}`}
          >
            {/* Header of Active Pillar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs shrink-0 ${currentPillar.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-soft-teal px-2 py-0.5 rounded-md border border-primary/20">
                      {currentPillar.tag}
                    </span>
                    <span className="text-xs font-semibold text-primary hidden sm:inline-block">
                      {currentPillar.teluguTitle}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold font-heading text-navy">
                    {currentPillar.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary sm:max-w-xs leading-relaxed">
                {currentPillar.shortDesc}
              </p>
            </div>

            {/* 3 Creative Feature Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mt-6">
              {currentPillar.points.map((pt, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-card hover:border-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="w-5 h-5 rounded-full bg-soft-teal text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-navy leading-snug group-hover:text-primary transition-colors">
                        {pt.title}
                      </h4>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed pl-7.5">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Telugu text on mobile */}
            <p className="sm:hidden text-xs font-semibold text-primary mt-4 text-center">
              {currentPillar.teluguTitle}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

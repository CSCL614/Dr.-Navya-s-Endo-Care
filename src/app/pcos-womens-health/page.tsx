"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Sparkles, CheckCircle2, ArrowRight, CalendarHeart, 
  Droplets, Scale, ShieldCheck, HeartPulse, ChevronDown, LucideIcon, Activity 
} from "lucide-react";
import Link from "next/link";
import { useAppointment } from "@/context/AppointmentContext";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandableGroup } from "@/components/ui/ExpandableGroup";

export default function PcosWomensHealthPage() {
  const { openModal } = useAppointment();
  const [openFocusGroupId, setOpenFocusGroupId] = useState<string | null>("pcos-cycles");
  const [openSymptomGroupId, setOpenSymptomGroupId] = useState<string | null>("cycle-signs");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const focusGroups = [
    {
      id: "pcos-cycles",
      title: "PCOS Phenotyping & Menstrual Regularity",
      subtitle: "Rotterdam Criteria, Anovulation, Cycle Restoration & Endometrial Protection",
      icon: Droplets,
      iconVariant: "rose" as const,
      badge: "Ovulatory Care",
      areas: [
        {
          title: "Polycystic Ovary Syndrome (PCOS)",
          description: "A complex endocrine-metabolic syndrome affecting hormonal balance, ovulation, and insulin sensitivity. We perform thorough phenotypic evaluation based on the Rotterdam diagnostic criteria.",
          action: "Hormone profiling, ultrasound review, and personalized cycle normalization."
        },
        {
          title: "Menstrual Irregularities & Oligo-ovulation",
          description: "Cycles spaced further than 35 days apart, skipped periods, or unpredictably heavy bleeding caused by anovulation (absence of regular egg release).",
          action: "Endometrial protection protocols and restoring natural hormonal rhythms."
        }
      ]
    },
    {
      id: "metabolic-insulin",
      title: "Insulin Resistance & Hormonal Transitions",
      subtitle: "Treating the 70–80% Metabolic Root Cause & Perimenopause Care",
      icon: Activity,
      iconVariant: "teal" as const,
      badge: "Metabolic Core",
      areas: [
        {
          title: "Insulin Resistance & Metabolic Drivers",
          description: "Up to 70-80% of women with PCOS have underlying insulin resistance. Excess circulating insulin signals the ovaries to overproduce male hormones (androgens), preventing regular ovulation and driving weight accumulation.",
          action: "Insulin-sensitizing approaches, fasting glucose evaluation, and visceral fat reduction."
        },
        {
          title: "Perimenopause & Hormonal Transitions",
          description: "Navigating fluctuating estrogen and progesterone levels during the perimenopausal transition—managing hot flushes, mood changes, insomnia, and bone density preservation.",
          action: "Evidence-based hormonal assessment and cardiovascular/bone protection."
        }
      ]
    },
    {
      id: "androgens-fertility",
      title: "Androgen Signs & Fertility Preparation",
      subtitle: "Facial Hair (Hirsutism), Stubborn Acne & Pre-Conception Optimization",
      icon: Sparkles,
      iconVariant: "amber" as const,
      badge: "Hormone Balancing",
      areas: [
        {
          title: "Hyperandrogenism (Facial Hair & Acne)",
          description: "Elevated androgen levels cause excess hair growth on the chin, chest, or abdomen (hirsutism), stubborn cystic acne, and androgenetic hair thinning.",
          action: "Anti-androgenic medical options, dermatological coordination, and hormone balance."
        },
        {
          title: "Pre-Conception Metabolic Optimization",
          description: "Preparing the body for safe, successful conception. Optimizing maternal metabolic health before pregnancy reduces risks of gestational diabetes, preeclampsia, and early pregnancy complications.",
          action: "Pre-conceptional glucose, thyroid, and weight optimization."
        }
      ]
    }
  ];

  const symptomGroups = [
    {
      id: "cycle-signs",
      title: "Menstrual & Ovulatory Warning Signs",
      subtitle: "Irregular cycles, delayed periods & fertility challenges",
      icon: Droplets,
      iconVariant: "rose" as const,
      badge: "Cycles",
      items: [
        "Cycles longer than 35 days or fewer than 8 periods a year",
        "Difficulty conceiving after 6–12 months of unprotected attempts"
      ]
    },
    {
      id: "androgen-signs",
      title: "Androgenic & Skin Indicators",
      subtitle: "Excess male hormone impact on hair and skin",
      icon: Sparkles,
      iconVariant: "amber" as const,
      badge: "Dermatological",
      items: [
        "Coarse, dark hair growth on chin, upper lip, chest, or abdomen (hirsutism)",
        "Persistent acne resistant to standard cosmetic skincare creams",
        "Hair thinning or widening partition on the scalp"
      ]
    },
    {
      id: "metabolic-signs",
      title: "Metabolic & Insulin Resistance Signs",
      subtitle: "Blood sugar instability and stubborn weight",
      icon: Activity,
      iconVariant: "teal" as const,
      badge: "Metabolism",
      items: [
        "Difficulty losing weight despite strict calorie restriction (weight resistance)",
        "Dark, velvety skin patches on the neck or armpits (acanthosis nigricans)",
        "Frequent carbohydrate cravings, mid-afternoon energy crashes, or shakiness"
      ]
    }
  ];

  const faqs = [
    {
      q: "Is PCOS curable, or is it something I must live with forever?",
      a: "PCOS is a chronic hormonal and metabolic predisposition rather than a temporary infection, meaning it cannot be eradicated with a short course of pills. However, with root-cause management—addressing insulin resistance, adopting sustainable nutrition, and using targeted medical therapy when indicated—symptoms can be completely controlled, periods can become regular, fertility restored, and long-term metabolic risks eliminated."
    },
    {
      q: "Can I get pregnant if I have PCOS?",
      a: "Yes, absolutely. PCOS causes subfertility because irregular ovulation means an egg is not released predictably every month. By correcting underlying insulin resistance, optimizing weight, and using ovulation-inducing medicines when needed under specialist care, the majority of women with PCOS conceive healthy pregnancies naturally or with minimal assistance."
    },
    {
      q: "Why do crash diets and extreme calorie restrictions fail in PCOS?",
      a: "In women with PCOS and insulin resistance, extreme calorie restriction triggers a stress response: elevated cortisol further promotes abdominal fat storage and triggers intense rebound hunger. Successful PCOS management requires blood-sugar-stabilizing nutrition with balanced protein, fiber, and healthy fats suited to local Andhra dietary habits—not hunger starvation."
    },
    {
      q: "What is the difference between PCOD and PCOS?",
      a: "While commonly used interchangeably, 'PCOD' (Polycystic Ovarian Disease) is an older descriptive term for ovaries showing multiple immature follicles on ultrasound. 'PCOS' (Polycystic Ovary Syndrome) is the medically accurate term because it reflects a systemic endocrine and metabolic syndrome with insulin, androgen, and cardiovascular implications beyond just the ovaries."
    }
  ];

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200 text-primary font-semibold rounded-full text-xs sm:text-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              Reproductive & Metabolic Endocrinology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-4 leading-tight">
              PCOS & Women’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Hormonal Health</span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-teal-800 mb-6">
              పీసీఓఎస్ & మహిళల హార్మోన్ల ఆరోగ్యం — మూలకారణాన్ని సరిచేసే శాస్త్రీయ చికిత్స
            </p>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              PCOS is fundamentally a metabolic and hormonal condition, not merely a gynaecological symptom. We address insulin resistance, androgen excess, menstrual irregularities, and fertility goals with personalized, empathetic care in Vizianagaram.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base flex items-center gap-2 cursor-pointer"
              >
                <CalendarHeart className="w-5 h-5" />
                Book PCOS Consultation
              </button>
              <Link
                href="/obesity-metabolic-health"
                className="px-8 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-full border border-slate-200 transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <Scale className="w-4 h-4 text-teal-600" />
                Wednesday Lifestyle Clinic
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Root-Cause Banner */}
      <section className="py-10 bg-teal-50/60 border-b border-teal-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">Endocrine Approach</span>
              <h3 className="text-2xl font-bold font-heading text-slate-800">
                Treating the Root, Not Just the Cycle
              </h3>
            </div>
            <div className="md:col-span-2 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed space-y-2">
              <p>
                Masking PCOS with oral contraceptives may induce withdrawal bleeding, but does not solve underlying insulin resistance or ovarian androgen excess. We target the biological cause for durable hormonal and reproductive restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas - Grouped Accordion */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Clinical Focus Groups
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Organized into 3 structured groups covering cycle restoration, metabolic correction, and fertility preparation. Tap any group to view details.
              </p>
            </ScrollReveal>
          </div>

          {/* Grouped Accordions */}
          <div className="space-y-4 mb-16">
            {focusGroups.map((grp, idx) => {
              const isExpanded = openFocusGroupId === grp.id;

              return (
                <ScrollReveal key={grp.id} delay={idx * 0.05} direction="up">
                  <ExpandableGroup
                    id={grp.id}
                    title={grp.title}
                    subtitle={grp.subtitle}
                    badge={grp.badge}
                    icon={grp.icon}
                    iconVariant={grp.iconVariant}
                    itemCount={`${grp.areas.length} Focus Areas`}
                    isExpanded={isExpanded}
                    onToggle={() => setOpenFocusGroupId((prev) => (prev === grp.id ? null : grp.id))}
                    variant="card"
                    toggleStyle="pill"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      {grp.areas.map((item, aIdx) => (
                        <div
                          key={aIdx}
                          className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="text-sm sm:text-base font-bold font-heading text-navy mb-2 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              <span>{item.title}</span>
                            </h4>
                            <p className="text-xs text-text-secondary leading-relaxed mb-3">
                              {item.description}
                            </p>
                          </div>
                          <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-200/80 text-xs">
                            <strong className="text-rose-900 font-bold block mb-0.5">Clinical Action Plan:</strong>
                            <span className="text-rose-800 font-medium">{item.action}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ExpandableGroup>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Symptoms Checklist — Grouped Accordion */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md mb-16">
            <div className="max-w-3xl mb-6 sm:mb-8">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Check Your Symptoms</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Common Signs of PCOS & Hormonal Imbalance
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                PCOS presents differently in each woman. Grouped by symptom categories below:
              </p>
            </div>

            <div className="space-y-3.5">
              {symptomGroups.map((grp) => {
                const isExpanded = openSymptomGroupId === grp.id;

                return (
                  <ExpandableGroup
                    key={grp.id}
                    id={grp.id}
                    title={grp.title}
                    subtitle={grp.subtitle}
                    badge={grp.badge}
                    icon={grp.icon}
                    iconVariant={grp.iconVariant}
                    itemCount={`${grp.items.length} Signs`}
                    isExpanded={isExpanded}
                    onToggle={() => setOpenSymptomGroupId((prev) => (prev === grp.id ? null : grp.id))}
                    variant="subtle"
                    toggleStyle="pill"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {grp.items.map((symp, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-slate-800 leading-snug">{symp}</span>
                        </div>
                      ))}
                    </div>
                  </ExpandableGroup>
                );
              })}
            </div>
          </div>

          {/* Educational FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Patient Guidance</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                PCOS & Hormonal Health Questions
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                ఆరోగ్యం గురించి తెలుసుకోవడం చికిత్సలో మొదటి అడుగు.
              </p>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading font-bold text-slate-800 text-xs sm:text-sm hover:text-primary transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-primary text-white rotate-180" : "bg-teal-50 text-primary"
                      }`}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-teal-50/20">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Card */}
          <ScrollReveal direction="up">
            <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
                  Take Control of Your Hormonal Health
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                  Book a confidential, comprehensive consultation with Dr. Navya Sruthi Mandapati, DM (Endocrinology) — University Topper, in Vizianagaram.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={openModal}
                    className="px-7 py-3 bg-white text-slate-900 hover:bg-teal-50 font-bold rounded-full shadow-card transition-all text-xs sm:text-sm active:scale-95 cursor-pointer"
                  >
                    Schedule PCOS Consultation
                  </button>
                  <Link
                    href="/contact"
                    className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all text-xs sm:text-sm"
                  >
                    Clinic Details & Directions
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}

"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Bone, AlertCircle, CalendarHeart, ChevronDown, Phone, HeartPulse, Sun, Activity, MessageCircle, ShieldAlert, LucideIcon 
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandableGroup } from "@/components/ui/ExpandableGroup";

export default function BoneMineralHealthPage() {
  const { openModal } = useAppointment();
  const [openConditionGroupId, setOpenConditionGroupId] = useState<string | null>("osteoporosis-vitd");
  const [openSignsGroupId, setOpenSignsGroupId] = useState<string | null>("skeletal-signs");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const conditionGroups = [
    {
      id: "osteoporosis-vitd",
      title: "Osteoporosis, Bone Density & Vitamin D Health",
      subtitle: "Silent Bone Thinning, DEXA Scan T-Score Analysis & Resistant Vitamin D Deficiency",
      icon: Bone,
      iconVariant: "amber" as const,
      badge: "Bone Strength",
      conditions: [
        {
          title: "Osteoporosis & Low Bone Mass (Osteopenia)",
          description: "Progressive thinning of bone microarchitecture leading to heightened fracture risk, particularly of the spine, hip, and wrist. Often silent until a minor stumble results in a painful fracture.",
          focus: "DEXA scan T-score analysis, FRAX risk calculation, and anabolic/anti-resorptive bone therapy."
        },
        {
          title: "Severe & Resistant Vitamin D Deficiency",
          description: "Widespread among Indian populations due to high melanin shielding UV-B synthesis and indoor work. Severe deficiency causes poor calcium absorption, secondary hyperparathyroidism, and osteomalacia.",
          focus: "Structured therapeutic high-dose replenishment protocols followed by maintenance."
        },
        {
          title: "Osteomalacia & Metabolic Bone Disease",
          description: "Defective bone mineralization resulting in soft, painful bones, waddling gait, and severe thigh muscle weakness, distinct from osteoporosis.",
          focus: "Restoring active Vitamin D levels and remineralizing the skeletal matrix."
        }
      ]
    },
    {
      id: "parathyroid-calcium-stones",
      title: "Parathyroid, Calcium & Kidney Stone Metabolism",
      subtitle: "Hyperparathyroidism, Recurrent Kidney Stones, Hypercalcemia & Hypocalcemia",
      icon: HeartPulse,
      iconVariant: "rose" as const,
      badge: "Mineral Balance",
      conditions: [
        {
          title: "Primary Hyperparathyroidism",
          description: "Overactivity of one or more of the four parathyroid glands (often a benign adenoma) causing excessive PTH secretion. This leaches calcium out of bones into the blood.",
          focus: "Localization imaging, medical management of hypercalcemia, and surgical referral when indicated."
        },
        {
          title: "Recurrent Kidney Stones (Nephrolithiasis)",
          description: "Repeated kidney stones are often an endocrine metabolic issue rather than just a urological one. Excess urinary calcium excretion (hypercalciuria) or hyperparathyroidism is frequently responsible.",
          focus: "Comprehensive metabolic stone workup, 24-hour urine chemistry, and PTH testing."
        },
        {
          title: "Hypercalcemia & Hypocalcemia",
          description: "Abnormally elevated or reduced blood calcium levels disrupt cardiac conduction, neuromuscular tone, and mental clarity. Finding the underlying glandular cause is critical.",
          focus: "Ionized calcium, PTH, Vitamin D metabolites, and renal handling assessment."
        }
      ]
    }
  ];

  const warningSignsGroups = [
    {
      id: "skeletal-signs",
      title: "Fracture, Height & Skeletal Indicators",
      subtitle: "Fragility fractures, spine curvature and persistent bone aches",
      icon: Bone,
      iconVariant: "amber" as const,
      badge: "Skeletal Flags",
      signs: [
        "Breaking a wrist, hip, or bone from a minor fall from standing height (fragility fracture)",
        "Gradual loss of height (2 inches or more) or development of a stooped posture (kyphosis)",
        "Persistent deep aching bone pain in the lower back, hips, or legs",
        "Early menopause (before age 45) or prolonged use of oral steroid medications"
      ]
    },
    {
      id: "parathyroid-stone-signs",
      title: "Kidney Stone, Calcium & Neuromuscular Indicators",
      subtitle: "Recurrent stones, lab reports, muscle cramps and weakness",
      icon: HeartPulse,
      iconVariant: "rose" as const,
      badge: "Metabolic Flags",
      signs: [
        "History of recurrent kidney stones despite drinking ample water",
        "Blood reports showing elevated calcium (> 10.2 mg/dL) or low calcium (< 8.5 mg/dL)",
        "Muscle weakness making it difficult to stand up from a low chair or climb stairs",
        "Tingling, numbness around the lips, or muscle cramps in hands and calves"
      ]
    }
  ];

  const faqs = [
    {
      q: "Why do routine over-the-counter calcium tablets fail to relieve bone pain?",
      a: "Calcium alone cannot strengthen bone if there is a severe Vitamin D deficiency (which prevents calcium absorption from the intestine), if parathyroid hormone (PTH) is constantly leaching calcium out of bones, or if advanced osteoporosis requires prescription bone-forming (anabolic) agents like Teriparatide. Proper treatment requires an endocrine workup to identify the exact metabolic bottleneck."
    },
    {
      q: "How can high calcium cause kidney stones and bone thinning simultaneously?",
      a: "In conditions like Primary Hyperparathyroidism, overactive parathyroid glands produce too much PTH. PTH aggressively pulls calcium out of your skeletal bones (causing bone thinning and osteoporosis) and dumps it into the bloodstream (hypercalcemia). When the kidneys filter this excess blood calcium into the urine (hypercalciuria), calcium stones crystallize in the kidneys."
    },
    {
      q: "What is the difference between Osteopenia and Osteoporosis?",
      a: "Both refer to lower-than-normal bone mineral density as measured by a DEXA scan. Osteopenia (T-score between -1.0 and -2.5) represents moderate bone thinning—an early warning stage. Osteoporosis (T-score -2.5 or lower) means significant structural fragility with a high risk of bone fractures. Timely treatment at the osteopenia stage can prevent progression to osteoporosis."
    },
    {
      q: "Why is Vitamin D deficiency so rampant even in a sunny country like India?",
      a: "Melanin in darker skin tones acts as a natural sunblock, requiring nearly 3 to 5 times more sun exposure to synthesize the same amount of Vitamin D as lighter skin. Additionally, urban living, indoor desk work, pollution, and cultural clothing cover most skin during the peak UV-B hours (11:00 AM – 2:00 PM). Dietary sources of Vitamin D are also minimal unless fortified."
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
              Bone & Mineral Endocrinology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-4 leading-tight">
              Bone Health, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Calcium & Vitamin D</span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-teal-800 mb-6">
              ఎముకలు, కాల్షియం & విటమిన్ డి — బోన్ మినరల్ హెల్త్ స్పెషాలిటీ కేర్
            </p>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Bones are living organs regulated by hormones, calcium, and vitamin D. From silent osteoporosis and parathyroid gland adenomas to recurrent kidney stones and severe vitamin D deficiencies, we provide comprehensive metabolic bone care in Vizianagaram.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base flex items-center gap-2 cursor-pointer"
              >
                <CalendarHeart className="w-5 h-5" />
                Book Bone Health Assessment
              </button>
              <a
                href="tel:8464070196"
                className="px-8 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-full border border-slate-200 transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                Call 8464070196
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-xs transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: 8464070196
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DEXA Banner */}
      <section className="py-10 bg-teal-50/60 border-b border-teal-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">Preventing Fractures</span>
              <h3 className="text-2xl font-bold font-heading text-slate-800">
                Silence Before the Break
              </h3>
            </div>
            <div className="md:col-span-2 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-2">
              <p>
                Osteoporosis does not cause pain until a bone actually breaks. For postmenopausal women, elderly men, and individuals on long-term corticosteroids, routine bone mineral density (DEXA) screening allows us to rebuild bone strength before an injury occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions - Grouped Accordion */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Bone & Mineral Condition Groups
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Advanced endocrine evaluation connecting hormonal regulation with lifelong skeletal durability. Tap any group to view clinical protocols.
              </p>
            </ScrollReveal>
          </div>

          {/* Grouped Accordions */}
          <div className="space-y-4 mb-16">
            {conditionGroups.map((grp, idx) => {
              const isExpanded = openConditionGroupId === grp.id;

              return (
                <ScrollReveal key={grp.id} delay={idx * 0.05} direction="up">
                  <ExpandableGroup
                    id={grp.id}
                    title={grp.title}
                    subtitle={grp.subtitle}
                    badge={grp.badge}
                    icon={grp.icon}
                    iconVariant={grp.iconVariant}
                    itemCount={`${grp.conditions.length} Conditions`}
                    isExpanded={isExpanded}
                    onToggle={() => setOpenConditionGroupId((prev) => (prev === grp.id ? null : grp.id))}
                    variant="card"
                    toggleStyle="pill"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
                      {grp.conditions.map((item, cIdx) => (
                        <div
                          key={cIdx}
                          className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold font-heading text-navy mb-2 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              <span>{item.title}</span>
                            </h4>
                            <p className="text-xs text-text-secondary leading-relaxed mb-3">
                              {item.description}
                            </p>
                          </div>
                          <div className="p-2.5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs">
                            <strong className="text-amber-900 font-bold block mb-0.5">Clinical Action:</strong>
                            <span className="text-amber-800 font-medium">{item.focus}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ExpandableGroup>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Warning Signs Checklist — Grouped Accordion */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md mb-16">
            <div className="max-w-3xl mb-6 sm:mb-8">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Diagnostic Triggers</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Signs You Should Have Your Bone Health Evaluated
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                If you or an elder in your family experiences any of these symptoms, a structured metabolic bone assessment is warranted:
              </p>
            </div>

            <div className="space-y-3.5">
              {warningSignsGroups.map((grp) => {
                const isExpanded = openSignsGroupId === grp.id;

                return (
                  <ExpandableGroup
                    key={grp.id}
                    id={grp.id}
                    title={grp.title}
                    subtitle={grp.subtitle}
                    badge={grp.badge}
                    icon={grp.icon}
                    iconVariant={grp.iconVariant}
                    itemCount={`${grp.signs.length} Signs`}
                    isExpanded={isExpanded}
                    onToggle={() => setOpenSignsGroupId((prev) => (prev === grp.id ? null : grp.id))}
                    variant="subtle"
                    toggleStyle="pill"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {grp.signs.map((sign, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-slate-800 leading-snug">{sign}</span>
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
                Bone & Mineral Health Questions
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
                  Concerned About Bone Thinning or Calcium Reports?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                  Book an evidence-based metabolic bone consultation with Dr. Navya Sruthi Mandapati, DM (Endocrinology) — University Topper, in Vizianagaram.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={openModal}
                    className="px-7 py-3 bg-white text-slate-900 hover:bg-teal-50 font-bold rounded-full shadow-card transition-all text-xs sm:text-sm active:scale-95 cursor-pointer"
                  >
                    Schedule Bone Assessment
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

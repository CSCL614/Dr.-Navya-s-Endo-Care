"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Brain, AlertCircle, CalendarHeart, ChevronDown, Phone, HeartPulse, Activity, Zap, MessageCircle, Droplets, ShieldAlert, LucideIcon 
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandableGroup } from "@/components/ui/ExpandableGroup";

export default function PituitaryAdrenalCarePage() {
  const { openModal } = useAppointment();
  const [openGlandGroupId, setOpenGlandGroupId] = useState<string | null>("pituitary-gland");
  const [openBpGroupId, setOpenBpGroupId] = useState<string | null>("aldosterone-bp");
  const [openSignsGroupId, setOpenSignsGroupId] = useState<string | null>("bp-mineral-signs");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const glandGroups = [
    {
      id: "pituitary-gland",
      title: "Pituitary Gland, Prolactin & Master Fluid Balance",
      subtitle: "Prolactinoma, Non-Surgical Medical Therapy, Pituitary Adenomas & Diabetes Insipidus",
      icon: Brain,
      iconVariant: "indigo" as const,
      badge: "Master Gland",
      conditions: [
        {
          title: "Prolactinoma & Hyperprolactinemia",
          description: "Elevated prolactin from a benign pituitary microadenoma or medication side effect. Causes milky breast discharge (galactorrhea), missed menstrual cycles, and infertility in women, or low testosterone and libido in men.",
          focus: "Highly responsive to targeted medical therapy with dopamine agonists without requiring surgery."
        },
        {
          title: "Pituitary Adenomas & Hypopituitarism",
          description: "Benign tumors of the master pituitary gland causing mass effects (headaches, peripheral vision loss) or deficiency of one or more pituitary hormones (TSH, ACTH, GH, LH/FSH).",
          focus: "High-resolution pituitary MRI correlation, visual field testing, and multi-hormone replacement."
        },
        {
          title: "Severe Electrolyte & Fluid Imbalances",
          description: "Recurrent low sodium (hyponatremia) caused by SIADH or adrenal crisis, and Diabetes Insipidus (extreme thirst and passing large volumes of dilute urine due to vasopressin deficiency).",
          focus: "Precise water-deprivation testing, plasma osmolality evaluation, and desmopressin titration."
        }
      ]
    },
    {
      id: "adrenal-gland",
      title: "Adrenal Glands, Cortisol & Stress System Care",
      subtitle: "Adrenal Insufficiency (Addison's), Cushing's Syndrome & Adrenal Incidentalomas",
      icon: ShieldAlert,
      iconVariant: "rose" as const,
      badge: "Adrenal Cortex",
      conditions: [
        {
          title: "Adrenal Insufficiency (Addison’s Disease)",
          description: "Inadequate production of cortisol and aldosterone by the adrenal cortex. Presents with severe chronic exhaustion, unintended weight loss, low blood pressure, skin darkening (hyperpigmentation), and salt cravings.",
          focus: "Life-preserving physiological hormone replacement, emergency steroid education, and sick-day rules."
        },
        {
          title: "Cushing’s Syndrome",
          description: "Overproduction of cortisol due to a pituitary adenoma (Cushing's disease), adrenal tumor, or prolonged oral/injected steroid medications. Characterized by rounded 'moon face', central abdominal obesity, buffalo hump, and purple skin striae.",
          focus: "Dexamethasone suppression testing, 24-hour urinary cortisol, and definitive hormonal balancing."
        },
        {
          title: "Adrenal Incidentalomas",
          description: "Unexpected masses discovered on the adrenal glands during routine abdominal scans for unrelated issues. Requires biochemical screening to determine if the tumor is hormonally active.",
          focus: "Hormonal hypersecretion profiling and imaging phenotype risk assessment."
        }
      ]
    }
  ];

  const hormonalBpGroups = [
    {
      id: "aldosterone-bp",
      title: "Curable Endocrine BP & Aldosterone Disorders",
      subtitle: "Primary Aldosteronism (Conn's), Low Potassium & Mineralocorticoid Excess",
      icon: Zap,
      iconVariant: "teal" as const,
      badge: "Secondary BP",
      conditions: [
        {
          title: "Primary Hyperaldosteronism (Conn’s Syndrome)",
          description: "The most common curable endocrine cause of high blood pressure, where adrenal glands produce excess aldosterone, retaining salt and dumping potassium.",
          trigger: "Screening indicated in young-onset hypertension, resistant BP, or low blood potassium."
        },
        {
          title: "Renal Vascular & Endocrine BP",
          description: "Co-occurring endocrine hypertension with renal artery fibromuscular dysplasia or secondary hyperreninism.",
          trigger: "Comprehensive renin-aldosterone ratio (ARR) and renal Doppler imaging."
        }
      ]
    },
    {
      id: "adrenalin-cortisol-bp",
      title: "Pheochromocytoma & Cortisol-Driven Hypertension",
      subtitle: "Adrenaline Surges, Paroxysmal Palpitations & Cushingoid Fluid Retention",
      icon: HeartPulse,
      iconVariant: "amber" as const,
      badge: "Catecholamines",
      conditions: [
        {
          title: "Pheochromocytoma & Paraganglioma",
          description: "Rare catecholamine-secreting tumors of the adrenal medulla causing volatile surges of adrenaline. Presents with paroxysmal palpitations, severe headache, and profuse sweating.",
          trigger: "Plasma or 24-hour urinary fractionated metanephrines testing."
        },
        {
          title: "Cushingoid & Glucocorticoid Hypertension",
          description: "High blood pressure driven by cortisol-induced fluid retention and vascular sensitivity to vasoconstrictors.",
          trigger: "Screening indicated in central weight gain, thin skin, and easy bruising."
        }
      ]
    }
  ];

  const warningSignsGroups = [
    {
      id: "bp-mineral-signs",
      title: "Blood Pressure & Mineral Warning Signs",
      subtitle: "Early-onset hypertension, refractory numbers and low potassium",
      icon: Zap,
      iconVariant: "teal" as const,
      badge: "BP Flags",
      signs: [
        "High blood pressure detected before age 35 to 40",
        "Blood pressure requiring 3 or more medications to stay under control (resistant hypertension)",
        "Unexplained low potassium levels in blood tests (hypokalemia), with muscle cramps or weakness",
        "Episodes of rapid pounding heartbeat, severe headache, and sudden sweating episodes"
      ]
    },
    {
      id: "pituitary-adrenal-signs",
      title: "Pituitary & Adrenal Warning Signs",
      subtitle: "Glandular exhaustion, breast discharge and thirst irregularities",
      icon: Brain,
      iconVariant: "indigo" as const,
      badge: "Gland Flags",
      signs: [
        "Milky discharge from breasts (galactorrhea) or irregular periods with high prolactin",
        "Profound exhaustion, dizziness upon standing, and darkening of the gums, knuckles, or scars",
        "Rapid central weight gain, purple stretch marks on the abdomen, and rounded face",
        "Extreme, unquenchable thirst and waking multiple times a night to urinate copious amounts"
      ]
    }
  ];

  const faqs = [
    {
      q: "When should high blood pressure be investigated for a hormonal root cause?",
      a: "Endocrine hypertension should be suspected if high blood pressure develops at an unusually young age (under 35–40), if BP remains uncontrolled despite taking three different antihypertensive medications (one of which is a diuretic), if BP is accompanied by low blood potassium, or if you experience paroxysmal surges of palpitations, headache, and sweating. Identifying an endocrine cause like Primary Aldosteronism offers the potential for targeted cure or dramatic reduction in medicines."
    },
    {
      q: "What is prolactin, and why does high prolactin cause discharge or cycle stoppage?",
      a: "Prolactin is the hormone produced by the pituitary gland responsible for milk production after childbirth. When non-pregnant women (or men) develop elevated prolactin—often from a benign pituitary microadenoma or medications—it stimulates breast tissue (causing galactorrhea) and suppresses the pituitary signals (LH and FSH) needed for regular ovulation. In men, it causes low testosterone and erectile dysfunction. It is highly treatable with simple oral medicines."
    },
    {
      q: "Why is abrupt stoppage of steroid medications so dangerous for the adrenal glands?",
      a: "When high doses of oral, injectable, or topical steroids (such as dexamethasone or prednisolone) are taken for prolonged periods, the brain signals the body's natural adrenal glands to stop making cortisol. If steroids are suddenly stopped rather than gradually tapered, the dormant adrenals cannot produce cortisol immediately, leading to a life-threatening adrenal crisis with severe vomiting, low blood pressure, and collapse."
    },
    {
      q: "What causes unexplained low potassium (hypokalemia) in routine health checkups?",
      a: "Low potassium can occur from diuretic water pills, but when unexplained, it is a hallmark clue for endocrine disorders—particularly Primary Hyperaldosteronism (where excess aldosterone flushes potassium into urine) or Cushing's syndrome. An Endocrinologist measures aldosterone and renin under specific resting conditions to identify the exact cause."
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
              Advanced Neuroendocrine & Glandular Care
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-4 leading-tight">
              Pituitary, Adrenal & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Hormonal BP Care</span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-teal-800 mb-6">
              పిట్యూటరీ & అడ్రినల్ సమస్యలు, హార్మోనల్ బీపీ — ఎండోక్రైన్ స్పెషాలిటీ కేర్
            </p>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              The pituitary and adrenal glands regulate the master circuits of the human body: stress response, cortisol, water balance, and blood pressure. We provide superspeciality diagnostic evaluation for prolactinomas, Cushing’s, Addison’s, and curable endocrine hypertension in Vizianagaram.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base flex items-center gap-2 cursor-pointer"
              >
                <CalendarHeart className="w-5 h-5" />
                Book Pituitary & Adrenal Evaluation
              </button>
              <a
                href="#hormonal-bp"
                className="px-8 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-full border border-slate-200 transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-primary" />
                Hormonal BP Screening
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Master Glands Banner */}
      <section className="py-10 bg-teal-50/60 border-b border-teal-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">Master Regulation</span>
              <h3 className="text-2xl font-bold font-heading text-slate-800">
                The Hormonal Orchestrators
              </h3>
            </div>
            <div className="md:col-span-2 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-2">
              <p>
                The pituitary directs thyroid, adrenal, growth, and reproductive hormones, while the adrenals govern cortisol, salt, and blood pressure. Because signs can be subtle, structured endocrine testing reveals the exact physiological origin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pituitary & Adrenal Conditions - Grouped Accordion */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Pituitary & Adrenal Condition Groups
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Expert diagnostic testing and hormone management protocols for master endocrine gland diseases. Tap any group to view details.
              </p>
            </ScrollReveal>
          </div>

          {/* Grouped Accordions */}
          <div className="space-y-4 mb-16">
            {glandGroups.map((grp, idx) => {
              const isExpanded = openGlandGroupId === grp.id;

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
                    onToggle={() => setOpenGlandGroupId((prev) => (prev === grp.id ? null : grp.id))}
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
                          <div className="p-2.5 bg-indigo-50/70 rounded-xl border border-indigo-200/80 text-xs">
                            <strong className="text-navy font-bold block mb-0.5">Clinical Protocol:</strong>
                            <span className="text-primary font-medium">{item.focus}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ExpandableGroup>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Hormonal BP Section */}
          <div id="hormonal-bp" className="scroll-mt-28 mb-16">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-teal-500/30 shadow-md">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 py-1 px-3 bg-teal-50 border border-teal-200 text-teal-800 font-bold rounded-full text-xs uppercase tracking-wider mb-3">
                    <Zap className="w-3.5 h-3.5 text-primary" /> Secondary Hypertension
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-800 mb-3">
                    Hormonal Blood Pressure & Complex Endocrine Conditions
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    Not all high blood pressure is essential hypertension. Between 5% to 15% of all hypertension—and up to 20% of resistant cases—is caused by an underlying hormonal condition. Grouped categories below:
                  </p>
                </div>

                <div className="space-y-4">
                  {hormonalBpGroups.map((grp) => {
                    const isExpanded = openBpGroupId === grp.id;

                    return (
                      <ExpandableGroup
                        key={grp.id}
                        id={grp.id}
                        title={grp.title}
                        subtitle={grp.subtitle}
                        badge={grp.badge}
                        icon={grp.icon}
                        iconVariant={grp.iconVariant}
                        itemCount={`${grp.conditions.length} Conditions`}
                        isExpanded={isExpanded}
                        onToggle={() => setOpenBpGroupId((prev) => (prev === grp.id ? null : grp.id))}
                        variant="subtle"
                        toggleStyle="pill"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                          {grp.conditions.map((item, bIdx) => (
                            <div key={bIdx} className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                              <h5 className="text-xs sm:text-sm font-bold text-navy mb-1.5 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                <span>{item.title}</span>
                              </h5>
                              <p className="text-xs text-text-secondary leading-relaxed mb-2.5">
                                {item.description}
                              </p>
                              <div className="p-2 bg-teal-50 rounded-lg border border-teal-200 text-[11px]">
                                <strong className="text-navy block mb-0.5">Evaluation & Trigger:</strong>
                                <span className="text-primary font-medium">{item.trigger}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ExpandableGroup>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Warning Signs Checklist — Grouped Accordion */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md mb-16">
            <div className="max-w-3xl mb-6 sm:mb-8">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">When to Check</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Signs That Warrant Pituitary, Adrenal or Endocrine BP Evaluation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                If you experience combinations of the following signs, an endocrine workup provides clarity:
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
                Frequently Asked Pituitary, Adrenal & BP Questions
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
                  Consult for Master Gland & Resistant BP Evaluation
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                  Book a detailed, evidence-based review with Dr. Navya Sruthi Mandapati, DM (Endocrinology) — University Topper, in Vizianagaram.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={openModal}
                    className="px-7 py-3 bg-white text-slate-900 hover:bg-teal-50 font-bold rounded-full shadow-card transition-all text-xs sm:text-sm active:scale-95 cursor-pointer"
                  >
                    Schedule Consultation
                  </button>
                  <Link
                    href="/contact"
                    className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all text-xs sm:text-sm"
                  >
                    Clinic Address & Directions
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

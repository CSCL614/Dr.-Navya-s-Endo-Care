"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Brain, AlertCircle, CalendarHeart, ChevronDown, Phone, HeartPulse, Activity, Zap, MessageCircle, Droplets, ShieldAlert, LucideIcon
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

export default function PituitaryAdrenalCarePage() {
  const { openModal } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pituitaryAdrenalConditions = [
    {
      title: "Prolactinoma & Hyperprolactinemia",
      description: "Elevated prolactin from a benign pituitary microadenoma or medication side effect. Causes milky breast discharge (galactorrhea), missed menstrual cycles, and infertility in women, or low testosterone and libido in men.",
      focus: "Highly responsive to targeted medical therapy with dopamine agonists without requiring surgery."
    },
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
      title: "Pituitary Adenomas & Hypopituitarism",
      description: "Benign tumors of the master pituitary gland causing mass effects (headaches, peripheral vision loss) or deficiency of one or more pituitary hormones (TSH, ACTH, GH, LH/FSH).",
      focus: "High-resolution pituitary MRI correlation, visual field testing, and multi-hormone replacement."
    },
    {
      title: "Severe Electrolyte & Fluid Imbalances",
      description: "Recurrent low sodium (hyponatremia) caused by SIADH or adrenal crisis, and Diabetes Insipidus (extreme thirst and passing large volumes of dilute urine due to vasopressin deficiency).",
      focus: "Precise water-deprivation testing, plasma osmolality evaluation, and desmopressin titration."
    },
    {
      title: "Adrenal Incidentalomas",
      description: "Unexpected masses discovered on the adrenal glands during routine abdominal scans for unrelated issues. Requires biochemical screening to determine if the tumor is hormonally active.",
      focus: "Hormonal hypersecretion profiling and imaging phenotype risk assessment."
    }
  ];

  const hormonalBpConditions = [
    {
      title: "Primary Hyperaldosteronism (Conn’s Syndrome)",
      description: "The most common curable endocrine cause of high blood pressure, where adrenal glands produce excess aldosterone, retaining salt and dumping potassium.",
      trigger: "Screening indicated in young-onset hypertension, resistant BP, or low blood potassium."
    },
    {
      title: "Pheochromocytoma & Paraganglioma",
      description: "Rare catecholamine-secreting tumors of the adrenal medulla causing volatile surges of adrenaline. Presents with paroxysmal palpitations, severe headache, and profuse sweating.",
      trigger: "Plasma or 24-hour urinary fractionated metanephrines testing."
    },
    {
      title: "Cushingoid & Glucocorticoid Hypertension",
      description: "High blood pressure driven by cortisol-induced fluid retention and vascular sensitivity to vasoconstrictors.",
      trigger: "Screening indicated in central weight gain, thin skin, and easy bruising."
    },
    {
      title: "Renal Vascular & Endocrine BP",
      description: "Co-occurring endocrine hypertension with renal artery fibromuscular dysplasia or secondary hyperreninism.",
      trigger: "Comprehensive renin-aldosterone ratio (ARR) and renal Doppler imaging."
    }
  ];

  const warningSigns = [
    "High blood pressure detected before age 35 to 40",
    "Blood pressure requiring 3 or more medications to stay under control (resistant hypertension)",
    "Unexplained low potassium levels in blood tests (hypokalemia), with muscle cramps or weakness",
    "Episodes of rapid pounding heartbeat, severe headache, and sudden sweating episodes",
    "Milky discharge from breasts (galactorrhea) or irregular periods with high prolactin",
    "Profound exhaustion, dizziness upon standing, and darkening of the gums, knuckles, or scars",
    "Rapid central weight gain, purple stretch marks on the abdomen, and rounded face",
    "Extreme, unquenchable thirst and waking multiple times a night to urinate copious amounts"
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
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <CalendarHeart className="w-5 h-5" />
                Book Endocrine Consultation
              </button>
              <a
                href="#hormonal-bp"
                className="px-8 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-full border border-slate-200 transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-teal-600" />
                Hormonal High Blood Pressure
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-12 bg-teal-50/60 border-b border-teal-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">Master Control Axis</span>
              <h3 className="text-2xl font-bold font-heading text-slate-800">
                Precision in Complex Endocrine Diagnostics
              </h3>
            </div>
            <div className="md:col-span-2 text-slate-700 text-sm sm:text-base leading-relaxed space-y-2">
              <p>
                Glandular disorders often present with vague, overlapping symptoms—unrelenting exhaustion, mood shifts, sodium fluctuations, or difficult-to-control blood pressure. Through dynamic hormonal tests and targeted imaging, an Endocrinologist uncovers the true source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pituitary & Adrenal Conditions Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">
                Pituitary & Adrenal Disorders Managed
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Expert diagnostic testing and hormone management protocols for master endocrine gland diseases.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {pituitaryAdrenalConditions.map((item, index) => {
              const pitIcons: LucideIcon[] = [Brain, ShieldAlert, Activity, Sparkles, Droplets, HeartPulse];
              const pitVariants: IconBadgeVariant[] = ["indigo", "rose", "amber", "teal", "sky", "rose"];
              const PitIcon = pitIcons[index % pitIcons.length];
              const pitVariant = pitVariants[index % pitVariants.length];

              return (
                <ScrollReveal key={index} delay={index * 0.08} direction="up">
                  <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
                    <div className="mb-4">
                      <CenterIconBadge icon={PitIcon} variant={pitVariant} size="md" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-800 mb-2.5 group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                      {item.description}
                    </p>
                    <div className="pt-3.5 border-t border-[#E3EBF0] text-xs font-medium text-teal-700 w-full text-left">
                      <strong className="text-slate-700">Protocol: </strong>{item.focus}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Section: Hormonal Blood Pressure (Anchor #hormonal-bp) */}
          <div id="hormonal-bp" className="scroll-mt-28 mb-20">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-teal-500/30 shadow-lg">
                <div className="max-w-3xl mb-10">
                  <div className="inline-flex items-center gap-2 py-1 px-3 bg-teal-50 border border-teal-200 text-teal-800 font-bold rounded-full text-xs uppercase tracking-wider mb-3">
                    <Zap className="w-3.5 h-3.5 text-primary" /> Secondary Hypertension
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-800 mb-4">
                    Hormonal Blood Pressure & Complex Endocrine Conditions
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Not all high blood pressure is essential hypertension. Between 5% to 15% of all hypertension—and up to 20% of resistant cases—is caused by an underlying hormonal condition. Identifying the cause allows for targeted medication, and in many cases, a complete cure.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {hormonalBpConditions.map((bp, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      <h4 className="text-base font-bold font-heading text-slate-800 mb-2">{bp.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">{bp.description}</p>
                      <div className="text-xs font-semibold text-teal-700">
                        <span className="text-slate-700">Evaluation: </span>{bp.trigger}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-teal-50/70 rounded-2xl p-5 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs sm:text-sm text-teal-900 font-medium">
                    Are you on multiple BP tablets or diagnosed with hypertension before age 40? An endocrine evaluation could uncover the root cause.
                  </div>
                  <button
                    onClick={openModal}
                    className="shrink-0 px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs sm:text-sm shadow-soft transition-all"
                  >
                    Book BP Evaluation
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Warning Signs Checklist */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-md mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">When Symptoms Don't Fit</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Connecting the Dots: Signs of Master Gland Disruption
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When diverse symptoms do not seem to fit together, an endocrine evaluation synthesizes the clinical clues:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {warningSigns.map((sign, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Educational FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Patient Education</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                Pituitary & Adrenal Questions
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                ఆరోగ్యం గురించి తెలుసుకోవడం చికిత్సలో మొదటి అడుగు.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-slate-800 text-sm sm:text-base hover:text-primary transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-gradient-to-r from-primary to-teal-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
              Specialist Endocrine Care for Complex Cases
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Dr. Navya Sruthi Mandapati, DM (Endocrinology) — University Topper, offers dedicated superspeciality care with unhurried listening and meticulous diagnostic testing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-white text-primary hover:bg-slate-50 font-bold rounded-full shadow-md transition-all text-sm sm:text-base"
              >
                Schedule Consultation
              </button>
              <a
                href="tel:8464070196"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                Call 8464070196
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: 8464070196
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all text-sm sm:text-base"
              >
                Clinic Address
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

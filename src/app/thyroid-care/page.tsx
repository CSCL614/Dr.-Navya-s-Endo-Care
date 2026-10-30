"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  ActivitySquare, ShieldAlert, Sparkles, CheckCircle2, ArrowRight, 
  Phone, MessageCircle, CalendarHeart, HelpCircle, ChevronDown, 
  Baby, Search, AlertCircle, HeartPulse, Activity, ShieldCheck, LucideIcon 
} from "lucide-react";
import Link from "next/link";
import { useAppointment } from "@/context/AppointmentContext";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandableGroup } from "@/components/ui/ExpandableGroup";

export default function ThyroidCarePage() {
  const { openModal } = useAppointment();
  const [openConditionGroup, setOpenConditionGroup] = useState<string | null>("hypo-hashimoto");
  const [openSymptomGroup, setOpenSymptomGroup] = useState<string | null>("hypo-signs");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const conditionGroups = [
    {
      id: "hypo-hashimoto",
      title: "Hypothyroidism & Autoimmune Hashimoto's",
      subtitle: "Underactive Thyroid, Anti-TPO Antibodies, Fatigue & Weight Metabolism",
      icon: ActivitySquare,
      iconVariant: "sky" as const,
      badge: "Underactive",
      conditions: [
        {
          title: "Primary Hypothyroidism",
          description: "When the thyroid produces insufficient hormones, causing metabolism to slow down. Characterized by persistent fatigue, unexplained weight gain, dry skin, constipation, and cold intolerance.",
          focus: "Personalized levothyroxine dosage titration based on weight, age, and cardiac status."
        },
        {
          title: "Hashimoto's Autoimmune Thyroiditis",
          description: "The most common cause of hypothyroidism where the body's immune system attacks thyroid tissue, confirmed via elevated Anti-TPO antibodies.",
          focus: "Long-term monitoring to preserve glandular function and prevent sudden metabolic swings."
        }
      ]
    },
    {
      id: "hyper-nodules",
      title: "Hyperthyroidism, Graves' & Thyroid Nodules",
      subtitle: "Overactive Gland, Palpitations, Weight Loss, Goitre & TI-RADS Evaluation",
      icon: ShieldAlert,
      iconVariant: "amber" as const,
      badge: "Overactive & Structural",
      conditions: [
        {
          title: "Hyperthyroidism & Graves' Disease",
          description: "An overactive thyroid gland producing excess hormones, leading to rapid heart rate, tremors, unintended weight loss, heat intolerance, anxiety, and bulging eyes (Graves' orbitopathy).",
          focus: "Careful medical therapy with anti-thyroid drugs, beta-blockers, and definitive care planning."
        },
        {
          title: "Thyroid Nodules & Goitre",
          description: "Lumps or swelling in the thyroid gland. While the vast majority are benign, accurate endocrine workup determines if ultrasound imaging or FNAC (biopsy) is needed.",
          focus: "High-resolution ultrasound evaluation, TI-RADS risk stratification, and non-surgical surveillance."
        }
      ]
    },
    {
      id: "pregnancy-subclinical",
      title: "Pregnancy, Pre-Conception & Subclinical Thyroid Health",
      subtitle: "Strict Trimester-Specific Targets, Fetal Neurocognitive Safety & Borderline TSH",
      icon: Baby,
      iconVariant: "rose" as const,
      badge: "Maternal Health",
      conditions: [
        {
          title: "Thyroid in Pregnancy & Pre-Conception",
          description: "Thyroid hormone is critical for fetal brain and neurocognitive development during early gestation. TSH levels must be strictly monitored within pregnancy-specific target ranges.",
          focus: "Pre-conceptional optimization, trimester-specific TSH monitoring, and immediate dose adjustments."
        },
        {
          title: "Subclinical Thyroid Disorders",
          description: "Mild elevations or depressions in TSH with normal free T4 levels. Requires expert endocrine judgment to decide when treatment is beneficial versus watchful waiting.",
          focus: "Avoiding overtreatment while addressing subtle cardiovascular, fertility, or fatigue symptoms."
        }
      ]
    }
  ];

  const symptomGroups = [
    {
      id: "hypo-signs",
      title: "Underactive (Hypo) Indicators",
      subtitle: "Metabolism slowdown signs",
      badge: "Hypothyroidism",
      icon: ActivitySquare,
      iconVariant: "sky" as const,
      symptoms: [
        "Persistent fatigue and low energy despite adequate sleep",
        "Unexplained weight gain or inability to shed weight despite normal diet",
        "Feeling constantly cold when others are comfortable",
        "Dry coarse skin, brittle nails, and thinning hair"
      ]
    },
    {
      id: "hyper-signs",
      title: "Overactive (Hyper) Indicators",
      subtitle: "Hyper-metabolic acceleration signs",
      badge: "Hyperthyroidism",
      icon: HeartPulse,
      iconVariant: "amber" as const,
      symptoms: [
        "Rapid or pounding heartbeat (palpitations) at rest",
        "Unintentional sudden weight loss despite increased appetite",
        "Hand tremors, nervous irritability, and sleep trouble"
      ]
    },
    {
      id: "hormonal-structural",
      title: "Structural & Hormonal Indicators",
      subtitle: "Neck enlargement, cycles & fertility",
      badge: "Reproductive & Gland",
      icon: ShieldCheck,
      iconVariant: "rose" as const,
      symptoms: [
        "Visible swelling, lump, or fullness at the base of the neck (Goitre)",
        "Irregular, heavy, or missed menstrual cycles",
        "Difficulty getting pregnant or history of recurrent miscarriages"
      ]
    }
  ];

  const faqs = [
    {
      q: "Why do I need to take thyroid medicine strictly on an empty stomach?",
      a: "Levothyroxine requires an acidic gastric environment for complete absorption. Taking it with morning tea, coffee, milk, breakfast, or calcium and iron supplements significantly impairs absorption, leading to fluctuating TSH levels even on high doses. Always take it with plain water at least 30 to 45 minutes before eating or drinking anything else."
    },
    {
      q: "My TSH reports are normal now. Can I stop taking my thyroid tablets?",
      a: "No. In most cases of primary hypothyroidism (such as Hashimoto's), the normal TSH report is evidence that the prescribed replacement dose is working effectively. Stopping the tablet means the thyroid gland cannot produce enough hormone on its own, and symptoms and elevated TSH will recur within weeks. Dosage adjustments should only be made under medical supervision."
    },
    {
      q: "How does thyroid health affect pregnancy and fertility?",
      a: "Thyroid hormone is crucial for regular ovulation. In pregnancy, the developing baby depends entirely on maternal thyroid hormone for the first 12 to 14 weeks for central nervous system and brain development. Pregnancy TSH cut-offs are stricter than general non-pregnant ranges, and doses usually need to be increased promptly upon conceiving."
    },
    {
      q: "Do all thyroid nodules mean cancer or require surgery?",
      a: "Not at all. Over 90% of thyroid nodules are completely benign (non-cancerous). An Endocrinologist evaluates the nodule using high-resolution ultrasound features (TI-RADS criteria) and size. Only nodules meeting specific suspicious criteria require a quick, simple Fine Needle Aspiration Cytology (FNAC). Most benign nodules simply require periodic monitoring without surgery."
    }
  ];

  return (
    <div className="overflow-hidden bg-white min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 bg-pale-blue/30 border-b border-border/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pale-blue/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal direction="up">
            <div className="section-tag mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Endocrine Superspeciality Care</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-navy mb-4 leading-tight tracking-tight">
              Comprehensive <span className="gradient-text">Thyroid Care</span>
            </h1>

            <div className="inline-block bg-pale-blue/70 border border-primary/20 px-5 py-2 rounded-2xl mb-6 shadow-2xs">
              <p className="text-sm sm:text-base font-bold text-primary font-sans">
                థైరాయిడ్ కేర్ — సరైన నిర్ధారణ, శాస్త్రీయ చికిత్స మరియు జీవనశైలి మార్గదర్శనం
              </p>
            </div>
            
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
              The thyroid is the metabolic speedometer of the human body. From underactive and overactive thyroid to Hashimoto’s, nodules, and pregnancy thyroid management, we provide precise diagnostic evaluation and personalized hormonal balancing in Vizianagaram.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="btn-primary group cursor-pointer"
              >
                <CalendarHeart className="w-5 h-5" />
                <span>Book Thyroid Consultation</span>
              </button>
              <a
                href="tel:8464070196"
                className="btn-secondary"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call 8464070196</span>
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-card hover:shadow-card-hover transition-all text-sm sm:text-base flex items-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 8464070196</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Callout: Why an Endocrinologist */}
      <section className="py-10 bg-white border-b border-border/80">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Expert Perspective</span>
              <h3 className="text-2xl font-bold font-heading text-navy">
                Beyond Just a TSH Number
              </h3>
            </div>
            <div className="md:col-span-2 text-text-secondary text-sm sm:text-base leading-relaxed space-y-2">
              <p>
                Treating thyroid disease is more than handing out a standard dose of thyroxine. We evaluate antibody levels (Anti-TPO), metabolic factors, body weight, pregnancy plans, and medication absorption patterns to find the exact therapeutic balance for your body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated - Grouped Accordion */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <ScrollReveal direction="up">
              <div className="section-tag mb-3">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Specialized Conditions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy mb-3 tracking-tight">
                Thyroid Conditions <span className="gradient-text">We Manage</span>
              </h2>
              <p className="text-text-secondary text-xs sm:text-sm md:text-base">
                Structured into 3 clinical groups covering adult, maternal, and structural thyroid health. Tap any group to view clinical protocols.
              </p>
            </ScrollReveal>
          </div>

          {/* Grouped Conditions */}
          <div className="space-y-4 mb-16">
            {conditionGroups.map((grp, idx) => {
              const isExpanded = openConditionGroup === grp.id;

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
                    onToggle={() => setOpenConditionGroup((prev) => (prev === grp.id ? null : grp.id))}
                    variant="card"
                    toggleStyle="pill"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      {grp.conditions.map((item, cIdx) => (
                        <div
                          key={cIdx}
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
                          <div className="p-3 bg-soft-teal/40 rounded-xl border border-primary/20 text-xs">
                            <strong className="text-navy font-bold block mb-0.5">Clinical Approach:</strong>
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

          {/* Symptoms Checklist — Grouped Accordion */}
          <ScrollReveal direction="up">
            <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/80 shadow-card mb-16">
              <div className="max-w-3xl mb-6 sm:mb-8">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Clinical Warning Signs</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy mb-3">
                  Symptoms That Warrant a Thyroid Evaluation
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed">
                  Thyroid disorders can develop gradually. Grouped by clinical symptom category below:
                </p>
              </div>

              <div className="space-y-3.5">
                {symptomGroups.map((grp) => {
                  const isExpanded = openSymptomGroup === grp.id;

                  return (
                    <ExpandableGroup
                      key={grp.id}
                      id={grp.id}
                      title={grp.title}
                      subtitle={grp.subtitle}
                      badge={grp.badge}
                      icon={grp.icon}
                      iconVariant={grp.iconVariant}
                      itemCount={`${grp.symptoms.length} Signs`}
                      isExpanded={isExpanded}
                      onToggle={() => setOpenSymptomGroup((prev) => (prev === grp.id ? null : grp.id))}
                      variant="subtle"
                      toggleStyle="pill"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {grp.symptoms.map((symp, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-navy leading-snug">{symp}</span>
                          </div>
                        ))}
                      </div>
                    </ExpandableGroup>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Educational FAQs */}
          <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Patient Education</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy">
                Frequently Asked Thyroid Questions
              </h3>
              <p className="text-text-muted text-xs sm:text-sm mt-1">
                ఆరోగ్యం గురించి తెలుసుకోవడం చికిత్సలో మొదటి అడుగు.
              </p>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className="glass-card rounded-2xl border border-border/80 overflow-hidden shadow-card transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading font-bold text-navy text-xs sm:text-sm hover:text-primary transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-primary text-white rotate-180" : "bg-pale-blue text-primary"
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
                          <div className="px-4 sm:px-5 pb-5 pt-1 text-text-secondary text-xs sm:text-sm leading-relaxed border-t border-border/60 bg-pale-blue/20">
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
            <div className="bg-navy rounded-3xl p-6 sm:p-10 text-white shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3 text-white">
                  Have Questions About Your Thyroid Reports?
                </h3>
                <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                  Bring your previous reports for an unhurried, evidence-based review with Dr. Navya Sruthi Mandapati, DM (Endocrinology) — University Topper.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={openModal}
                    className="px-7 py-3 bg-white text-navy hover:bg-pale-blue font-bold rounded-full shadow-card hover:shadow-card-hover transition-all text-xs sm:text-sm active:scale-95 cursor-pointer"
                  >
                    Schedule Consultation
                  </button>
                  <Link
                    href="/contact"
                    className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all text-xs sm:text-sm active:scale-95"
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

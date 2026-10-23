"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  ActivitySquare, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Baby, Search, AlertCircle, CalendarHeart, ChevronDown, Phone, HeartPulse, MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";

export default function ThyroidCarePage() {
  const { openModal } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const conditions = [
    {
      title: "Hypothyroidism (Underactive Thyroid)",
      description: "When the thyroid produces insufficient hormones, causing metabolism to slow down. Characterized by persistent fatigue, unexplained weight gain, dry skin, constipation, and cold intolerance.",
      focus: "Personalized levothyroxine dosage titration based on weight, age, and cardiac status."
    },
    {
      title: "Hashimoto's Autoimmune Thyroiditis",
      description: "The most common cause of hypothyroidism where the body's immune system attacks thyroid tissue, confirmed via elevated Anti-TPO antibodies.",
      focus: "Long-term monitoring to preserve glandular function and prevent sudden metabolic swings."
    },
    {
      title: "Hyperthyroidism & Graves' Disease",
      description: "An overactive thyroid gland producing excess hormones, leading to rapid heart rate, tremors, unintended weight loss, heat intolerance, anxiety, and bulging eyes (Graves' orbitopathy).",
      focus: "Careful medical therapy with anti-thyroid drugs, beta-blockers, and definitive care planning."
    },
    {
      title: "Thyroid in Pregnancy & Pre-Conception",
      description: "Thyroid hormone is critical for fetal brain and neurocognitive development during early gestation. TSH levels must be strictly monitored within pregnancy-specific target ranges.",
      focus: "Pre-conceptional optimization, trimester-specific TSH monitoring, and immediate dose adjustments."
    },
    {
      title: "Thyroid Nodules & Goitre",
      description: "Lumps or swelling in the thyroid gland. While the vast majority are benign, accurate endocrine workup determines if ultrasound imaging or FNAC (biopsy) is needed.",
      focus: "High-resolution ultrasound evaluation, TI-RADS risk stratification, and non-surgical surveillance."
    },
    {
      title: "Subclinical Thyroid Disorders",
      description: "Mild elevations or depressions in TSH with normal free T4 levels. Requires expert endocrine judgment to decide when treatment is beneficial versus watchful waiting.",
      focus: "Avoiding overtreatment while addressing subtle cardiovascular, fertility, or fatigue symptoms."
    }
  ];

  const commonSymptoms = [
    { symptom: "Persistent fatigue and low energy", type: "Underactive (Hypo)" },
    { symptom: "Unexplained weight gain despite normal diet", type: "Underactive (Hypo)" },
    { symptom: "Feeling constantly cold when others are comfortable", type: "Underactive (Hypo)" },
    { symptom: "Dry coarse skin and thinning hair", type: "Underactive (Hypo)" },
    { symptom: "Irregular, heavy, or missed menstrual cycles", type: "Hormonal Disruption" },
    { symptom: "Rapid or pounding heartbeat (palpitations)", type: "Overactive (Hyper)" },
    { symptom: "Unintentional sudden weight loss", type: "Overactive (Hyper)" },
    { symptom: "Hand tremors, nervous irritability, and sleep trouble", type: "Overactive (Hyper)" },
    { symptom: "Visible swelling or fullness at the base of the neck", type: "Goitre / Nodule" },
    { symptom: "Difficulty getting pregnant or recurrent miscarriages", type: "Fertility Impact" }
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
      <section className="relative pt-16 lg:pt-24 pb-20 bg-pale-blue/30 border-b border-border/80 overflow-hidden">
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
                className="btn-primary group"
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
      <section className="py-12 bg-white border-b border-border/80">
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

      {/* Conditions Treated Grid */}
      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <div className="section-tag mb-4">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Specialized Conditions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-4 tracking-tight">
                Thyroid Conditions <span className="gradient-text">We Manage</span>
              </h2>
              <p className="text-text-secondary text-sm sm:text-base">
                Structured clinical protocols for every category of adult, adolescent, and maternal thyroid health.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
            {conditions.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08} direction="up">
                <div className="glass-card rounded-3xl p-7 border border-border/80 shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 bg-pale-blue rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-2xs">
                    <ActivitySquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-navy mb-2.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="pt-3 border-t border-border/70 text-xs font-medium text-primary">
                    <strong className="text-navy">Approach: </strong>{item.focus}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Symptoms Checklist */}
          <ScrollReveal direction="up">
            <div className="glass-card rounded-3xl p-8 lg:p-12 border border-border/80 shadow-card mb-20">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Clinical Warning Signs</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy mb-3">
                  Symptoms That Warrant a Thyroid Evaluation
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  Thyroid disorders can develop gradually and mimic routine stress or fatigue. If you experience combinations of the following signs, an endocrine test provides definitive clarity:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {commonSymptoms.map((symp, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-pale-blue/30 border border-border/70 hover:border-primary/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-navy">{symp.symptom}</div>
                      <div className="text-[11px] text-primary font-medium">{symp.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Educational FAQs */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Patient Education</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy">
                Frequently Asked Thyroid Questions
              </h3>
              <p className="text-text-muted text-xs sm:text-sm mt-1">
                ఆరోగ్యం గురించి తెలుసుకోవడం చికిత్సలో మొదటి అడుగు.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className="glass-card rounded-2xl border border-border/80 overflow-hidden shadow-card transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-navy text-sm sm:text-base hover:text-primary transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-primary text-white rotate-180" : "bg-pale-blue text-primary"
                      }`}>
                        <ChevronDown className="w-4 h-4" />
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
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-text-secondary text-xs sm:text-sm leading-relaxed border-t border-border/60 bg-pale-blue/20">
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
            <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4 text-white">
                  Have Questions About Your Thyroid Reports?
                </h3>
                <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                  Bring your previous reports for an unhurried, evidence-based review with Dr. Navya Sruthi Mandapati, DM (Endocrinology) — University Topper.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={openModal}
                    className="px-8 py-3.5 bg-white text-navy hover:bg-pale-blue font-bold rounded-full shadow-card hover:shadow-card-hover transition-all text-sm sm:text-base active:scale-95"
                  >
                    Schedule Consultation
                  </button>
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all text-sm sm:text-base active:scale-95"
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

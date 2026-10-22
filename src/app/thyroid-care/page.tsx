"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  ActivitySquare, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Baby, Search, AlertCircle, CalendarHeart, ChevronDown, Phone, HeartPulse, MessageCircle
} from "lucide-react";
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
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200 text-primary font-semibold rounded-full text-xs sm:text-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              Endocrine Superspeciality Care
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-4 leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Thyroid Care</span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-teal-800 mb-6">
              థైరాయిడ్ కేర్ — సరైన నిర్ధారణ, శాస్త్రీయ చికిత్స మరియు జీవనశైలి మార్గదర్శనం
            </p>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              The thyroid is the metabolic speedometer of the human body. From underactive and overactive thyroid to Hashimoto’s, nodules, and pregnancy thyroid management, we provide precise diagnostic evaluation and personalized hormonal balancing in Vizianagaram.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <CalendarHeart className="w-5 h-5" />
                Book Thyroid Consultation
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

      {/* Philosophy Callout: Why an Endocrinologist */}
      <section className="py-12 bg-teal-50/60 border-b border-teal-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">Expert Perspective</span>
              <h3 className="text-2xl font-bold font-heading text-slate-800">
                Beyond Just a TSH Number
              </h3>
            </div>
            <div className="md:col-span-2 text-slate-700 text-sm sm:text-base leading-relaxed space-y-2">
              <p>
                Treating thyroid disease is more than handing out a standard dose of thyroxine. We evaluate antibody levels (Anti-TPO), metabolic factors, body weight, pregnancy plans, and medication absorption patterns to find the exact therapeutic balance for your body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">
                Thyroid Conditions We Manage
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Structured clinical protocols for every category of adult, adolescent, and maternal thyroid health.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {conditions.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08} direction="up">
                <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ActivitySquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-800 mb-2.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs font-medium text-teal-700">
                    <strong className="text-slate-700">Approach: </strong>{item.focus}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Symptoms Checklist */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-md mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Clinical Warning Signs</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Symptoms That Warrant a Thyroid Evaluation
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Thyroid disorders can develop gradually and mimic routine stress or fatigue. If you experience combinations of the following signs, an endocrine test provides definitive clarity:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commonSymptoms.map((symp, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{symp.symptom}</div>
                    <div className="text-[11px] text-teal-700 font-medium">{symp.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Patient Education</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                Frequently Asked Thyroid Questions
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
              Have Questions About Your Thyroid Reports?
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Bring your previous reports for an unhurried, evidence-based review with Dr. Navya Sruthi Mandapati, DM (Endocrinology) — University Topper.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-white text-primary hover:bg-slate-50 font-bold rounded-full shadow-md transition-all text-sm sm:text-base"
              >
                Schedule Consultation
              </button>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all text-sm sm:text-base"
              >
                Clinic Address & Directions
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Bone, AlertCircle, CalendarHeart, ChevronDown, Phone, HeartPulse, Sun, Activity, MessageCircle, ShieldAlert, LucideIcon
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

export default function BoneMineralHealthPage() {
  const { openModal } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const conditions = [
    {
      title: "Osteoporosis & Low Bone Mass (Osteopenia)",
      description: "Progressive thinning of bone microarchitecture leading to heightened fracture risk, particularly of the spine, hip, and wrist. Often silent until a minor stumble results in a painful fracture.",
      focus: "DEXA scan T-score analysis, FRAX risk calculation, and anabolic/anti-resorptive bone therapy."
    },
    {
      title: "Primary Hyperparathyroidism",
      description: "Overactivity of one or more of the four parathyroid glands (often a benign adenoma) causing excessive PTH secretion. This leaches calcium out of bones into the blood.",
      focus: "Localization imaging, medical management of hypercalcemia, and surgical referral when indicated."
    },
    {
      title: "Severe & Resistant Vitamin D Deficiency",
      description: "Widespread among Indian populations due to high melanin shielding UV-B synthesis and indoor work. Severe deficiency causes poor calcium absorption, secondary hyperparathyroidism, and osteomalacia.",
      focus: "Structured therapeutic high-dose replenishment protocols followed by maintenance."
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
    },
    {
      title: "Osteomalacia & Metabolic Bone Disease",
      description: "Defective bone mineralization resulting in soft, painful bones, waddling gait, and severe thigh muscle weakness, distinct from osteoporosis.",
      focus: "Restoring active Vitamin D levels and remineralizing the skeletal matrix."
    }
  ];

  const warningSigns = [
    "Breaking a wrist, hip, or bone from a minor fall from standing height (fragility fracture)",
    "Gradual loss of height (2 inches or more) or development of a stooped posture (kyphosis)",
    "Persistent deep aching bone pain in the lower back, hips, or legs",
    "Muscle weakness making it difficult to stand up from a low chair or climb stairs",
    "History of recurrent kidney stones despite drinking ample water",
    "Blood reports showing elevated calcium (> 10.2 mg/dL) or low calcium (< 8.5 mg/dL)",
    "Tingling, numbness around the lips, or muscle cramps in hands and calves",
    "Early menopause (before age 45) or prolonged use of oral steroid medications"
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
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base flex items-center gap-2"
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

      {/* Silent Disease Warning Banner */}
      <section className="py-12 bg-teal-50/60 border-b border-teal-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">Silent Condition</span>
              <h3 className="text-2xl font-bold font-heading text-slate-800">
                Preventing Fractures Before They Happen
              </h3>
            </div>
            <div className="md:col-span-2 text-slate-700 text-sm sm:text-base leading-relaxed space-y-2">
              <p>
                Osteoporosis does not cause pain until a bone actually breaks. For postmenopausal women, elderly men, and individuals on long-term corticosteroids, routine bone mineral density (DEXA) screening allows us to rebuild bone strength before an injury occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">
                Bone & Mineral Conditions We Treat
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Advanced endocrine evaluation connecting hormonal regulation with lifelong skeletal durability.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {conditions.map((item, index) => {
              const boneIcons: LucideIcon[] = [Bone, Activity, Sun, ShieldAlert, HeartPulse, ShieldCheck];
              const boneVariants: IconBadgeVariant[] = ["amber", "teal", "amber", "rose", "sky", "mint"];
              const BoneIcon = boneIcons[index % boneIcons.length];
              const boneVariant = boneVariants[index % boneVariants.length];

              return (
                <ScrollReveal key={index} delay={index * 0.08} direction="up">
                  <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
                    <div className="mb-4">
                      <CenterIconBadge icon={BoneIcon} variant={boneVariant} size="md" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-800 mb-2.5 group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                      {item.description}
                    </p>
                    <div className="pt-3.5 border-t border-[#E3EBF0] text-xs font-medium text-teal-700 w-full text-left">
                      <strong className="text-slate-700">Action: </strong>{item.focus}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Warning Signs Checklist */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-md mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Diagnostic Triggers</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Signs You Should Have Your Bone Health Evaluated
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                If you or an elder in your family experiences any of these symptoms, a structured metabolic bone assessment is warranted:
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
                Bone & Calcium Questions
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
              Keep Your Bones Strong and Independent for Life
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Consult Dr. Navya Sruthi Mandapati, DM (Endocrinology) — University Topper, for comprehensive bone mineral evaluation, DEXA review, and targeted osteoporosis therapy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-white text-primary hover:bg-slate-50 font-bold rounded-full shadow-md transition-all text-sm sm:text-base"
              >
                Book Bone Consultation
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

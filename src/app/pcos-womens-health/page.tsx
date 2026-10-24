"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Baby, AlertCircle, CalendarHeart, ChevronDown, Phone, HeartPulse, Scale, Activity, MessageCircle, Droplets, LucideIcon
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

export default function PcosWomensHealthPage() {
  const { openModal } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const focusAreas = [
    {
      title: "Polycystic Ovary Syndrome (PCOS)",
      description: "A complex endocrine-metabolic syndrome affecting hormonal balance, ovulation, and insulin sensitivity. We perform thorough phenotypic evaluation based on the Rotterdam diagnostic criteria.",
      action: "Hormone profiling, ultrasound review, and personalized cycle normalization."
    },
    {
      title: "Insulin Resistance & Metabolic Drivers",
      description: "Up to 70-80% of women with PCOS have underlying insulin resistance. Excess circulating insulin signals the ovaries to overproduce male hormones (androgens), preventing regular ovulation and driving weight accumulation.",
      action: "Insulin-sensitizing approaches, fasting glucose evaluation, and visceral fat reduction."
    },
    {
      title: "Hyperandrogenism (Facial Hair & Acne)",
      description: "Elevated androgen levels cause excess hair growth on the chin, chest, or abdomen (hirsutism), stubborn cystic acne, and androgenetic hair thinning.",
      action: "Anti-androgenic medical options, dermatological coordination, and hormone balance."
    },
    {
      title: "Menstrual Irregularities & Oligo-ovulation",
      description: "Cycles spaced further than 35 days apart, skipped periods, or unpredictably heavy bleeding caused by anovulation (absence of regular egg release).",
      action: "Endometrial protection protocols and restoring natural hormonal rhythms."
    },
    {
      title: "Pre-Conception Metabolic Optimization",
      description: "Preparing the body for safe, successful conception. Optimizing maternal metabolic health before pregnancy reduces risks of gestational diabetes, preeclampsia, and early pregnancy complications.",
      action: "Pre-conceptional glucose, thyroid, and weight optimization."
    },
    {
      title: "Perimenopause & Hormonal Transitions",
      description: "Navigating fluctuating estrogen and progesterone levels during the perimenopausal transition—managing hot flushes, mood changes, insomnia, and bone density preservation.",
      action: "Evidence-based hormonal assessment and cardiovascular/bone protection."
    }
  ];

  const symptoms = [
    "Cycles longer than 35 days or fewer than 8 periods a year",
    "Coarse, dark hair growth on chin, upper lip, chest, or abdomen (hirsutism)",
    "Persistent acne resistant to standard skincare creams",
    "Difficulty losing weight despite calorie restriction (weight resistance)",
    "Dark, velvety skin patches on the neck or armpits (acanthosis nigricans)",
    "Hair thinning or widening partition on the scalp",
    "Frequent carbohydrate cravings, mid-afternoon energy crashes, or shakiness",
    "Difficulty conceiving after 6–12 months of unprotected attempts"
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
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base flex items-center gap-2"
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
      <section className="py-12 bg-teal-50/60 border-b border-teal-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">Endocrine Approach</span>
              <h3 className="text-2xl font-bold font-heading text-slate-800">
                Treating the Root, Not Just the Cycle
              </h3>
            </div>
            <div className="md:col-span-2 text-slate-700 text-sm sm:text-base leading-relaxed space-y-2">
              <p>
                Taking birth control pills simply forces a withdrawal bleed; it does not resolve the cellular insulin resistance, ovarian androgen excess, or chronic low-grade inflammation behind PCOS. Our clinic investigates the metabolic root cause to achieve lasting hormonal harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">
                Clinical Focus Areas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Structured clinical management designed around your life stage, reproductive goals, and metabolic wellness.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {focusAreas.map((item, index) => {
              const pcosIcons: LucideIcon[] = [Sparkles, Activity, Droplets, CalendarHeart, Baby, ShieldCheck];
              const pcosVariants: IconBadgeVariant[] = ["rose", "teal", "amber", "rose", "mint", "sky"];
              const PcosIcon = pcosIcons[index % pcosIcons.length];
              const pcosVariant = pcosVariants[index % pcosVariants.length];

              return (
                <ScrollReveal key={index} delay={index * 0.08} direction="up">
                  <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
                    <div className="mb-4">
                      <CenterIconBadge icon={PcosIcon} variant={pcosVariant} size="md" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-800 mb-2.5 group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                      {item.description}
                    </p>
                    <div className="pt-3.5 border-t border-[#E3EBF0] text-xs font-medium text-teal-700 w-full text-left">
                      <strong className="text-slate-700">Plan: </strong>{item.action}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Symptoms Checklist */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-md mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Check Your Symptoms</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Common Signs of PCOS & Hormonal Imbalance
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                PCOS presents differently in each woman—some have weight struggles, while others have lean PCOS. Check if you experience two or more of the following:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {symptoms.map((symp, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{symp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Educational FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Patient Guidance</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                PCOS & Hormonal Health Questions
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
              Break Free from Unexplained Hormonal Frustration
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Dr. Navya Sruthi Mandapati provides compassionate, judgment-free medical counselling and evidence-based endocrine management tailored to you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-white text-primary hover:bg-slate-50 font-bold rounded-full shadow-md transition-all text-sm sm:text-base"
              >
                Book PCOS Consultation
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
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

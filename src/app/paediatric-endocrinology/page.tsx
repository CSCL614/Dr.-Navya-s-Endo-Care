"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Sparkles, CheckCircle2, ArrowRight, CalendarHeart, 
  Clock, ShieldCheck, HeartPulse, ChevronDown, LucideIcon, 
  Baby, Scale, LineChart, Activity, ActivitySquare, AlertCircle, Phone, MessageCircle 
} from "lucide-react";
import Link from "next/link";
import { useAppointment } from "@/context/AppointmentContext";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandableGroup } from "@/components/ui/ExpandableGroup";

export default function PaediatricEndocrinologyPage() {
  const { openModal } = useAppointment();
  const [openServiceGroupId, setOpenServiceGroupId] = useState<string | null>("growth-velocity");
  const [openSignsGroupId, setOpenSignsGroupId] = useState<string | null>("height-velocity-signs");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const serviceGroups = [
    {
      id: "growth-velocity",
      title: "Growth Velocity & Stature Assessment",
      subtitle: "Short Stature, IAP/WHO Growth Charts, Bone Age & Growth Hormone Deficiency",
      icon: LineChart,
      iconVariant: "teal" as const,
      badge: "Linear Growth",
      services: [
        {
          title: "Short Stature & Growth Velocity Tracking",
          description: "Careful plotting on Indian Academy of Pediatrics (IAP) and WHO growth charts to calculate yearly height velocity and compare against target genetic height.",
          highlight: "Differentiating normal constitutional delay from endocrine growth failure."
        },
        {
          title: "Growth Hormone Deficiency (GHD)",
          description: "Specialized endocrine evaluation including bone age X-rays and dynamic growth hormone stimulation testing when growth velocity falls persistently below normal.",
          highlight: "Evidence-based growth hormone therapy monitoring during open growth-plate windows."
        }
      ]
    },
    {
      id: "puberty-timing",
      title: "Pubertal Development & Timing",
      subtitle: "Precocious (Early) Puberty, Delayed Puberty & Hypothalamic-Pituitary Signals",
      icon: Clock,
      iconVariant: "amber" as const,
      badge: "Pubertal Health",
      services: [
        {
          title: "Precocious (Early) Puberty",
          description: "Development of secondary sexual characteristics before age 8 in girls (breast buds) or age 9 in boys (testicular enlargement). Early puberty accelerates bone aging and halts final adult height prematurely.",
          highlight: "Central precocious puberty hormonal therapy to pause pubertal acceleration safely."
        },
        {
          title: "Delayed Puberty Assessment",
          description: "Absence of breast development by age 13 in girls or lack of testicular enlargement by age 14 in boys. Detailed evaluation of pituitary-gonadal signaling.",
          highlight: "Restoring physiological pubertal progression with timely hormonal support."
        }
      ]
    },
    {
      id: "paediatric-glands",
      title: "Paediatric Glands, Juvenile Diabetes & Metabolism",
      subtitle: "Childhood Type 1 Diabetes, Congenital Thyroid, CAH & Juvenile Weight Care",
      icon: Baby,
      iconVariant: "mint" as const,
      badge: "Glands & Metabolism",
      services: [
        {
          title: "Childhood Type 1 Diabetes",
          description: "Compassionate, child-centric diabetes management with multiple daily insulin injection (MDI) education, Continuous Glucose Monitoring (CGM), carbohydrate counting, and school care plans.",
          highlight: "Empowering children and parents to live active, joyful, complication-free lives."
        },
        {
          title: "Congenital & Paediatric Thyroid Disorders",
          description: "Managing congenital hypothyroidism diagnosed at birth to protect brain and intellectual development, as well as juvenile Hashimoto's thyroiditis in school-age children.",
          highlight: "Strict developmental milestone tracking and age-adjusted thyroxine dosing."
        },
        {
          title: "Congenital Adrenal Hyperplasia (CAH)",
          description: "Management of genetic enzyme deficiencies affecting cortisol and aldosterone production, preventing life-threatening adrenal salt-wasting crises.",
          highlight: "Careful steroid dosing to balance growth and prevent virilization."
        },
        {
          title: "Childhood Obesity & Juvenile Metabolic Health",
          description: "Gentle, non-stigmatizing medical and dietary assessment for children gaining rapid weight, screening for early insulin resistance, fatty liver, and lipid changes.",
          highlight: "Family-centred lifestyle guidance rather than restrictive dieting."
        }
      ]
    }
  ];

  const warningSignsGroups = [
    {
      id: "height-velocity-signs",
      title: "Height & Growth Velocity Indicators",
      subtitle: "Slower growth compared to age peers",
      icon: LineChart,
      iconVariant: "teal" as const,
      badge: "Growth Rate",
      signs: [
        "Child is noticeably shorter than peers or class fellows of the same age and gender",
        "Growing less than 4 to 5 centimetres per year after age 4",
        "Clothes and shoe sizes do not change for over a year"
      ]
    },
    {
      id: "puberty-timing-signs",
      title: "Pubertal Timing Indicators",
      subtitle: "Too early or noticeably delayed puberty signs",
      icon: Clock,
      iconVariant: "amber" as const,
      badge: "Pubertal Timing",
      signs: [
        "Breast development or pubic hair appearing in girls before age 8",
        "Testicular enlargement or voice change in boys before age 9",
        "No pubertal signs by age 13 in girls or age 14 in boys"
      ]
    },
    {
      id: "systemic-signs",
      title: "Systemic Endocrine & Blood Sugar Signs",
      subtitle: "Metabolism, hydration and energy flags",
      icon: Baby,
      iconVariant: "rose" as const,
      badge: "Metabolism",
      signs: [
        "Sudden extreme thirst, bedwetting in a previously toilet-trained child, or rapid weight loss",
        "Poor academic focus, constant sluggishness, and dry skin in a growing child"
      ]
    }
  ];

  const faqs = [
    {
      q: "When should parents consult an Endocrinologist for a child's short height?",
      a: "If your child is consistently the shortest in their class, is crossing down percentiles on the growth chart, or is growing less than 4 to 5 cm per year, a paediatric endocrine assessment is strongly recommended. The earlier the evaluation, the greater the window of opportunity, because once the growth plates (epiphyses) fuse at the end of puberty, no medicine can increase height."
    },
    {
      q: "What is bone age, and why is an X-ray of the left hand and wrist taken?",
      a: "Bone age is a radiological measurement of skeletal maturity. An X-ray of the left hand and wrist reveals the degree of growth-plate development compared to chronological age. If bone age is delayed, it suggests remaining growth potential; if bone age is advanced (as in early puberty), it indicates that growth plates may close earlier than normal."
    },
    {
      q: "Can early puberty cause my child to remain short as an adult?",
      a: "Yes. While children undergoing early puberty initially appear taller than their peers due to an early growth spurt, the surge of sex hormones causes the growth plates to fuse prematurely. Consequently, growth stops early, resulting in a final adult height that is significantly shorter than their genetic potential. Timely treatment can pause this process safely."
    },
    {
      q: "Does every child with short height require Growth Hormone injections?",
      a: "No. The vast majority of children with short height have normal variants such as Familial Short Stature (genetically shorter parents) or Constitutional Delay of Growth and Puberty ('late bloomers'). Growth hormone therapy is strictly reserved for medically confirmed conditions like Growth Hormone Deficiency, Turner syndrome, SGA with failed catch-up, or chronic kidney disease following standardized endocrine stimulation testing."
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
              Specialized Paediatric Endocrinology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-4 leading-tight">
              Child Growth & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Puberty Care</span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-teal-800 mb-6">
              పిల్లల ఎదుగుదల & యుక్తవయస్సు — పీడియాట్రిక్ ఎండోక్రినాలజీ స్పెషాలిటీ కేర్
            </p>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Children are not miniature adults. Their hormones govern linear growth, brain development, and pubertal timing. Dr. Navya Sruthi Mandapati provides expert, child-friendly paediatric endocrine evaluations with compassion and scientific precision in Vizianagaram.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base flex items-center gap-2 cursor-pointer"
              >
                <CalendarHeart className="w-5 h-5" />
                Book Child Growth Consultation
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
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-card hover:shadow-card-hover transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Critical Window Banner */}
      <section className="py-10 bg-teal-50/60 border-b border-teal-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">Time Sensitivity</span>
              <h3 className="text-2xl font-bold font-heading text-slate-800">
                The Growth Plate Window
              </h3>
            </div>
            <div className="md:col-span-2 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-2">
              <p>
                Once puberty completes and growth plates (epiphyses) fuse, physical height cannot be increased. Identifying poor growth velocity, hormone deficiencies, or early puberty early gives your child the best possible opportunity to achieve their true genetic potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Grouped Accordion */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Paediatric Endocrine Groups
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Organized into 3 clinical groups covering linear height velocity, pubertal timing, and juvenile glands. Tap any group to view conditions managed.
              </p>
            </ScrollReveal>
          </div>

          {/* Grouped Accordions */}
          <div className="space-y-4 mb-16">
            {serviceGroups.map((grp, idx) => {
              const isExpanded = openServiceGroupId === grp.id;

              return (
                <ScrollReveal key={grp.id} delay={idx * 0.05} direction="up">
                  <ExpandableGroup
                    id={grp.id}
                    title={grp.title}
                    subtitle={grp.subtitle}
                    badge={grp.badge}
                    icon={grp.icon}
                    iconVariant={grp.iconVariant}
                    itemCount={`${grp.services.length} Conditions`}
                    isExpanded={isExpanded}
                    onToggle={() => setOpenServiceGroupId((prev) => (prev === grp.id ? null : grp.id))}
                    variant="card"
                    toggleStyle="pill"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      {grp.services.map((item, sIdx) => (
                        <div
                          key={sIdx}
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
                          <div className="p-2.5 bg-teal-50/70 rounded-xl border border-teal-200 text-xs">
                            <strong className="text-navy font-bold block mb-0.5">Clinical Focus:</strong>
                            <span className="text-primary font-medium">{item.highlight}</span>
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
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">When to Check with Dr. Navya</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Signs That Warrant a Paediatric Endocrine Evaluation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Parents often wonder whether a child will simply "catch up later." Grouped warning signs below:
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
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Parent Guidance</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                Frequently Asked Child Growth Questions
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
                  Have Concerns About Your Child’s Height or Puberty?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                  Bring previous growth measurements, school height records, and health records for an unhurried, reassuring consultation with Dr. Navya Sruthi Mandapati.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={openModal}
                    className="px-7 py-3 bg-white text-slate-900 hover:bg-teal-50 font-bold rounded-full shadow-card transition-all text-xs sm:text-sm active:scale-95 cursor-pointer"
                  >
                    Book Paediatric Evaluation
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

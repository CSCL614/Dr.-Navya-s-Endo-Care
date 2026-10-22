"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Baby, AlertCircle, CalendarHeart, ChevronDown, Phone, HeartPulse, LineChart, Clock, MessageCircle
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import Link from "next/link";

export default function PaediatricEndocrinologyPage() {
  const { openModal } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Short Stature & Growth Velocity Tracking",
      description: "Careful plotting on Indian Academy of Pediatrics (IAP) and WHO growth charts to calculate yearly height velocity and compare against target genetic height.",
      highlight: "Differentiating normal constitutional delay from endocrine growth failure."
    },
    {
      title: "Growth Hormone Deficiency (GHD)",
      description: "Specialized endocrine evaluation including bone age X-rays and dynamic growth hormone stimulation testing when growth velocity falls persistently below normal.",
      highlight: "Evidence-based growth hormone therapy monitoring during open growth-plate windows."
    },
    {
      title: "Precocious (Early) Puberty",
      description: "Development of secondary sexual characteristics before age 8 in girls (breast buds) or age 9 in boys (testicular enlargement). Early puberty accelerates bone aging and halts final adult height prematurely.",
      highlight: "Central precocious puberty hormonal therapy to pause pubertal acceleration safely."
    },
    {
      title: "Delayed Puberty",
      description: "Absence of breast development by age 13 in girls or lack of testicular enlargement by age 14 in boys. Detailed evaluation of pituitary-gonadal signaling.",
      highlight: "Restoring physiological pubertal progression with timely hormonal support."
    },
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
  ];

  const warningSigns = [
    "Child is noticeably shorter than peers or class fellows of the same age and gender",
    "Growing less than 4 to 5 centimetres per year after age 4",
    "Clothes and shoe sizes do not change for over a year",
    "Breast development or pubic hair appearing in girls before age 8",
    "Testicular enlargement or voice change in boys before age 9",
    "No pubertal signs by age 13 in girls or age 14 in boys",
    "Sudden extreme thirst, bedwetting in a previously toilet-trained child, or rapid weight loss",
    "Poor academic focus, constant sluggishness, and dry skin in a growing child"
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
      <section className="relative pt-16 lg:pt-20 pb-20 bg-white border-b border-slate-200 overflow-hidden">
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
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base flex items-center gap-2"
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
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-xs transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: 8464070196
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Time-Sensitive Growth Window Message */}
      <section className="py-12 bg-amber-50/70 border-b border-amber-200/60">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Time-Sensitive Window</span>
              <h3 className="text-2xl font-bold font-heading text-slate-800">
                Why Timing Matters in Childhood Growth
              </h3>
            </div>
            <div className="md:col-span-2 text-slate-700 text-sm sm:text-base leading-relaxed space-y-2">
              <p>
                Once puberty completes and growth plates (epiphyses) fuse, physical height cannot be increased. Identifying poor growth velocity, hormone deficiencies, or early puberty early gives your child the best possible opportunity to achieve their true genetic potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">
                Paediatric Endocrine Conditions We Manage
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Evidence-based care for infants, children, and adolescents delivered in a welcoming, family-friendly setting.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((item, index) => (
              <ScrollReveal key={index} delay={(index % 4) * 0.06} direction="up">
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-11 h-11 bg-teal-50 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Baby className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-medium text-teal-700">
                    <strong className="text-slate-700">Focus: </strong>{item.highlight}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Warning Signs Checklist */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-md mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">When to Check with Dr. Navya</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Signs That Warrant a Paediatric Endocrine Evaluation
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Parents often wonder whether a child will simply "catch up later." If you notice any of these signs, a clinical evaluation brings peace of mind and timely guidance:
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
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Parent Education</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                Child Growth & Puberty Questions
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
              Protect Your Child’s Growth and Well-Being
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Bring your child's previous health records, immunization card, and school growth measurements for an unhurried, reassuring consultation with Dr. Navya Sruthi Mandapati.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-white text-primary hover:bg-slate-50 font-bold rounded-full shadow-md transition-all text-sm sm:text-base"
              >
                Schedule Appointment
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

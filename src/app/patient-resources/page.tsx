"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FileText, ClipboardList, ShieldAlert, Sparkles, Syringe, HeartPulse, HelpCircle, ArrowRight, Phone, MessageCircle, Pill, LucideIcon } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

export default function PatientResourcesPage() {
  const { openModal } = useAppointment();

  const preparationSteps = [
    {
      title: "Previous Medical Files & Records",
      desc: "Bring all past lab reports, discharge summaries, imaging reports, and prescriptions. Dr. Navya carefully reviews historical trends."
    },
    {
      title: "Self-Monitoring Glucose Logs",
      desc: "If you monitor your sugar at home, bring your logbook or glucometer. Fasting and post-meal records offer invaluable diagnostic context."
    },
    {
      title: "List of Current Medications",
      desc: "Note down the exact names and dosages of all medications, including thyroid tablets, vitamins, and supplements you are currently taking."
    },
    {
      title: "List of Questions & Concerns",
      desc: "Write down symptoms you are experiencing, questions about your diagnosis, and any side effects you wish to discuss unhurriedly."
    }
  ];

  const guidelines = [
    {
      title: "Insulin Storage & Technique",
      icon: Syringe,
      points: [
        "Store unopened insulin pens and vials in the refrigerator (2°C – 8°C). Never freeze.",
        "In-use pens can be kept at room temperature (below 30°C) away from direct sunlight for up to 28 days.",
        "Always rotate injection sites (abdomen, thighs, upper arms) to prevent lipohypertrophy (fat lumps).",
        "Change pen needles regularly to ensure accurate dosing and prevent pain."
      ]
    },
    {
      title: "Hypoglycaemia: The Rule of 15",
      icon: ShieldAlert,
      points: [
        "Recognize early symptoms: shakiness, sweating, rapid heartbeat, dizziness, or intense hunger.",
        "If blood sugar is below 70 mg/dL, take 15 grams of fast-acting carbohydrate (e.g. 3 teaspoons of sugar or glucose, or 1/2 cup of fruit juice).",
        "Wait 15 minutes and re-check blood glucose.",
        "If still below 70 mg/dL, repeat with another 15 grams of fast-acting sugar."
      ]
    },
    {
      title: "Understanding Key Lab Tests",
      icon: HeartPulse,
      points: [
        "HbA1c: Reflects your average blood sugar levels over the past 2 to 3 months.",
        "TSH & Free T4: Primary indicators of thyroid function (hypothyroidism or hyperthyroidism).",
        "Lipid Profile: Measures total cholesterol, HDL, LDL, and triglycerides crucial for cardiovascular safety.",
        "Urine Microalbumin: An essential annual test to detect early kidney stress in diabetes."
      ]
    }
  ];

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200 text-primary font-semibold rounded-full text-xs sm:text-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              Patient Empowerment & Education
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-6 leading-tight">
              Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Resources & Guides</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Empowering you with clear, practical knowledge to understand your condition and make the most out of every consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Preparing for Consultation */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">
                Preparing for Your Consultation
              </h2>
              <p className="text-slate-600 text-base">
                Dr. Navya prioritizes detailed record reviews. Having the following ready ensures an accurate, thorough evaluation.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {preparationSteps.map((step, idx) => {
              const prepIcons: LucideIcon[] = [FileText, ClipboardList, Pill, HelpCircle];
              const prepVariants: IconBadgeVariant[] = ["teal", "sky", "emerald", "amber"];
              const PrepIcon = prepIcons[idx % prepIcons.length];
              const prepVariant = prepVariants[idx % prepVariants.length];

              return (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
                    <span className="text-[11px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                      CHECKLIST {idx + 1}
                    </span>
                    <div className="mb-3.5">
                      <CenterIconBadge icon={PrepIcon} variant={prepVariant} size="sm" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-800 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                      {step.desc}
                    </p>
                    <div className="w-8 h-0.5 bg-primary/20 group-hover:w-14 group-hover:bg-primary transition-all duration-300 rounded-full mt-4" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Education Guides */}
          <div className="space-y-8">
            {guidelines.map((guide, index) => {
              const guideVariants: IconBadgeVariant[] = ["teal", "rose", "sky"];
              const gVariant = guideVariants[index % guideVariants.length];

              return (
                <ScrollReveal key={index} delay={index * 0.1} direction="up">
                  <div className="bg-white rounded-3xl p-7 sm:p-9 lg:p-10 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
                      <CenterIconBadge icon={guide.icon} variant={gVariant} size="md" />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-800 group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-xs text-text-muted mt-0.5">Clinical Best Practice Protocol</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {guide.points.map((pt, pIdx) => (
                        <div key={pIdx} className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100/90 text-xs sm:text-sm text-slate-700 leading-relaxed hover:bg-white hover:border-teal-200 transition-colors">
                          • {pt}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Appointment CTA */}
      <section className="container mx-auto px-4 md:px-6 max-w-4xl">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-primary to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl shadow-teal-500/15">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
              Have Questions About Your Health?
            </h3>
            <p className="text-teal-50 max-w-xl mx-auto text-sm sm:text-base mb-8">
              Book a comprehensive consultation with Dr. Navya Sruthi Mandapati at Dr. Navya’s EndoCare in Vizianagaram.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-white text-primary-dark font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Book an Appointment
              </button>
              <a
                href="tel:8464070196"
                className="px-7 py-3.5 bg-teal-700/60 hover:bg-teal-700 text-white font-semibold rounded-full border border-teal-300/40 transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-200" />
                Call: 8464070196
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: 8464070196
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

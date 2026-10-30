"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, Syringe, Footprints, ShieldAlert, Sparkles, CheckCircle2, 
  ArrowRight, Building2, FlaskConical, Clock, HeartPulse, Stethoscope, 
  Phone, MessageCircle, Apple, AlertCircle, LineChart, Thermometer, ShieldCheck, LucideIcon, CalendarHeart 
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";
import { ClinicFacilitiesSection } from "@/components/home/ClinicFacilitiesSection";
import { ExpandableGroup } from "@/components/ui/ExpandableGroup";

export default function DiabetesCarePage() {
  const { openModal } = useAppointment();
  const [openServiceGroupId, setOpenServiceGroupId] = useState<string | null>("insulin-cgm");
  const [openFootGroupId, setOpenFootGroupId] = useState<string | null>("sensory-testing");

  const serviceGroups = [
    {
      id: "insulin-cgm",
      title: "Insulin Guidance & Glucose Monitoring",
      subtitle: "SMBG, CGM Sensors, Pen Techniques & Cold-Chain Storage Protocols",
      badge: "Self-Management",
      icon: Syringe,
      iconVariant: "teal" as const,
      services: [
        {
          title: "Diabetes Education & Glucose Monitoring",
          desc: "Step-by-step guidance on self-monitoring of blood glucose (SMBG), continuous glucose monitoring (CGM) sensor interpretation, and recognizing spike patterns."
        },
        {
          title: "Insulin Initiation & Technical Training",
          desc: "One-on-one training on insulin pen usage, syringe technique, needle hygiene, rotation of injection sites to avoid lipohypertrophy, and painless delivery."
        },
        {
          title: "Meal Timing & Storage Counselling",
          desc: "Clear instructions on timing meals with rapid or basal insulin, preventing crystallization, travelling with insulin kits, and cold-chain safety."
        }
      ]
    },
    {
      id: "nutrition-hypo",
      title: "Nutrition, Andhra Meal Plans & Hypo Safety",
      subtitle: "Authentic Andhra Meal Guidance, Glycemic Index & The Rule of 15",
      badge: "Lifestyle & Safety",
      icon: Apple,
      iconVariant: "emerald" as const,
      services: [
        {
          title: "Personalised Dietary Guidance",
          desc: "Practical nutritional plans based on authentic Andhra dietary habits, local millet/rice awareness, glycemic index pairing, and realistic portion control."
        },
        {
          title: "Hypoglycaemia Prevention Education",
          desc: "Recognizing early warning signs of low blood sugar (cold sweat, palpitations, tremors, extreme hunger) and master the Rule of 15 for prompt, safe recovery."
        }
      ]
    },
    {
      id: "foot-screening",
      title: "Comprehensive Diabetic Foot Complication Prevention",
      subtitle: "Early Neuropathy Detection, Vascular Doppler & Plantar Pressure Protection",
      badge: "Complication Screening",
      icon: Footprints,
      iconVariant: "rose" as const,
      services: [
        {
          title: "Comprehensive Diabetic Foot Risk Assessment",
          desc: "Proactive annual evaluation of nerve sensation, arterial circulation, and foot pressure points to prevent diabetic foot ulcers, infections, and amputations."
        }
      ]
    }
  ];

  const footAssessmentGroups = [
    {
      id: "sensory-testing",
      title: "Neuropathy & Sensory Nerve Loss Testing",
      subtitle: "Detecting silent nerve damage before numbness and ulcers develop",
      icon: Activity,
      iconVariant: "teal" as const,
      badge: "Sensory Function",
      items: [
        {
          name: "Vibration Perception Threshold (VPT) / Biothesiometry",
          purpose: "Digital quantitative assessment measuring nerve sensitivity to detect early loss of protective vibration sensation before clinical neuropathy develops."
        },
        {
          name: "10g Semmes-Weinstein Monofilament Testing",
          purpose: "Standardized clinical tactile sensory evaluation across critical plantar pressure areas to identify high-risk non-responsive foot zones."
        }
      ]
    },
    {
      id: "vascular-thermal",
      title: "Arterial Blood Supply & Thermal Screening",
      subtitle: "Assessing blood circulation and localized inflammatory hot spots",
      icon: HeartPulse,
      iconVariant: "rose" as const,
      badge: "Vascular Health",
      items: [
        {
          name: "Ankle–Brachial Index (ABI) Doppler Screening",
          purpose: "Ultrasound Doppler-assisted arterial pressure assessment to detect peripheral arterial disease (PAD) and poor lower-limb blood supply."
        },
        {
          name: "Foot-Temperature Assessment (Infrared Thermometry)",
          purpose: "Detection of subtle skin temperature discrepancies indicating subclinical tissue inflammation, early Charcot foot, or vascular compromise."
        }
      ]
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
              Comprehensive Endocrinology Service
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-6 leading-tight">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Diabetes Support</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              From advanced glucose monitoring and insulin technique to comprehensive complication screening and dietary empowerment—personalized care designed to keep you thriving.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base cursor-pointer"
              >
                Book Diabetes Consultation
              </button>
              <a
                href="#foot-assessment"
                className="px-8 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-full border border-slate-200 transition-all text-sm sm:text-base"
              >
                Diabetic Foot Screening
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Support Services - Grouped Accordion */}
      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
                Core Diabetes Care Groups
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Structured clinical support covering education, daily medicine management, and sustainable habits. Tap any group to view detailed services.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
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
                    itemCount={`${grp.services.length} Services`}
                    isExpanded={isExpanded}
                    onToggle={() => setOpenServiceGroupId((prev) => (prev === grp.id ? null : grp.id))}
                    variant="card"
                    toggleStyle="pill"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                      {grp.services.map((svc, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start gap-2 mb-2">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <h4 className="text-xs sm:text-sm font-bold text-navy leading-snug">
                                {svc.title}
                              </h4>
                            </div>
                            <p className="text-xs text-text-secondary leading-relaxed pl-6">
                              {svc.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ExpandableGroup>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Diabetic Foot Risk Assessment Section */}
          <div className="pt-12 sm:pt-16 scroll-mt-28" id="foot-assessment">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-teal-100 shadow-md mb-12">
                <div className="max-w-3xl mb-8 sm:mb-10 text-center sm:text-left">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">Complication Prevention</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-800 mb-3">
                    Diabetic Foot Risk Assessment Facilities
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    Peripheral neuropathy and reduced blood supply can develop silently in diabetes. Our center houses specialized non-invasive testing modalities. <em>Note: Tests are recommended individually based on clinical evaluation; not every patient requires every test.</em>
                  </p>
                </div>

                {/* Real Equipment Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-slate-100 items-center">
                  <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col items-center">
                    <div className="relative aspect-[4/5] w-full max-w-xs rounded-2xl overflow-hidden bg-white shadow-md">
                      <img 
                        src="/gallery/diabetic-foot-profiler.jpg" 
                        alt="Diabetic Foot Profiler Workstation at Dr. Navya's EndoCare" 
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="text-sm font-bold text-slate-800 font-heading">On-Site Diabetic Foot Profiler Workstation</h4>
                      <p className="text-xs text-slate-500">Integrated VPT, Ankle–Brachial Index (ABI), IR Thermometry & Plantar Pressure</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col items-center">
                    <div className="relative aspect-square w-full max-w-xs rounded-2xl overflow-hidden bg-white shadow-md">
                      <img 
                        src="/gallery/diabetic-foot-care-guide.jpg" 
                        alt="Diabetic Foot Care & Prevention Guide at Dr. Navya's EndoCare" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="text-sm font-bold text-slate-800 font-heading">Preventing Complications Through Education</h4>
                      <p className="text-xs text-slate-500">Annual neuropathy exams & comprehensive daily foot protection guidelines</p>
                    </div>
                  </div>
                </div>

                {/* Grouped Foot Testing Modalities */}
                <div className="space-y-3.5">
                  {footAssessmentGroups.map((grp) => {
                    const isExpanded = openFootGroupId === grp.id;

                    return (
                      <ExpandableGroup
                        key={grp.id}
                        id={grp.id}
                        title={grp.title}
                        subtitle={grp.subtitle}
                        badge={grp.badge}
                        icon={grp.icon}
                        iconVariant={grp.iconVariant}
                        itemCount={`${grp.items.length} Tests`}
                        isExpanded={isExpanded}
                        onToggle={() => setOpenFootGroupId((prev) => (prev === grp.id ? null : grp.id))}
                        variant="subtle"
                        toggleStyle="pill"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                          {grp.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                              <h5 className="text-xs sm:text-sm font-bold text-navy mb-1 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                <span>{item.name}</span>
                              </h5>
                              <p className="text-xs text-text-secondary leading-relaxed pl-5">
                                {item.purpose}
                              </p>
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

          {/* On-Site Center Amenities */}
          <ScrollReveal direction="up">
            <div className="bg-gradient-to-br from-navy-dark via-navy to-slate-900 !text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-elevated border border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-2xl mb-6 sm:mb-8 relative z-10">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block mb-2">
                  Comprehensive Patient Support
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading !text-white mb-2.5 tracking-tight">
                  On-Site Clinical Facilities
                </h3>
                <p className="!text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                  To provide a seamless healthcare experience, Dr. Navya’s EndoCare offers integrated diagnostic and supportive amenities within the premises.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative z-10">
                <div className="bg-white/10 hover:bg-white/15 rounded-2xl p-5 sm:p-6 border border-white/20 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-3.5">
                      <FlaskConical className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base !text-white mb-1.5 font-heading">
                      Laboratory Services
                    </h4>
                    <p className="text-xs !text-slate-200 leading-relaxed font-normal">
                      Timely blood glucose, HbA1c, complete thyroid panel, and urine microalbumin testing with fast turnaround.
                    </p>
                  </div>
                  <span className="mt-3.5 text-[10px] font-semibold text-teal-300 uppercase tracking-wider block">
                    • In-House Correlation
                  </span>
                </div>

                <div className="bg-white/10 hover:bg-white/15 rounded-2xl p-5 sm:p-6 border border-white/20 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-3.5">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base !text-white mb-1.5 font-heading">
                      24-Hour Pharmacy
                    </h4>
                    <p className="text-xs !text-slate-200 leading-relaxed font-normal">
                      Continuous cold-chain temperature preservation for genuine insulins, GLP-1 analogs, and oral medications.
                    </p>
                  </div>
                  <span className="mt-3.5 text-[10px] font-semibold text-teal-300 uppercase tracking-wider block">
                    • Cold-Chain Safe
                  </span>
                </div>

                <div className="bg-white/10 hover:bg-white/15 rounded-2xl p-5 sm:p-6 border border-white/20 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-3.5">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base !text-white mb-1.5 font-heading">
                      Day-Care Services
                    </h4>
                    <p className="text-xs !text-slate-200 leading-relaxed font-normal">
                      Comfortable short-stay observation for stabilization, IV fluids, and supervised insulin dose titration.
                    </p>
                  </div>
                  <span className="mt-3.5 text-[10px] font-semibold text-teal-300 uppercase tracking-wider block">
                    • Supervised Care
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Complete Clinic Facilities Section */}
      <ClinicFacilitiesSection isCompact={false} />

      {/* Appointment CTA */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl mt-8 sm:mt-12">
        <ScrollReveal>
          <div className="bg-teal-50 border border-teal-200 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 mb-3">
              Schedule Your Diabetes Evaluation
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base mb-8">
              Whether you have been newly diagnosed or need an experienced superspecialist review of your ongoing diabetes management, we are here for you.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-soft transition-all cursor-pointer"
              >
                Book Consultation Now
              </button>
              <a
                href="tel:8464070196"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-teal-100/60 text-slate-800 font-bold rounded-full border border-teal-200 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, Syringe, Footprints, ShieldAlert, Sparkles, CheckCircle2, 
  ArrowRight, Building2, FlaskConical, Clock, HeartPulse, Stethoscope, 
  Phone, MessageCircle, Apple, AlertCircle, LineChart, Thermometer, ShieldCheck, LucideIcon 
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";
import { ClinicFacilitiesSection } from "@/components/home/ClinicFacilitiesSection";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

export default function DiabetesCarePage() {
  const { openModal } = useAppointment();
  const diabetes = doctorData.diabetesSupport;

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
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft transition-all text-sm sm:text-base"
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

      {/* Core Support Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">
                Core Diabetes Care Services
              </h2>
              <p className="text-slate-600 text-base">
                Structured clinical support covering education, daily medicine management, and sustainable habits.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {diabetes.services.map((svc, index) => {
              const serviceIcons = [Activity, Syringe, ShieldCheck, Apple, AlertCircle, LineChart];
              const serviceVariants: IconBadgeVariant[] = ["teal", "emerald", "sky", "amber", "rose", "indigo"];
              const SvcIcon = serviceIcons[index % serviceIcons.length];
              const svcVariant = serviceVariants[index % serviceVariants.length];

              return (
                <ScrollReveal key={index} delay={index * 0.08} direction="up">
                  <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
                    <div className="mb-4">
                      <CenterIconBadge icon={SvcIcon} variant={svcVariant} size="md" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-800 mb-2.5 group-hover:text-primary transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex-grow">
                      {svc.description}
                    </p>
                    <div className="w-8 h-0.5 bg-primary/20 group-hover:w-16 group-hover:bg-primary transition-all duration-300 rounded-full mt-4" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Diabetic Foot Risk Assessment Section */}
          <div className="pt-10 scroll-mt-28" id="foot-assessment">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-teal-100 shadow-md mb-16">
                <div className="max-w-3xl mb-10 text-center sm:text-left">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">Complication Prevention</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-800 mb-4">
                    Diabetic Foot Risk Assessment Facilities
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Peripheral neuropathy and reduced blood supply can develop silently in diabetes. Our center houses specialized non-invasive testing modalities. <em>Note: Tests are recommended individually based on clinical evaluation; not every patient requires every test.</em>
                  </p>
                </div>

                {/* Real Equipment & Education Visual Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-10 border-b border-slate-100 items-center">
                  <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col items-center">
                    <div className="relative aspect-[4/5] w-full max-w-sm rounded-2xl overflow-hidden bg-white shadow-md">
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
                    <div className="relative aspect-square w-full max-w-sm rounded-2xl overflow-hidden bg-white shadow-md">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {diabetes.assessmentFacilities.map((fac, idx) => {
                    const footIcons = [Activity, ShieldCheck, HeartPulse, Thermometer, Footprints, Sparkles];
                    const footVariants: IconBadgeVariant[] = ["teal", "sky", "rose", "amber", "mint", "emerald"];
                    const FootIcon = footIcons[idx % footIcons.length];
                    const footVariant = footVariants[idx % footVariants.length];

                    return (
                      <div key={idx} className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E3EBF0] hover:border-teal-300 shadow-[0_2px_10px_rgba(23,59,87,0.04)] hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
                        <div className="mb-3.5">
                          <CenterIconBadge icon={FootIcon} variant={footVariant} size="sm" />
                        </div>
                        <h3 className="text-base font-bold font-heading text-slate-800 mb-2 leading-snug group-hover:text-primary transition-colors">
                          {fac.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                          {fac.purpose}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* On-Site Center Amenities */}
          <ScrollReveal direction="up">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block mb-2">Comprehensive Patient Support</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
                  On-Site Clinical Facilities
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  To provide a seamless healthcare experience, Dr. Navya’s EndoCare offers integrated diagnostic and supportive amenities within the premises.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <FlaskConical className="w-8 h-8 text-teal-400 mb-3" />
                  <h4 className="font-bold text-base mb-1">Laboratory Services</h4>
                  <p className="text-xs text-slate-300">Timely blood glucose, HbA1c, thyroid panel, and urine microalbumin testing.</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <Clock className="w-8 h-8 text-teal-400 mb-3" />
                  <h4 className="font-bold text-base mb-1">24-Hour Pharmacy</h4>
                  <p className="text-xs text-slate-300">Continuous cold-chain preservation for genuine insulins and oral medications.</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <Building2 className="w-8 h-8 text-teal-400 mb-3" />
                  <h4 className="font-bold text-base mb-1">Day-Care Services</h4>
                  <p className="text-xs text-slate-300">Comfortable short-stay observation for stabilization, IV fluids, and insulin adjustment.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Complete Clinic Facilities Section */}
      <ClinicFacilitiesSection isCompact={false} />

      {/* Appointment CTA */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl mt-12">
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
                className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-soft transition-all"
              >
                Book Consultation Now
              </button>
              <a
                href="tel:8464070196"
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-full border border-slate-300 shadow-xs transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                Call: 8464070196
              </a>
              <a
                href="https://wa.me/918464070196"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-xs transition-all inline-flex items-center justify-center gap-2"
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

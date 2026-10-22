"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, GraduationCap, Quote, ArrowRight, ShieldCheck, HeartPulse, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function DoctorIntroSection() {
  const { openModal } = useAppointment();

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden" id="doctor-intro">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Doctor Portrait & Credentials Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border-[6px] border-white bg-slate-100 z-10">
                  <Image
                    src="/images/dr-navya-sruthi-mandapati.jpg"
                    alt="Dr. Navya Sruthi Mandapati — Consultant Endocrinologist"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-300 block mb-1">Chief Endocrinologist</span>
                    <h3 className="text-2xl font-bold font-heading mb-0.5">{doctorData.name}</h3>
                    <p className="text-xs sm:text-sm text-white/90">{doctorData.degrees}</p>
                  </div>
                </div>

                {/* Floating Award Pill */}
                <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white p-4 rounded-2xl border border-teal-100 shadow-xl flex items-center gap-3 z-20">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">DM Endocrinology</div>
                    <div className="text-sm sm:text-base font-bold text-slate-800">University Topper</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Text & Philosophy Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Know Your Doctor
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight">
                {doctorData.headline}
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Consultant Endocrinologist caring for adults and children. Dr. Navya believes that effective treatment should empower patients with a thorough understanding of their health rather than simply handing over a prescription.
              </p>

              {/* Highlighted Quote Box */}
              <div className="bg-slate-50 border-l-4 border-primary p-5 sm:p-6 rounded-2xl">
                <Quote className="w-8 h-8 text-primary/30 mb-2" />
                <p className="text-base sm:text-lg font-bold font-heading text-slate-800 leading-snug mb-2">
                  “{doctorData.featuredQuote1}”
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  “{doctorData.featuredQuote2}”
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Review of previous records & diagnostic trends</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Personalized nutrition & sleep habits</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Adult & Paediatric hormone expertise</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Telugu, English & basic Hindi consultations</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-soft text-sm transition-all flex items-center gap-2 group"
                >
                  <span>KNOW MORE ABOUT DR. NAVYA</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={openModal}
                  className="px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-full font-semibold border border-slate-200 text-sm transition-all"
                >
                  Book Appointment
                </button>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}

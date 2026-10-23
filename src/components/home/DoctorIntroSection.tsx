"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, Quote, ArrowRight, ShieldCheck, CheckCircle2, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function DoctorIntroSection() {
  const { openModal } = useAppointment();

  return (
    <section className="py-20 lg:py-28 bg-gradient-section-alt relative overflow-hidden" id="doctor-intro">
      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-24 h-24 rounded-full border border-primary/6 float-slower hidden lg:block" aria-hidden="true" />
      <div className="absolute bottom-[15%] left-[3%] w-16 h-16 rounded-full border border-accent-warm/8 float-slow hidden lg:block" aria-hidden="true" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Doctor Portrait & Credentials Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="relative">
                {/* Background accent shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-soft-teal/50 to-pale-blue/30 rounded-[2rem] -rotate-2 hidden lg:block" aria-hidden="true" />
                
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border-[5px] border-white bg-background-alt z-10">
                  <Image
                    src="/images/dr-navya-sruthi-mandapati.jpg"
                    alt="Dr. Navya Sruthi Mandapati — Consultant Endocrinologist"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                    <span className="text-xs font-semibold uppercase tracking-wider text-soft-teal block mb-1">Chief Endocrinologist</span>
                    <h3 className="text-2xl font-bold font-heading mb-0.5">{doctorData.name}</h3>
                    <p className="text-xs sm:text-sm text-white/90">{doctorData.degrees}</p>
                  </div>
                </div>

                {/* Floating Award Pill — premium glass */}
                <div className="absolute -bottom-5 -right-3 sm:-right-5 glass-card p-4 flex items-center gap-3 z-20 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-warm to-accent-warm-light rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-semibold uppercase tracking-wider">DM Endocrinology</div>
                    <div className="text-sm sm:text-base font-bold text-navy">University Topper</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Text & Philosophy Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              <div className="section-tag mb-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Know Your Doctor
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-navy leading-tight">
                {doctorData.headline}
              </h2>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                Consultant Endocrinologist caring for adults and children. Dr. Navya believes that effective treatment should empower patients with a thorough understanding of their health rather than simply handing over a prescription.
              </p>

              {/* Premium Quote Box — editorial style */}
              <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-border shadow-card overflow-hidden">
                {/* Accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-light to-accent-warm rounded-full" />
                <div className="pl-4">
                  <Quote className="w-8 h-8 text-primary/15 mb-2" />
                  <p className="text-base sm:text-lg font-bold font-heading text-navy leading-snug mb-2">
                    &ldquo;{doctorData.featuredQuote1}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary italic">
                    &ldquo;{doctorData.featuredQuote2}&rdquo;
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy/80 bg-white/60 px-3 py-2 rounded-xl border border-border-light">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Review of previous records & diagnostic trends</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy/80 bg-white/60 px-3 py-2 rounded-xl border border-border-light">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Personalized nutrition & sleep habits</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy/80 bg-white/60 px-3 py-2 rounded-xl border border-border-light">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Adult & Paediatric hormone expertise</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy/80 bg-white/60 px-3 py-2 rounded-xl border border-border-light">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Telugu, English & basic Hindi consultations</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="btn-primary text-sm group"
                >
                  <span>KNOW MORE ABOUT DR. NAVYA</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <button
                  onClick={openModal}
                  className="btn-secondary text-sm"
                >
                  Book Appointment
                </button>
                <a
                  href="tel:8464070196"
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 bg-soft-teal hover:bg-soft-teal-dark text-primary rounded-full font-bold text-sm transition-all duration-200 border border-primary/15"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call: 8464070196</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Phone, CalendarHeart, MapPin, CheckCircle2, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function FinalCtaSection() {
  const { openModal } = useAppointment();

  const googleMapsUrl = "https://maps.google.com/?q=Dr.+Navya's+Endo+Care,+Ajay+Children's+Hospital+junction,+Phool+Bagh+Rd,+Ambati+Satram+Area,+Vizianagaram,+Andhra+Pradesh+535002";

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="final-cta">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <ScrollReveal direction="glow">
          <div className="bg-gradient-to-br from-navy via-navy-light to-navy-dark rounded-3xl p-6 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-elevated border border-white/20 glow-card-featured">
            
            {/* Decorative ambient elements */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none animate-[pulse_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-400/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10 space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 py-1 px-3.5 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-soft-teal uppercase tracking-wider badge-glow-teal">
                <Sparkles className="w-3.5 h-3.5 text-accent-warm" />
                Begin Your Care Journey
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight !text-white tracking-tight drop-shadow-sm">
                &ldquo;<span className="text-white">Your Health Has A Story.</span>{" "}
                <span className="text-amber-300 font-black">Let&rsquo;s Understand It Together.&rdquo;</span>
              </h2>

              {/* Brand and Telugu Tagline */}
              <div className="space-y-1 pt-1">
                <div className="text-lg sm:text-2xl font-bold font-heading !text-white tracking-wide">
                  Dr. Navya&rsquo;s EndoCare
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wider !text-teal-200 uppercase">
                  Diabetes • Thyroid • Obesity & Endocrine Superspeciality Centre
                </div>
                <div className="text-xs sm:text-base font-bold !text-amber-300 font-sans tracking-wide pt-1">
                  {doctorData.teluguTagline}
                </div>
              </div>

              {/* 4 Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 pb-1 text-xs sm:text-sm text-white/90">
                {[
                  "Specialist care",
                  "Clear counselling",
                  "Practical lifestyle",
                  "Better metabolic health"
                ].map((pillar) => (
                  <div key={pillar} className="flex items-center justify-center gap-1.5 bg-white/10 py-2 px-2.5 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-soft-teal shrink-0" />
                    <span className="truncate">{pillar}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons Grid */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto px-7 py-3.5 bg-white text-navy hover:bg-soft-teal font-bold rounded-full shadow-[0_4px_24px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)] shimmer-hover transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-[0.97] group touch-target cursor-pointer"
                >
                  <CalendarHeart className="w-4 h-4 text-primary" />
                  <span>BOOK AN APPOINTMENT</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:8464070196"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/15 hover:bg-white/20 text-white border border-white/25 font-bold rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm touch-target"
                >
                  <Phone className="w-4 h-4 text-soft-teal" />
                  <span>CALL: 8464070196</span>
                </a>

                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-soft transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm touch-target"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP: 8464070196</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white/90 border border-white/15 font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm touch-target"
                >
                  <MapPin className="w-4 h-4 text-soft-teal" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>

              {/* Clinic Address */}
              <p className="text-[11px] sm:text-xs text-white/60 pt-2">
                Ajay Children&rsquo;s Hospital junction, Phool Bagh Rd, Ambati Satram Area, Vizianagaram, AP 535002
              </p>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Phone, CalendarHeart, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function FinalCtaSection() {
  const { openModal } = useAppointment();

  const googleMapsUrl = "https://maps.google.com/?q=Dr.+Navya's+Endo+Care,+Ajay+Children's+Hospital+junction,+Phool+Bagh+Rd,+Ambati+Satram+Area,+Vizianagaram,+Andhra+Pradesh+535002";

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="final-cta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-teal-700 via-primary-dark to-teal-900 rounded-[2.5rem] p-8 md:p-14 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-teal-900/20">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10 space-y-6">
              
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                “Your Health Has A Story. Let's Understand It Together.”
              </h2>

              {/* Brand and Telugu Tagline */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xl sm:text-2xl font-bold font-heading text-teal-100 tracking-wide">
                  Dr. Navya’s EndoCare
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wider text-teal-200 uppercase">
                  Diabetes • Thyroid • Obesity & Endocrine Superspeciality Centre
                </div>
                <div className="text-sm sm:text-base font-bold text-teal-300 font-sans tracking-wide pt-1">
                  {doctorData.teluguTagline}
                </div>
              </div>

              {/* Supporting Messages 4 Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 pb-2 text-xs sm:text-sm text-teal-50">
                <div className="flex items-center justify-center gap-1.5 bg-white/10 py-2 px-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Specialist care</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 bg-white/10 py-2 px-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Clear counselling</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 bg-white/10 py-2 px-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Practical lifestyle</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 bg-white/10 py-2 px-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Better metabolic health</span>
                </div>
              </div>

              {/* 3 Requested Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary-dark hover:bg-teal-50 font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <CalendarHeart className="w-5 h-5 text-primary" />
                  <span>BOOK AN APPOINTMENT</span>
                </button>

                <a
                  href="tel:8464070196"
                  className="w-full sm:w-auto px-7 py-4 bg-teal-800/80 hover:bg-teal-800 text-white border border-teal-300/40 font-bold rounded-full transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-soft"
                >
                  <Phone className="w-4 h-4 text-teal-200" />
                  <span>CALL: 8464070196</span>
                </a>

                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-soft transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP: 8464070196</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 bg-teal-900/60 hover:bg-teal-900 text-teal-100 border border-teal-400/30 font-semibold rounded-full transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MapPin className="w-4 h-4 text-teal-300" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>

              {/* Verified Clinic Address Note */}
              <p className="text-xs text-teal-200/80 pt-2 font-light">
                Ajay Children’s Hospital junction, Phool Bagh Rd, Ambati Satram Area, Vizianagaram, AP 535002
              </p>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

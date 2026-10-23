"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Phone, CalendarHeart, MapPin, CheckCircle2, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function FinalCtaSection() {
  const { openModal } = useAppointment();

  const googleMapsUrl = "https://maps.google.com/?q=Dr.+Navya's+Endo+Care,+Ajay+Children's+Hospital+junction,+Phool+Bagh+Rd,+Ambati+Satram+Area,+Vizianagaram,+Andhra+Pradesh+535002";

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden" id="final-cta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <ScrollReveal direction="scale">
          <div className="bg-gradient-to-br from-navy via-navy-light to-navy-dark rounded-[2.5rem] p-8 md:p-14 lg:p-16 text-center text-white relative overflow-hidden shadow-elevated">
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent-warm/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none rounded-[2.5rem]" />
            
            {/* Decorative line art shapes */}
            <div className="absolute top-8 left-8 w-16 h-16 border border-white/5 rounded-full pointer-events-none float-slower" />
            <div className="absolute bottom-12 right-12 w-12 h-12 border border-white/5 rounded-full pointer-events-none float-slow" />

            <div className="max-w-3xl mx-auto relative z-10 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white/8 border border-white/10 rounded-full text-xs font-semibold text-white/80 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-accent-warm" />
                Begin Your Care Journey
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight text-white">
                &ldquo;Your Health Has A Story. Let&rsquo;s Understand It Together.&rdquo;
              </h2>

              {/* Brand and Telugu Tagline */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xl sm:text-2xl font-bold font-heading text-soft-teal tracking-wide">
                  Dr. Navya&rsquo;s EndoCare
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wider text-white/60 uppercase">
                  Diabetes • Thyroid • Obesity & Endocrine Superspeciality Centre
                </div>
                <div className="text-sm sm:text-base font-bold text-accent-warm font-sans tracking-wide pt-1">
                  {doctorData.teluguTagline}
                </div>
              </div>

              {/* 4 Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 pb-2 text-xs sm:text-sm text-white/85">
                {[
                  "Specialist care",
                  "Clear counselling",
                  "Practical lifestyle",
                  "Better metabolic health"
                ].map((pillar) => (
                  <div key={pillar} className="flex items-center justify-center gap-1.5 bg-white/6 py-2.5 px-3 rounded-xl border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-200">
                    <CheckCircle2 className="w-4 h-4 text-soft-teal shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons — premium treatment */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-navy hover:bg-soft-teal font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base active:scale-[0.97] group"
                >
                  <CalendarHeart className="w-5 h-5 text-primary" />
                  <span>BOOK AN APPOINTMENT</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:8464070196"
                  className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 font-bold rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 text-soft-teal" />
                  <span>CALL: 8464070196</span>
                </a>

                <a
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-soft transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP: 8464070196</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 hover:border-white/20 font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MapPin className="w-4 h-4 text-soft-teal" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>

              {/* Clinic Address */}
              <p className="text-xs text-white/40 pt-2">
                Ajay Children&rsquo;s Hospital junction, Phool Bagh Rd, Ambati Satram Area, Vizianagaram, AP 535002
              </p>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

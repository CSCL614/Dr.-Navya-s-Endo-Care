"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PhoneCall, CalendarHeart, MessageCircle } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function CtaBanner() {
  const { openModal } = useAppointment();

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-teal-700 via-primary-dark to-teal-800 rounded-[2.5rem] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl shadow-teal-700/20">
            {/* Subtle light circles */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="max-w-3xl mx-auto relative z-10">
              <span className="inline-block px-4 py-1.5 bg-white/15 text-teal-100 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                {doctorData.centerName.split("—")[0]}
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 leading-tight">
                Academic Excellence. Personalized Care.
              </h2>
              
              <p className="text-base sm:text-lg text-teal-100 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Take the first step toward understanding your condition and achieving lasting metabolic health. Consult with Dr. Navya Sruthi Mandapati in Vizianagaram.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={openModal}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary-dark font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center group text-base"
                >
                  <CalendarHeart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform text-primary" />
                  Book Appointment
                </button>
                
                <a 
                  href="tel:8464070196"
                  className="w-full sm:w-auto px-7 py-4 bg-teal-800/80 hover:bg-teal-800 text-white border border-teal-400/40 font-semibold rounded-full transition-all hover:-translate-y-0.5 flex items-center justify-center text-base"
                >
                  <PhoneCall className="mr-2 w-5 h-5 text-teal-200" />
                  Call: 8464070196
                </a>

                <a 
                  href="https://wa.me/918464070196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md transition-all hover:-translate-y-0.5 flex items-center justify-center text-base"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp: 8464070196
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

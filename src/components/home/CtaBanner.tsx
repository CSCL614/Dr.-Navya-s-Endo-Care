"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PhoneCall, CalendarHeart } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export function CtaBanner() {
  const { openModal } = useAppointment();

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-secondary-light/20 mix-blend-multiply" />
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[40px] border-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-[20px] border-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              Ready To Take Control Of Your Health?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step towards a healthier, balanced life with expert endocrine care.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-dark font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center group"
              >
                <CalendarHeart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Appointment
              </button>
              
              <a 
                href="tel:+919032773508"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white/30 font-bold rounded-full hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center group"
              >
                <div className="relative flex items-center justify-center mr-3">
                  <div className="absolute inset-0 bg-red-400 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-70"></div>
                  <PhoneCall className="w-5 h-5 text-red-400 relative z-10 group-hover:rotate-12 transition-transform" />
                </div>
                Call Emergency
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

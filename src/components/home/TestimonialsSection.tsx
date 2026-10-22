"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Quote, HeartHandshake, CheckCircle2 } from "lucide-react";

const patientExperiences = [
  {
    name: "Patient Feedback",
    condition: "Diabetes Care Consultation",
    text: "Dr. Navya took the time to go through all my previous lab reports and explained what was happening in simple Telugu. For the first time, I actually understood why my insulin timing mattered rather than just taking medicines blindly.",
  },
  {
    name: "Patient Feedback",
    condition: "Thyroid & Fatigue Evaluation",
    text: "The consultation was unhurried and thorough. Dr. Navya explained the role of thyroid hormones in daily energy, adjusted my medication carefully, and guided me on sleep and nutrition habits.",
  },
  {
    name: "Patient Feedback",
    condition: "PCOS & Lifestyle Guidance",
    text: "Instead of overwhelming me, she gave me practical, sustainable food changes that fit my family cooking. The emphasis on understanding my hormones made a huge difference to my peace of mind.",
  },
  {
    name: "Patient Feedback",
    condition: "Wednesday Obesity Clinic",
    text: "Consulting with both the Endocrinologist and Clinical Dietician together gave me a structured roadmap. They addressed my metabolic health without making unrealistic claims or prescribing extreme diets.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-50 border border-teal-200 text-primary font-semibold rounded-full text-xs sm:text-sm mb-4">
                <HeartHandshake className="w-4 h-4 text-primary" />
                Patient-Centred Experience
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6 leading-tight">
                Care That Begins With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Listening</span>
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
                Patients appreciate having their questions answered patiently, their previous records reviewed with care, and their treatment plans adapted to real life.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Unhurried consultations with ample time to discuss concerns</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Detailed explanation of test results and treatment rationales</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Empathetic communication in Telugu, English, and Hindi</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="absolute inset-0 bg-teal-50 rounded-[3rem] -rotate-2 scale-105" />
            <ScrollReveal direction="left">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full max-w-md mx-auto aspect-[4/3]"
              >
                {patientExperiences.map((item, index) => (
                  <SwiperSlide key={index} className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-100 flex flex-col justify-between">
                    <div>
                      <Quote className="w-10 h-10 text-teal-500/20 mb-4" />
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                        "{item.text}"
                      </p>
                    </div>
                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-800 font-heading text-sm sm:text-base">{item.name}</h4>
                        <p className="text-xs text-primary font-medium">{item.condition}</p>
                      </div>
                      <div className="text-xs text-teal-600 font-semibold bg-teal-50 px-2.5 py-1 rounded-full">
                        Verified Visit
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

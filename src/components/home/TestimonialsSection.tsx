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
    <section className="py-20 lg:py-28 bg-pale-blue/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-[5%] right-[5%] w-24 h-24 rounded-full border border-primary/5 float-slower hidden lg:block" aria-hidden="true" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div>
            <ScrollReveal>
              <div className="section-tag mb-4">
                <HeartHandshake className="w-4 h-4 text-primary" />
                Patient-Centred Experience
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-6 leading-tight">
                Care That Begins With <span className="text-gradient-primary">Listening</span>
              </h2>
              
              <p className="text-text-secondary text-base sm:text-lg mb-8 leading-relaxed">
                Patients appreciate having their questions answered patiently, their previous records reviewed with care, and their treatment plans adapted to real life.
              </p>
              
              <div className="space-y-3.5">
                {[
                  "Unhurried consultations with ample time to discuss concerns",
                  "Detailed explanation of test results and treatment rationales",
                  "Empathetic communication in Telugu, English, and Hindi"
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-text-primary text-sm font-medium bg-white/60 px-4 py-2.5 rounded-xl border border-border-light hover:border-primary/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-soft-teal/40 to-pale-blue/30 rounded-[3rem] -rotate-2 scale-105" />
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
                  <SwiperSlide key={index} className="bg-white rounded-3xl p-7 sm:p-8 shadow-card border border-border flex flex-col justify-between">
                    <div>
                      <Quote className="w-10 h-10 text-primary/15 mb-4" />
                      <p className="text-text-primary text-sm sm:text-base leading-relaxed italic mb-6">
                        &ldquo;{item.text}&rdquo;
                      </p>
                    </div>
                    <div className="border-t border-border-light pt-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-navy font-heading text-sm sm:text-base">{item.name}</h4>
                        <p className="text-xs text-primary font-semibold">{item.condition}</p>
                      </div>
                      <div className="text-xs text-primary font-semibold bg-soft-teal/80 border border-primary/20 px-3 py-1 rounded-full">
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

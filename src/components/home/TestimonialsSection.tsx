"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    condition: "Type 2 Diabetes",
    text: "Dr. Navya completely transformed my approach to diabetes. Her personalized plan helped me bring my HbA1c down from 9.5 to 6.2 in just six months. The entire team is incredibly supportive.",
  },
  {
    name: "Rahul Verma",
    condition: "Thyroid Disorder",
    text: "After struggling with severe fatigue and weight gain for years, Dr. Navya diagnosed my hypothyroidism accurately. The treatment has given me my energy and life back. Highly recommended!",
  },
  {
    name: "Anjali Desai",
    condition: "PCOS Management",
    text: "I had visited multiple doctors for my PCOS before finding Endo Care. Their holistic approach combining medication and lifestyle changes has done wonders for my health.",
  },
  {
    name: "Vikram Singh",
    condition: "Weight Management",
    text: "The medical weight management program here is phenomenal. It's not just about losing weight, but understanding my metabolic health. I've lost 15kg sustainably.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-3 inline-block">Patient Stories</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6 leading-tight">
                Real Results From Real Patients
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Don't just take our word for it. Hear from the people whose lives have been transformed through our dedicated endocrine care.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-700">4.9/5 Average Rating</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3 scale-105" />
            <ScrollReveal direction="left">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full max-w-md mx-auto aspect-[4/3]"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col justify-between">
                    <div>
                      <Quote className="w-12 h-12 text-primary/20 mb-6" />
                      <p className="text-slate-700 text-lg leading-relaxed italic mb-6">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <h4 className="font-bold text-slate-800 font-heading">{testimonial.name}</h4>
                        <p className="text-sm text-primary font-medium">{testimonial.condition}</p>
                      </div>
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
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

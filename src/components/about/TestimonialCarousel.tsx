"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Anjali M.",
      condition: "Thyroid Patient",
      text: "Dr. Navya completely changed my life. Before visiting her, my thyroid levels were all over the place and I was constantly exhausted. Her structured treatment plan and compassionate approach helped me regain my energy and health.",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh K.",
      condition: "Type 2 Diabetes",
      text: "The best endocrinologist I have ever consulted. She takes the time to explain everything in detail, from diet to medication. Thanks to her guidance, my HBA1C has dropped from 9.2 to 6.1 in just 6 months.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya S.",
      condition: "PCOS Management",
      text: "I struggled with PCOS for years before finding Dr. Navya. She didn't just give me medication; she educated me about my body and offered a holistic lifestyle approach. I finally feel in control of my health.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 rounded-t-[4rem] md:rounded-t-[6rem] -mt-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-4">
              Patient Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real stories from patients who have transformed their health under our care.
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 relative w-full"
              >
                <div className="absolute -top-6 -left-4 md:top-8 md:left-8 text-primary/10">
                  <Quote className="w-20 h-20 rotate-180" />
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic mb-8 max-w-2xl">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold font-heading text-slate-800 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {testimonials[currentIndex].condition}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-slate-300 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

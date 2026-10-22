"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, Lightbulb, Heart, Shield, Award } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="mission-vision">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 bg-white border border-slate-200/80 text-primary font-semibold rounded-full text-xs sm:text-sm mb-4 shadow-sm">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-4 tracking-tight">
              Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Vision</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Committed to setting the benchmark for ethical, evidence-based, and compassionate endocrine care in Vizianagaram.
            </p>
          </ScrollReveal>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          
          {/* Mission */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-base flex-grow">
                To provide patient-centred, evidence-based endocrine and metabolic healthcare that prioritizes root-cause diagnosis, individualized counselling, and prevention before complications occur—empowering patients to take charge of their long-term health.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-base flex-grow">
                To be the region's foremost trusted superspeciality center for diabetes, thyroid, and endocrine disorders, celebrated for academic excellence, diagnostic integrity, and a culture of warmth where patients truly understand their health.
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* Core Values Strip */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-teal-50 rounded-2xl flex items-center justify-center mb-3 text-primary">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-slate-800 mb-1">Compassion</h4>
              <p className="text-xs sm:text-sm text-slate-500">Listening with empathy and allocating adequate time for each consultation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-sky-50 rounded-2xl flex items-center justify-center mb-3 text-sky-600">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-slate-800 mb-1">Academic Rigor</h4>
              <p className="text-xs sm:text-sm text-slate-500">Applying the latest global scientific evidence and clinical protocols.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center mb-3 text-emerald-600">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-slate-800 mb-1">Prevention First</h4>
              <p className="text-xs sm:text-sm text-slate-500">Intervening early in metabolic health before irreversible complications arise.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

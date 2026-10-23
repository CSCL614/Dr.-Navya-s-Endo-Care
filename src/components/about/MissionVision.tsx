"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, Lightbulb, Heart, Shield, Award } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-20 lg:py-24 bg-background-alt/50 border-t border-border relative overflow-hidden" id="mission-vision">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 bg-white border border-border text-primary font-semibold rounded-full text-xs sm:text-sm mb-4 shadow-2xs">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy mb-4 tracking-tight">
              Mission & <span className="text-primary">Vision</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed font-normal">
              Committed to setting the benchmark for ethical, evidence-based, and compassionate endocrine care in Vizianagaram.
            </p>
          </ScrollReveal>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          
          {/* Mission */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 h-full flex flex-col group">
              <div className="w-14 h-14 bg-soft-teal/70 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-2xs">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-4">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed text-base flex-grow">
                To provide patient-centred, evidence-based endocrine and metabolic healthcare that prioritizes root-cause diagnosis, individualized counselling, and prevention before complications occur—empowering patients to take charge of their long-term health.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 h-full flex flex-col group">
              <div className="w-14 h-14 bg-soft-teal/70 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-2xs">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-4">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed text-base flex-grow">
                To be the region's foremost trusted superspeciality center for diabetes, thyroid, and endocrine disorders, celebrated for academic excellence, diagnostic integrity, and a culture of warmth where patients truly understand their health.
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* Core Values Strip */}
        <div className="bg-white rounded-3xl p-8 border border-border shadow-card">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-soft-teal/70 rounded-2xl flex items-center justify-center mb-3 text-primary shadow-2xs">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-navy mb-1">Compassion</h4>
              <p className="text-xs sm:text-sm text-text-secondary">Listening with empathy and allocating adequate time for each consultation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-amber-50 border border-amber-200/60 rounded-2xl flex items-center justify-center mb-3 text-amber-600 shadow-2xs">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-navy mb-1">Academic Rigor</h4>
              <p className="text-xs sm:text-sm text-text-secondary">Applying the latest global scientific evidence and clinical protocols.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-emerald-50 border border-emerald-200/60 rounded-2xl flex items-center justify-center mb-3 text-emerald-600 shadow-2xs">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-navy mb-1">Prevention First</h4>
              <p className="text-xs sm:text-sm text-text-secondary">Intervening early in metabolic health before irreversible complications arise.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

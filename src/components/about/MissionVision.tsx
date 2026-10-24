"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, Lightbulb, Heart, Shield, Award } from "lucide-react";
import { CenterIconBadge } from "@/components/ui/CreativeCard";

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
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
              <div className="mb-5">
                <CenterIconBadge icon={Target} variant="teal" size="lg" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-3 group-hover:text-primary transition-colors">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base flex-grow">
                To provide patient-centred, evidence-based endocrine and metabolic healthcare that prioritizes root-cause diagnosis, individualized counselling, and prevention before complications occur—empowering patients to take charge of their long-term health.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group">
              <div className="mb-5">
                <CenterIconBadge icon={Lightbulb} variant="amber" size="lg" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-3 group-hover:text-amber-800 transition-colors">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base flex-grow">
                To be the region's foremost trusted superspeciality center for diabetes, thyroid, and endocrine disorders, celebrated for academic excellence, diagnostic integrity, and a culture of warmth where patients truly understand their health.
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* Core Values Strip */}
        <div className="bg-white rounded-3xl p-8 border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center group">
              <div className="mb-3">
                <CenterIconBadge icon={Heart} variant="rose" size="md" />
              </div>
              <h4 className="text-lg font-bold font-heading text-navy mb-1 group-hover:text-rose-700 transition-colors">Compassion</h4>
              <p className="text-xs sm:text-sm text-text-secondary">Listening with empathy and allocating adequate time for each consultation.</p>
            </div>
            
            <div className="text-center flex flex-col items-center group">
              <div className="mb-3">
                <CenterIconBadge icon={Award} variant="amber" size="md" />
              </div>
              <h4 className="text-lg font-bold font-heading text-navy mb-1 group-hover:text-amber-700 transition-colors">Academic Rigor</h4>
              <p className="text-xs sm:text-sm text-text-secondary">Applying the latest global scientific evidence and clinical protocols.</p>
            </div>

            <div className="text-center flex flex-col items-center group">
              <div className="mb-3">
                <CenterIconBadge icon={Shield} variant="emerald" size="md" />
              </div>
              <h4 className="text-lg font-bold font-heading text-navy mb-1 group-hover:text-emerald-700 transition-colors">Prevention First</h4>
              <p className="text-xs sm:text-sm text-text-secondary">Intervening early in metabolic health before irreversible complications arise.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

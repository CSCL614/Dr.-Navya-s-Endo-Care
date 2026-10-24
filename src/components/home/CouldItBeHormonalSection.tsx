"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  HelpCircle, ArrowRight, Quote, Scale, CalendarHeart, Sparkles, 
  Activity, LineChart, Clock, Bone, HeartPulse, Droplets, ShieldAlert, FlaskConical, Moon, LucideIcon 
} from "lucide-react";
import { CenterIconBadge } from "@/components/ui/CreativeCard";
import { useAppointment } from "@/context/AppointmentContext";
import { doctorData } from "@/data/doctorData";

export function CouldItBeHormonalSection() {
  const { openModal } = useAppointment();

  const symptomIcons: Array<{ icon: LucideIcon; variant: "teal" | "navy" | "mint" | "amber" | "emerald" | "sky" | "rose" | "indigo" }> = [
    { icon: Scale, variant: "amber" },
    { icon: CalendarHeart, variant: "rose" },
    { icon: Sparkles, variant: "mint" },
    { icon: Activity, variant: "teal" },
    { icon: LineChart, variant: "sky" },
    { icon: Clock, variant: "indigo" },
    { icon: Bone, variant: "amber" },
    { icon: HeartPulse, variant: "rose" },
    { icon: Droplets, variant: "teal" },
    { icon: ShieldAlert, variant: "amber" },
    { icon: FlaskConical, variant: "sky" },
    { icon: Moon, variant: "indigo" },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-pale-blue/30 to-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="could-it-be-hormonal">
      {/* Soft background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-pale-blue/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <div className="badge-mint mb-3 inline-flex">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span>Symptom Awareness & Evaluation</span>
            </div>
            
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-navy leading-tight mb-3 tracking-tight">
              Could It Be <span className="text-highlight-teal">Hormonal?</span>
            </h2>
            
            <p className="text-xs sm:text-sm lg:text-base text-[#344654] leading-relaxed">
              Because hormones regulate energy, metabolism, fluid balance, growth, and reproduction throughout the body, hormonal imbalances often manifest through a cluster of subtle, overlapping symptoms.
            </p>
          </ScrollReveal>
        </div>

        {/* Symptoms Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10 sm:mb-14">
          {doctorData.symptomsList.map((item, index) => {
            const config = symptomIcons[index % symptomIcons.length];
            return (
              <ScrollReveal key={index} delay={index * 0.03} direction="up">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3EBF0] shadow-card hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-pale-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center h-full w-full">
                    {/* Centered Icon Badge */}
                    <CenterIconBadge 
                      icon={config.icon}
                      variant={config.variant}
                      size="lg"
                      className="mb-4"
                    />

                    <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-1 block">
                      Symptom Indicator #{String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold font-heading text-navy leading-snug mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#344654] leading-relaxed mb-4 flex-grow">
                      {item.detail}
                    </p>

                    <div className="pt-3 border-t border-[#E3EBF0] text-[11px] text-text-muted w-full text-center">
                      <span className="font-semibold text-primary">Possible Endocrine Links:</span> {item.possibleCauses}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Key Message Callout Box & Primary CTA */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3EBF0] shadow-card text-center max-w-3xl mx-auto relative overflow-hidden">
            <Quote className="w-8 h-8 text-primary/20 mx-auto mb-2" />
            
            <blockquote className="text-lg sm:text-xl font-bold font-heading text-navy leading-snug mb-2">
              &ldquo;When symptoms do not seem to fit together, a careful endocrine evaluation can help connect the dots.&rdquo;
            </blockquote>
            
            <p className="text-xs sm:text-sm text-[#344654] max-w-xl mx-auto mb-5 leading-relaxed">
              *Experiencing a symptom does not automatically mean a hormone disorder exists, but an organized evaluation rules out silent metabolic drivers and restores peace of mind.
            </p>

            <button
              onClick={openModal}
              className="btn-primary group text-xs sm:text-sm py-3 px-6 touch-target"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

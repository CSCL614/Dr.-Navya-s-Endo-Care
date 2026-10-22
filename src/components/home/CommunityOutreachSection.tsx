"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Users, Calendar, ArrowRight, CheckCircle2, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { doctorData } from "@/data/doctorData";

export function CommunityOutreachSection() {
  const outreach = doctorData.communityOutreach;

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="community-outreach">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        <div className="bg-gradient-to-br from-slate-50 via-teal-50/30 to-sky-50/20 rounded-[2.5rem] p-8 md:p-12 lg:p-14 border border-slate-100 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-teal-200/80 rounded-full text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide shadow-xs">
                  <HeartHandshake className="w-4 h-4 text-primary" />
                  Community Commitment
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 leading-tight">
                  {outreach.headline}
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {outreach.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {outreach.initiatives.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white/80 p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold shadow-soft text-sm transition-all group"
                  >
                    <span>View Health Camps & Events</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs text-slate-500">
                    Serving Vizianagaram & surrounding communities
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Information Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-3xl p-8 border border-teal-100 shadow-lg space-y-6">
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-primary flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Clinic Milestone</span>
                      <h4 className="text-lg font-bold font-heading text-slate-800">
                        Inaugurated on 29 April 2024
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    From regular World Diabetes Day camps to anniversary outreach programs, Dr. Navya’s EndoCare conducts targeted screenings to detect hidden diabetes, thyroid irregularities, and neuropathic risks early in the community.
                  </p>

                  <div className="bg-teal-50/70 p-4 rounded-2xl border border-teal-100/60">
                    <div className="text-xs font-bold text-teal-800 mb-1">Our Outreach Focus:</div>
                    <p className="text-[11px] text-teal-700 leading-relaxed">
                      Free preliminary glucose screenings, thyroid assessments, dietician consultations, and biothesiometry foot evaluations for high-risk individuals.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

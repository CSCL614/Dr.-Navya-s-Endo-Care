"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Heart, Palette, BookOpen, Compass, GraduationCap, Languages } from "lucide-react";
import { doctorData } from "@/data/doctorData";

export function PersonalSide() {
  const interestIcons = [Heart, Palette, BookOpen, GraduationCap, Compass];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="personal-side">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 bg-pink-50 border border-pink-100 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-xs sm:text-sm font-semibold text-pink-700 tracking-wider uppercase">Beyond the Clinic</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-4 tracking-tight">
              The Personal Side of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Dr. Navya</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {doctorData.personalSide.introduction}
            </p>
          </ScrollReveal>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Interests (Left) */}
          <div className="md:col-span-7 bg-slate-50/80 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between">
            <ScrollReveal direction="right">
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-800 mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
                  Passions & Life Perspective
                </h3>
                
                <div className="space-y-4">
                  {doctorData.personalSide.interests.map((item, index) => {
                    const Icon = interestIcons[index % interestIcons.length];
                    return (
                      <div key={index} className="flex items-start gap-3.5 bg-white p-3.5 rounded-2xl border border-slate-100/80 shadow-xs">
                        <div className="w-9 h-9 rounded-xl bg-teal-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <p className="text-sm text-slate-700 leading-snug pt-1">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="mt-6 pt-6 border-t border-slate-200 text-xs sm:text-sm text-slate-500 italic">
                “{doctorData.personalSide.closingNote}”
              </p>
            </ScrollReveal>
          </div>

          {/* Languages & Communication (Right) */}
          <div className="md:col-span-5 bg-gradient-to-br from-teal-500 to-primary-dark text-white rounded-3xl p-8 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <ScrollReveal direction="left">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold font-heading mb-3">
                  Comfortable Communication
                </h3>
                <p className="text-sm text-teal-100 leading-relaxed mb-6 font-light">
                  Effective healthcare starts with feeling heard in the language you are most comfortable speaking. Dr. Navya communicates warmly with patients and families across:
                </p>

                <div className="space-y-3">
                  {doctorData.personalSide.languages.map((lang, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 flex items-center justify-between border border-white/15">
                      <span className="font-semibold text-sm">{lang.language}</span>
                      <span className="text-xs bg-white/20 text-teal-100 px-3 py-1 rounded-full font-medium">
                        {lang.fluency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-xs text-teal-100/90 font-light relative z-10">
                Patients from Vizianagaram and neighboring districts feel immediately at ease sharing their health concerns in their native tongue.
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}

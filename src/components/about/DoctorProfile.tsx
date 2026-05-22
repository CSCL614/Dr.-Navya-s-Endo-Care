"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, GraduationCap, Microscope, Calendar, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

export function DoctorProfile() {
  const stats = [
    { label: "Years Experience", value: "15+", icon: Calendar },
    { label: "Happy Patients", value: "10,000+", icon: Star },
    { label: "Successful Treatments", value: "8,500+", icon: CheckCircle2 },
    { label: "Specializations", value: "4", icon: Microscope },
  ];

  const qualifications = [
    { title: "MBBS", desc: "Top-tier Medical College", icon: GraduationCap },
    { title: "MD (General Medicine)", desc: "Gold Medalist", icon: Award },
    { title: "DM (Endocrinology)", desc: "Specialized Training", icon: Microscope },
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-2 mb-4 shadow-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide">MEET THE DOCTOR</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6">
              Expertise You Can Trust
            </h2>
            <p className="text-lg text-slate-600">
              Dr. Navya Sharma is a leading endocrinologist dedicated to providing the highest standard of care through a blend of advanced medical science and deep compassion.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Doctor Image & Badges */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2.5rem] -rotate-3 scale-105" />
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Doctor Bio & Info */}
          <div className="lg:col-span-7 space-y-10">
            
            <ScrollReveal direction="left">
              <div>
                <h3 className="text-3xl font-bold font-heading text-slate-800 mb-2">Dr. Navya Sharma</h3>
                <p className="text-xl text-primary font-medium mb-6 border-b border-slate-200 pb-6">
                  MBBS, MD, DM (Endocrinology)
                </p>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p>
                    With over 15 years of dedicated practice in the field of Endocrinology, Dr. Navya Sharma has transformed the lives of thousands of patients struggling with complex hormonal imbalances, diabetes, and thyroid disorders.
                  </p>
                  <p>
                    Her patient-care philosophy centers on holistic healing—treating the root cause rather than just the symptoms. She believes in empowering her patients through deep medical education, ensuring they understand their bodies and the rationale behind every treatment plan.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="up">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex items-start gap-4">
                    <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-heading text-slate-800 mb-1">{stat.value}</div>
                      <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Qualifications */}
            <div>
              <ScrollReveal direction="up" delay={0.2}>
                <h4 className="text-xl font-bold font-heading text-slate-800 mb-6">Education & Certifications</h4>
              </ScrollReveal>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <ScrollReveal key={index} delay={0.3 + (index * 0.1)} direction="up">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-primary/30 transition-colors">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-secondary">
                        <qual.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800">{qual.title}</h5>
                        <p className="text-sm text-slate-500">{qual.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

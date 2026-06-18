"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, GraduationCap, Microscope, Calendar, CheckCircle2, Star, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function DoctorProfile() {
  const stats = [
    { label: "Years Experience", value: "6+", icon: Calendar },
    { label: "Happy Patients", value: "5,000+", icon: Star },
    { label: "Successful Treatments", value: "4,500+", icon: CheckCircle2 },
    { label: "Specializations", value: "6+", icon: Microscope },
  ];

  const qualifications = [
    { title: "DM (Endocrinology)", desc: "University Topper, YSRUHS", icon: Microscope },
    { title: "MD (General Medicine)", desc: "Andhra Medical College", icon: Award },
    { title: "MBBS", desc: "3 Gold Medals, Best Outgoing Student", icon: GraduationCap },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Premium Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-full px-5 py-2.5 mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Chief Endocrinologist</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-800 mb-6 tracking-tight">
              Expertise You Can Trust
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Dedicated to achieving realistic health goals through evidence-based, compassionate care for complex hormonal and metabolic disorders.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Doctor Image & Badges (Left Side) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right">
              <div className="relative z-10">
                {/* Premium Image Frame */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border-[6px] border-white bg-slate-50 z-20">
                  <div className="absolute inset-0 bg-[url('https://diabetes.co.in/media/uploads/2024/06/dr-navya-sruthi-mandapati.jpg')] bg-cover bg-center bg-no-repeat" />
                </div>
                
                {/* Background Accent */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-teal-400/20 rounded-3xl -rotate-3 z-10 blur-sm" />
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-teal-400/10 rounded-3xl rotate-2 z-0" />

                {/* Floating Experience Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 lg:-right-10 bg-white/90 backdrop-blur-xl border border-white p-5 rounded-2xl shadow-xl shadow-slate-200/60 z-30 flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl">
                    6+
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years of</p>
                    <p className="text-lg font-bold text-slate-800 leading-tight">Experience</p>
                  </div>
                </motion.div>
                
                {/* Floating Highlight Badge */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-12 -left-6 lg:-left-10 bg-white/90 backdrop-blur-xl border border-white p-4 rounded-xl shadow-xl shadow-slate-200/50 z-30 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-500">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">University Topper</p>
                    <p className="text-sm font-bold text-slate-800">Gold Medalist</p>
                  </div>
                </motion.div>

              </div>
            </ScrollReveal>
          </div>

          {/* Doctor Bio & Info (Right Side) */}
          <div className="lg:col-span-7 space-y-10">
            
            <ScrollReveal direction="left">
              <div className="bg-white/60 backdrop-blur-lg border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                {/* Subtle top gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-teal-400 to-primary/50" />
                
                <h3 className="text-3xl lg:text-4xl font-bold font-heading text-slate-800 mb-2">Dr. Navya Sruthi Mandapati</h3>
                <p className="text-lg lg:text-xl text-primary font-medium mb-6">
                  MBBS, MD (Gen. Med), DM (Endocrinologist)
                </p>
                
                <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed">
                  <p>
                    Dr. Navya Sruthi Mandapati is a highly accomplished endocrinologist dedicated to achieving realistic health goals through evidence-based approaches for managing acute and chronic endocrine disorders. 
                  </p>
                  <p>
                    With an exceptional academic record, including three gold medals, the Best Outgoing Student award in MBBS, and securing the University Topper position in DM Endocrinology, she brings an intellectually curious and proactive mindset to patient care. Her human-centered philosophy focuses on improving patient health with personalized, advanced medical strategies that empower patients to take control of their well-being.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Qualifications Glass Cards */}
            <div>
              <ScrollReveal direction="up" delay={0.2}>
                <h4 className="text-xl font-bold font-heading text-slate-800 mb-6 pl-2 border-l-4 border-primary">Academic Excellence</h4>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {qualifications.map((qual, index) => (
                  <ScrollReveal key={index} delay={0.3 + (index * 0.1)} direction="up">
                    <div className="flex items-start gap-4 bg-slate-50/80 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 hover:-translate-y-1 transition-all group">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                        <qual.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 text-lg mb-1">{qual.title}</h5>
                        <p className="text-sm text-slate-500 leading-snug">{qual.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-100">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="up">
                  <div className="text-center group">
                    <div className="mx-auto w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-3 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold font-heading text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

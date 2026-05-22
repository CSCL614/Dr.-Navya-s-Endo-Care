"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, ArrowRight, Bone, Scale, ActivitySquare, Droplets, Baby, 
  Brain, Apple, Stethoscope, HeartPulse, LineChart, Syringe 
} from "lucide-react";
import Link from "next/link";
import { useAppointment } from "@/context/AppointmentContext";

const services = [
  {
    id: "diabetes",
    icon: Activity,
    title: "Diabetes Management",
    description: "Comprehensive care programs for Type 1, Type 2, and Gestational Diabetes. We focus on advanced monitoring, personalized diet plans, and the latest medical therapies to maintain optimal blood sugar levels.",
    color: "bg-blue-50 text-blue-500",
  },
  {
    id: "thyroid",
    icon: ActivitySquare,
    title: "Thyroid Disorder Treatment",
    description: "Expert diagnosis and treatment for Hypothyroidism, Hyperthyroidism, Thyroid Nodules, and Hashimoto's disease. We help restore your metabolic rate and energy levels.",
    color: "bg-purple-50 text-purple-500",
  },
  {
    id: "pcos",
    icon: Baby,
    title: "PCOS Management",
    description: "A multidisciplinary approach to managing Polycystic Ovary Syndrome. We address irregular periods, fertility issues, weight management, and hirsutism through tailored protocols.",
    color: "bg-pink-50 text-pink-500",
  },
  {
    id: "hormonal",
    icon: Droplets,
    title: "Hormonal Imbalance Treatment",
    description: "Specialized therapy for restoring optimal hormonal balance in both men and women, addressing fatigue, mood swings, sleep disturbances, and libido issues.",
    color: "bg-teal-50 text-teal-500",
  },
  {
    id: "obesity",
    icon: Scale,
    title: "Obesity & Weight Management",
    description: "Medical weight management programs that look beyond calories. We address the underlying metabolic and endocrine causes of weight gain to provide sustainable solutions.",
    color: "bg-emerald-50 text-emerald-500",
  },
  {
    id: "bone",
    icon: Bone,
    title: "Osteoporosis Care",
    description: "Prevention and management of Osteoporosis and other calcium/bone metabolism disorders. We help strengthen bones and reduce fracture risks.",
    color: "bg-orange-50 text-orange-500",
  },
  {
    id: "pituitary",
    icon: Brain,
    title: "Pituitary Disorders",
    description: "Advanced diagnosis and care for pituitary adenomas, prolactinomas, and Cushing's disease, managing the master gland's complex functions.",
    color: "bg-indigo-50 text-indigo-500",
  },
  {
    id: "adrenal",
    icon: HeartPulse,
    title: "Adrenal Disorders",
    description: "Treatment for adrenal insufficiency, Addison's disease, and adrenal tumors, helping regulate stress response and blood pressure.",
    color: "bg-red-50 text-red-500",
  },
  {
    id: "metabolic",
    icon: LineChart,
    title: "Metabolic Disorders",
    description: "Comprehensive evaluation and management of metabolic syndrome, lipid disorders, and complex metabolic imbalances.",
    color: "bg-cyan-50 text-cyan-500",
  },
  {
    id: "insulin",
    icon: Syringe,
    title: "Insulin Therapy Guidance",
    description: "Expert guidance on initiating and managing insulin therapy, including the use of insulin pumps and continuous glucose monitors (CGMs).",
    color: "bg-sky-50 text-sky-500",
  },
  {
    id: "lifestyle",
    icon: Apple,
    title: "Lifestyle Counseling",
    description: "Integrated nutritional and lifestyle coaching to complement medical treatments, empowering you to make sustainable health choices.",
    color: "bg-green-50 text-green-500",
  },
  {
    id: "consultation",
    icon: Stethoscope,
    title: "Endocrine Consultation",
    description: "Thorough general endocrine evaluations and second opinions for complex or undiagnosed hormonal symptoms.",
    color: "bg-slate-100 text-slate-600",
  },
];

export default function ServicesPage() {
  const { openModal } = useAppointment();

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <span className="inline-block py-2 px-4 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6 border border-primary/20">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-6 leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Endocrine</span> Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We provide advanced, evidence-based therapies for a wide spectrum of endocrine and metabolic conditions, tailored to your unique health profile.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={(index % 3) * 0.1}>
                <div 
                  id={service.id}
                  className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group h-full flex flex-col scroll-mt-32"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 font-heading group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <button 
                    onClick={openModal}
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-slate-50 text-slate-700 font-semibold group-hover:bg-primary group-hover:text-white transition-colors mt-auto"
                  >
                    Book Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Need specialized care?</h2>
              <p className="text-lg text-white/90 mb-8">
                If you are experiencing unexplained weight changes, fatigue, or hormonal issues, don't wait. Our expert team is here to help you find the answers and the right treatment path.
              </p>
              <button 
                onClick={openModal}
                className="px-8 py-4 bg-white text-primary-dark font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Schedule An Appointment
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

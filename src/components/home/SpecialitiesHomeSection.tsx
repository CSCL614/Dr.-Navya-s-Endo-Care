"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Activity, ArrowRight, ActivitySquare, Droplets, Baby, Scale, CheckCircle2, LucideIcon 
} from "lucide-react";
import Link from "next/link";
import { CenterIconBadge, IconBadgeVariant } from "@/components/ui/CreativeCard";

interface SpecialtyItem {
  id: string;
  title: string;
  teluguTitle: string;
  description: string;
  href: string;
  icon: LucideIcon;
  variant: IconBadgeVariant;
  keyPoints: string[];
}

const mainSpecialties: SpecialtyItem[] = [
  {
    id: "diabetes-care",
    title: "Diabetes Care",
    teluguTitle: "డయాబెటిస్ కేర్",
    description: "Complete clinical care for Type 1, Type 2, and Gestational Diabetes, with complication prevention and blood sugar monitoring.",
    href: "/diabetes-care",
    icon: Activity,
    variant: "teal",
    keyPoints: ["Type 1 & Type 2 Diabetes", "Gestational Diabetes (Pregnancy)", "Diabetic Foot Screening", "HbA1c & Glucose Monitoring"]
  },
  {
    id: "thyroid-disorders",
    title: "Thyroid Disorders",
    teluguTitle: "థైరాయిడ్ సమస్యలు",
    description: "Accurate diagnosis and personalized therapy for hypothyroidism, hyperthyroidism, thyroid nodules, and pregnancy thyroid health.",
    href: "/thyroid-care",
    icon: ActivitySquare,
    variant: "sky",
    keyPoints: ["Hypothyroidism (Underactive)", "Hyperthyroidism (Overactive)", "Thyroid Nodules & Goitre", "Pregnancy Thyroid Care"]
  },
  {
    id: "hormonal-disorders",
    title: "Hormonal Disorders",
    teluguTitle: "హార్మోన్ల సమస్యలు",
    description: "Expert evaluation and balancing for PCOS, irregular periods, hirsutism, adrenal disorders, and pituitary gland health.",
    href: "/pcos-womens-health",
    icon: Droplets,
    variant: "rose",
    keyPoints: ["Polycystic Ovary Syndrome (PCOS)", "Menstrual Irregularities", "Hormonal Imbalance & Fatigue", "Pituitary & Adrenal Gland Care"]
  },
  {
    id: "adult-paediatric",
    title: "Adult & Paediatric Endocrinology",
    teluguTitle: "పెద్దలు & పిల్లల ఎండోక్రినాలజీ",
    description: "Dedicated hormone care across all life stages, including slow child growth, short stature, and early or delayed puberty.",
    href: "/paediatric-endocrinology",
    icon: Baby,
    variant: "mint",
    keyPoints: ["Short Stature & Growth Delays", "Early or Delayed Puberty", "Juvenile Hormone Disorders", "Lifelong Hormone Wellness"]
  },
  {
    id: "obesity-management",
    title: "Obesity Management",
    teluguTitle: "ఊబకాయం నిర్వహణ",
    description: "Science-based medical weight management addressing insulin resistance. Joint Wednesday clinic with our Clinical Dietician.",
    href: "/obesity-clinic",
    icon: Scale,
    variant: "amber",
    keyPoints: ["Insulin Resistance & Metabolism", "Medical Weight Management", "Wednesday Dedicated Clinic", "Clinical Dietician Consultation"]
  }
];

export function SpecialitiesHomeSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20" id="specialties">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-soft-teal/20 rounded-full blur-3xl pointer-events-none -translate-y-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-pale-blue/30 rounded-full blur-3xl pointer-events-none translate-y-1/3" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14 gap-4">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="badge-mint mb-2.5">
                Primary Clinical Focus
              </div>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-bold font-heading text-navy leading-tight mb-2">
                Main <span className="text-highlight-teal">Specialties</span> & Services
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[#344654] leading-relaxed">
                Comprehensive, evidence-based care delivered across five primary endocrine disciplines for adults and children in Vizianagaram.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left">
            <Link
              href="/services"
              className="inline-flex items-center text-[#167C80] font-bold hover:text-[#126466] transition-colors duration-200 group text-xs sm:text-sm whitespace-nowrap bg-soft-teal/60 px-4.5 py-2.5 rounded-full border border-primary/20 hover:bg-soft-teal touch-target shadow-2xs"
            >
              <span>View All Services</span>
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 5 Creative Centered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {mainSpecialties.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05} direction="up">
              <Link href={item.href} className="block h-full group">
                <div className="relative rounded-3xl p-6 sm:p-7 bg-white border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col items-center text-center card-interactive-glow">
                  
                  {/* Creative Centered Icon Badge */}
                  <div className="mb-4">
                    <CenterIconBadge 
                      icon={item.icon} 
                      variant={item.variant} 
                      size="md" 
                    />
                  </div>

                  {/* Heading & Telugu Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-navy mb-1 group-hover:text-primary transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs font-bold text-primary/90 font-sans mb-3">
                    {item.teluguTitle}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#344654] leading-relaxed mb-5 flex-grow text-center">
                    {item.description}
                  </p>

                  {/* Key Conditions / Focus Areas (Aligned nicely) */}
                  <div className="w-full space-y-1.5 pt-3.5 border-t border-[#E3EBF0] text-xs text-[#344654] text-left mb-4">
                    {item.keyPoints.slice(0, 3).map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="line-clamp-1 text-slate-700 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Centered Action Link with Arrow */}
                  <div className="pt-2 w-full flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-dark transition-colors">
                      <span>Explore Speciality</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

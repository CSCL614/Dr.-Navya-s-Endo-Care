import { HeroSection } from "@/components/home/HeroSection";
import { ServicesMarquee } from "@/components/ui/ServicesMarquee";
import { DiscoverEndoCareSection } from "@/components/home/DiscoverEndoCareSection";
import { StatsSection } from "@/components/home/StatsSection";
import { SpecialitiesHomeSection } from "@/components/home/SpecialitiesHomeSection";
import { ClinicFacilitiesSection } from "@/components/home/ClinicFacilitiesSection";
import { ObesityClinicBanner } from "@/components/home/ObesityClinicBanner";
import { CouldItBeHormonalSection } from "@/components/home/CouldItBeHormonalSection";
import { RootCauseMetabolicSection } from "@/components/home/RootCauseMetabolicSection";
import { PracticalLifestyleSection } from "@/components/home/PracticalLifestyleSection";
import { DoctorIntroSection } from "@/components/home/DoctorIntroSection";
import { WhyChooseHomeSection } from "@/components/home/WhyChooseHomeSection";
import { PatientEducationHomeSection } from "@/components/home/PatientEducationHomeSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Services Marquee Banner */}
      <ServicesMarquee />

      {/* Section 2 — Discover Dr. Navya’s EndoCare */}
      <DiscoverEndoCareSection />

      {/* Verified Academic & Milestone Stats */}
      <StatsSection />

      {/* Section 3 — Specialities and Services */}
      <SpecialitiesHomeSection />

      {/* Compact Clinic Facilities Preview */}
      <ClinicFacilitiesSection isCompact={true} />

      {/* Section 4 — Dedicated Obesity Clinic (Wed 4-6 PM) */}
      <ObesityClinicBanner />

      {/* Section 5 — Could It Be Hormonal? */}
      <CouldItBeHormonalSection />

      {/* Section 6 — Root-Cause and Metabolic Health */}
      <RootCauseMetabolicSection />

      {/* Section 7 — Practical Lifestyle Guidance */}
      <PracticalLifestyleSection />

      {/* Section 8 — Meet Dr. Navya */}
      <DoctorIntroSection />

      {/* Section 9 — Why Choose Dr. Navya’s EndoCare? */}
      <WhyChooseHomeSection />

      {/* Section 10 — Patient Education */}
      <PatientEducationHomeSection />

      {/* Section 11 — Patient Stories & Feedback */}
      <TestimonialsSection />

      {/* Section 12 — Final CTA */}
      <FinalCtaSection />
    </div>
  );
}

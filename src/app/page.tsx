import { HeroSection } from "@/components/home/HeroSection";
import { ServicesMarquee } from "@/components/ui/ServicesMarquee";
import { DiscoverEndoCareSection } from "@/components/home/DiscoverEndoCareSection";
import { StatsSection } from "@/components/home/StatsSection";
import { SpecialitiesHomeSection } from "@/components/home/SpecialitiesHomeSection";
import { ClinicFacilitiesSection } from "@/components/home/ClinicFacilitiesSection";
import { HomeGallerySection } from "@/components/home/HomeGallerySection";
import { TransformationsSection } from "@/components/home/TransformationsSection";
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
      {/* Section 1 — Hero with 3D Interactive Medical Animation */}
      <HeroSection />

      {/* Services Marquee Banner */}
      <ServicesMarquee />

      {/* Section 2 — Discover Dr. Navya’s EndoCare */}
      <DiscoverEndoCareSection />

      {/* Verified Academic & Milestone Stats */}
      <StatsSection />

      {/* Section 3 — Specialities and Services */}
      <SpecialitiesHomeSection />

      {/* Section 4 — Integrated Clinic Facilities & Labs */}
      <ClinicFacilitiesSection />

      {/* Section 5 — Clinic Photo Gallery (Diabetic Foot Suite & Facilities) */}
      <HomeGallerySection />

      {/* Section 6 — Real Patient Results & Recovery (Before & After) */}
      <TransformationsSection />

      {/* Section 7 — Dedicated Obesity Clinic (Wed 4-6 PM) */}
      <ObesityClinicBanner />

      {/* Section 8 — Could It Be Hormonal? */}
      <CouldItBeHormonalSection />

      {/* Section 9 — Root-Cause and Metabolic Health */}
      <RootCauseMetabolicSection />

      {/* Section 10 — Practical Lifestyle Guidance */}
      <PracticalLifestyleSection />

      {/* Section 11 — Meet Dr. Navya */}
      <DoctorIntroSection />

      {/* Section 12 — Why Choose Dr. Navya’s EndoCare? */}
      <WhyChooseHomeSection />

      {/* Section 13 — Patient Education */}
      <PatientEducationHomeSection />

      {/* Section 14 — Patient Stories & Feedback */}
      <TestimonialsSection />

      {/* Section 15 — Final CTA */}
      <FinalCtaSection />
    </div>
  );
}

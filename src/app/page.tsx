import { HeroSection } from "@/components/home/HeroSection";
import { ServicesMarquee } from "@/components/ui/ServicesMarquee";
import { SpecialitiesHomeSection } from "@/components/home/SpecialitiesHomeSection";
import { DoctorIntroSection } from "@/components/home/DoctorIntroSection";
import { WhyChooseHomeSection } from "@/components/home/WhyChooseHomeSection";
import { ClinicFacilitiesSection } from "@/components/home/ClinicFacilitiesSection";
import { ObesityClinicBanner } from "@/components/home/ObesityClinicBanner";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white w-full">
      {/* Section 2: Clear Hero Section */}
      <HeroSection />

      {/* Trust Strip */}
      <ServicesMarquee />

      {/* Section 3: Main Specialties (Diabetes Care, Thyroid Disorders, Hormonal Disorders, Adult & Paediatric Endocrinology, Obesity Management) */}
      <SpecialitiesHomeSection />

      {/* Section 4: Meet the Doctor (Dr. Navya Sruthi Mandapati — MBBS, MD, DM) */}
      <DoctorIntroSection />

      {/* Section 5: Why Choose Our Clinic? */}
      <WhyChooseHomeSection />

      {/* Section 6: Clinic Facilities (Diabetic Foot Lab, Laboratory Services, 24/7 Pharmacy, Obesity Clinics) */}
      <ClinicFacilitiesSection />

      {/* Section 7: Obesity Clinic Highlight (Every Wednesday | 4:00 PM – 6:00 PM) */}
      <ObesityClinicBanner />

      {/* Section 8: Contact & Appointment (8464070196, Address, Map, WhatsApp, Booking) */}
      <FinalCtaSection />
    </div>
  );
}

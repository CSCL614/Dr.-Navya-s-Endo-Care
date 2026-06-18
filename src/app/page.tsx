import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { TreatmentsSection } from "@/components/home/TreatmentsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServicesMarquee } from "@/components/ui/ServicesMarquee";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesMarquee />
      <StatsSection />
      <ExpertiseSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  );
}

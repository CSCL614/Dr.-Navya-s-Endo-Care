import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { TreatmentsSection } from "@/components/home/TreatmentsSection";
import { TransformationsSection } from "@/components/home/TransformationsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <ExpertiseSection />
      <TreatmentsSection />
      <TransformationsSection />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  );
}

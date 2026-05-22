"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { DoctorProfile } from "@/components/about/DoctorProfile";
import { EndocrinologyEdu } from "@/components/about/EndocrinologyEdu";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { MissionVision } from "@/components/about/MissionVision";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { TestimonialCarousel } from "@/components/about/TestimonialCarousel";

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white selection:bg-primary/20">
      <AboutHero />
      <DoctorProfile />
      <EndocrinologyEdu />
      <WhyChooseUs />
      <MissionVision />
      <JourneyTimeline />
      <TestimonialCarousel />
    </div>
  );
}

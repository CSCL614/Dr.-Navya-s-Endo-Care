"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { DoctorProfile } from "@/components/about/DoctorProfile";
import { WhyChoseEndocrinology } from "@/components/about/WhyChoseEndocrinology";
import { ApproachToCare } from "@/components/about/ApproachToCare";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { PersonalSide } from "@/components/about/PersonalSide";
import { MissionVision } from "@/components/about/MissionVision";

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white selection:bg-primary/20">
      <AboutHero />
      <DoctorProfile />
      <WhyChoseEndocrinology />
      <ApproachToCare />
      <JourneyTimeline />
      <PersonalSide />
      <MissionVision />
    </div>
  );
}

import AboutPage from "@/app/about/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Navya Sruthi Mandapati | Endocrinologist Vizianagaram",
  description:
    "Meet Dr. Navya Sruthi Mandapati — MBBS, MD (General Medicine), DM (Endocrinology, University Topper). Dedicated adult and paediatric endocrine superspecialist in Vizianagaram.",
};

export default function AboutDrNavyaPage() {
  return <AboutPage />;
}

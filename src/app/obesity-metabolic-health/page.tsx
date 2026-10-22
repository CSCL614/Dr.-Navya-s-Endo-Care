import ObesityClinicPage from "@/app/obesity-clinic/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obesity & Metabolic Health Clinic | Dr. Navya’s EndoCare Vizianagaram",
  description:
    "Evidence-based medical weight management and metabolic health in Vizianagaram. Joint consultation with Endocrinologist Dr. Navya and Dietician Dr. Syamini Siripuram every Wednesday 4-6 PM.",
};

export default function ObesityMetabolicHealthRoute() {
  return <ObesityClinicPage />;
}

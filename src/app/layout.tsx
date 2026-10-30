import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AppointmentProvider } from "@/context/AppointmentContext";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { EventPopup } from "@/components/ui/EventPopup";
import { GlobalBackground } from "@/components/ui/GlobalBackground";
import { ScrollGlowEffects } from "@/components/ui/ScrollGlowEffects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Navya’s EndoCare — Diabetes, Thyroid & Endocrine Superspeciality Center, Vizianagaram",
  description: "Dr. Navya Sruthi Mandapati, MBBS, MD, DM (Endocrinology) — University Topper. Comprehensive adult & paediatric care for diabetes, thyroid, obesity clinic, PCOS, growth, and hormone disorders in Vizianagaram.",
  keywords: "Endocrinologist Vizianagaram, Dr Navya Sruthi Mandapati, Diabetes Doctor Vizianagaram, Thyroid Specialist Vizianagaram, Paediatric Endocrinology Vizianagaram, Obesity Clinic Vizianagaram, PCOS Treatment, EndoCare Vizianagaram",
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "Physician"],
  "name": "Dr. Navya’s EndoCare — Diabetes, Thyroid & Endocrine Superspeciality Center",
  "alternateName": "Dr. Navya's EndoCare",
  "description": "Adult and paediatric endocrine superspeciality clinic led by Dr. Navya Sruthi Mandapati, MBBS, MD, DM (Endocrinology) — University Topper in Vizianagaram.",
  "url": "https://drnavyaendocare.com",
  "telephone": "+918464070196",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ajay Children’s Hospital junction, Phool Bagh Rd, Ambati Satram Area",
    "addressLocality": "Vizianagaram",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "535002",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "medicalSpecialty": [
    "Endocrinology",
    "PediatricEndocrinology"
  ]
};

import { IntroProvider } from "@/context/IntroContext";
import { IntroOverlay } from "@/components/ui/IntroOverlay";
import { IntroPageReveal } from "@/components/ui/IntroPageReveal";
import { MobileActionDock } from "@/components/layout/MobileActionDock";
import { LogoPageTransitionProvider } from "@/components/providers/LogoPageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans text-slate-800 bg-transparent relative antialiased"
        suppressHydrationWarning
      >
        <IntroProvider>
          <IntroOverlay />
          <IntroPageReveal>
            <SmoothScrollProvider>
              <AppointmentProvider>
                <GlobalBackground />
                <ScrollGlowEffects />
                <LogoPageTransitionProvider>
                  <Navbar />
                  <main className="flex-grow pt-[70px] sm:pt-[76px] relative z-10 flex flex-col">
                    {children}
                  </main>
                  <Footer />
                  <FloatingWhatsApp />
                  <MobileActionDock />
                  <EventPopup />
                </LogoPageTransitionProvider>
              </AppointmentProvider>
            </SmoothScrollProvider>
          </IntroPageReveal>
        </IntroProvider>
      </body>
    </html>
  );
}

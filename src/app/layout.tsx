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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import { IntroProvider } from "@/context/IntroContext";
import { IntroOverlay } from "@/components/ui/IntroOverlay";

export const metadata: Metadata = {
  title: "Dr. Navya's Endo Care | Diabetes & Endocrine Superspeciality Center",
  description: "Advanced Endocrinology care for diabetes, thyroid disorders, hormonal imbalance, obesity, PCOS, and metabolic disorders. Book an appointment today.",
  keywords: "Endocrinologist, Diabetes, Thyroid, PCOS, Hormonal Imbalance, Obesity, Dr. Navya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans text-slate-800 bg-transparent relative">
        <IntroProvider>
          <IntroOverlay />
          <SmoothScrollProvider>
            <AppointmentProvider>
              <GlobalBackground />
              <Navbar />
              <main className="flex-grow pt-20 relative z-10">
                {children}
              </main>
              <Footer />
              <FloatingWhatsApp />
              <EventPopup />
            </AppointmentProvider>
          </SmoothScrollProvider>
        </IntroProvider>
      </body>
    </html>
  );
}

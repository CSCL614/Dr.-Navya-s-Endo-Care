"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, Navigation, Clock, Phone, ExternalLink } from "lucide-react";

export function ClinicMapSection() {
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Dr.+Navya%E2%80%99s+Endo+Care,+Phool+Bagh+Rd,+Ambati+Satram+Area,+Vizianagaram,+Andhra+Pradesh+535002";

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background-alt/60 relative overflow-hidden" id="clinic-location">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 bg-soft-teal border border-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Clinic Location & Directions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-heading leading-tight tracking-tight">
            Visit Dr. Navya’s EndoCare in Vizianagaram
          </h2>
          <p className="text-sm sm:text-base text-text-secondary mt-2">
            Located in the central medical hub near Phool Bagh Junction with convenient ground-floor access and parking.
          </p>
        </div>

        {/* Map and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Clinic Details Sidebar */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            <ScrollReveal direction="up">
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-border space-y-6">
                
                {/* Address block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-soft-teal text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base leading-snug">
                      Dr. Navya’s EndoCare
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary mt-1 leading-relaxed">
                      Ajay Children’s Hospital junction, Phool Bagh Rd, Ambati Satram Area, Vizianagaram, Andhra Pradesh 535002
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-primary bg-soft-teal/80 px-2.5 py-0.5 rounded-md">
                      Landmark: Opp. Ajay Children’s Hospital
                    </span>
                  </div>
                </div>

                {/* Timings block */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-border-light">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF5E6] text-[#C27803] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-bold text-navy text-sm leading-snug">
                      Consultation Hours
                    </h4>
                    <div className="text-xs text-text-secondary space-y-1">
                      <div className="flex justify-between items-center py-0.5">
                        <span className="font-medium">Mon, Wed, Thu, Fri, Sat</span>
                        <span className="font-bold text-navy">10:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span className="font-medium">Tuesday (Afternoon)</span>
                        <span className="font-bold text-navy">2:00 PM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span className="font-medium">Sunday</span>
                        <span className="font-bold text-navy">11:00 AM – 2:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 text-primary">
                        <span className="font-semibold">Wed Obesity Clinic</span>
                        <span className="font-bold">4:00 PM – 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call Helpline */}
                <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                  <div className="w-10 h-10 rounded-2xl bg-soft-teal text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] text-text-muted font-medium">Clinic Helpline & Route Assistance</p>
                    <a
                      href="tel:8464070196"
                      className="text-sm font-extrabold text-navy hover:text-primary transition-colors"
                    >
                      +91 84640 70196
                    </a>
                  </div>
                </div>

                {/* Navigation CTA button */}
                <div className="pt-2">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-soft transition-all active:scale-[0.98] group"
                  >
                    <Navigation className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <div className="h-[360px] sm:h-[420px] lg:h-full min-h-[360px] sm:min-h-[420px] w-full rounded-3xl overflow-hidden border border-border shadow-elevated relative group bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.003117565863!2d83.41162707517173!3d18.115508882885994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be5ebd3b85a6b%3A0xb51e760ddf6688b2!2sDr.%20Navya%E2%80%99s%20Endo%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Navya's EndoCare Location Map — Vizianagaram"
                />

                {/* Floating Map Action Badge */}
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-navy font-bold text-xs py-2 px-3.5 rounded-xl shadow-lg border border-border/80 flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-text-muted" />
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}

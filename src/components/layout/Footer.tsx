import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ExternalLink } from "lucide-react";
import Image from "next/image";
import { doctorData } from "@/data/doctorData";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export function Footer() {
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Dr.+Navya%E2%80%99s+Endo+Care,+Phool+Bagh+Rd,+Ambati+Satram+Area,+Vizianagaram,+Andhra+Pradesh+535002";

  return (
    <footer className="bg-navy text-white pt-16 pb-24 sm:pb-8 relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-accent-warm/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-5 lg:col-span-4 xl:col-span-3">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/logo.png" 
                alt="Dr Navya's Endo Care Logo" 
                width={60} 
                height={60} 
                className="w-12 h-12 object-contain rounded-xl bg-white shadow-xs flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="text-base sm:text-lg font-bold font-heading text-white leading-none uppercase mb-1 group-hover:text-soft-teal transition-colors duration-200">
                  DR. NAVYA&apos;S ENDO CARE
                </span>
                <span className="text-[8px] sm:text-[8.5px] font-semibold tracking-wide text-white/60 leading-tight uppercase block max-w-xs">
                  DIABETES, THYROID & ENDOCRINE SUPERSPECIALITY CENTER
                </span>
              </div>
            </Link>
            
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              Led by <strong className="text-white/80">{doctorData.name}</strong>, DM (Endocrinology) — University Topper. Comprehensive, compassionate adult and paediatric hormone care in Vizianagaram.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <a href="https://wa.me/918464070196" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-full text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors duration-200" aria-label="WhatsApp: 8464070196">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-full text-white/60 hover:bg-primary hover:text-white transition-colors duration-200" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-full text-white/60 hover:bg-primary hover:text-white transition-colors duration-200" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-full text-white/60 hover:bg-primary hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-full text-white/60 hover:bg-primary hover:text-white transition-colors duration-200" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 xl:col-span-2">
            <h3 className="text-base font-bold text-white mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> About Dr. Navya
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Specialities
                </Link>
              </li>
              <li>
                <Link href="/diabetes-care" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Diabetes Care
                </Link>
              </li>
              <li>
                <Link href="/obesity-clinic" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Obesity Clinic
                </Link>
              </li>
              <li>
                <Link href="/thyroid-care" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Thyroid Care
                </Link>
              </li>
              <li>
                <Link href="/patient-resources" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Patient Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Contact Clinic
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Clinical Focus */}
          <div className="lg:col-span-2 xl:col-span-3">
            <h3 className="text-base font-bold text-white mb-4 font-heading">Specialities</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/diabetes-care" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Diabetes Care & Screening
                </Link>
              </li>
              <li>
                <Link href="/thyroid-care" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Thyroid Care & Nodules
                </Link>
              </li>
              <li>
                <Link href="/obesity-metabolic-health" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Obesity Clinic (Wed 4-6 PM)
                </Link>
              </li>
              <li>
                <Link href="/pcos-womens-health" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> PCOS & Women&apos;s Health
                </Link>
              </li>
              <li>
                <Link href="/paediatric-endocrinology" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Child Growth & Puberty
                </Link>
              </li>
              <li>
                <Link href="/bone-mineral-health" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Bone, Calcium & Vitamin D
                </Link>
              </li>
              <li>
                <Link href="/pituitary-adrenal-care" className="text-white/55 hover:text-soft-teal transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 text-primary/60">›</span> Pituitary & Hormonal BP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Map */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-4">
            <h3 className="text-base font-bold text-white mb-4 font-heading">Clinic Contact & Location</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mr-2.5 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 leading-relaxed">
                  Ajay Children&apos;s Hospital junction, Phool Bagh Rd, Ambati Satram Area, Vizianagaram, AP 535002
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-primary mr-2.5 flex-shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <a href="tel:8464070196" className="text-white hover:text-soft-teal font-bold text-base transition-colors duration-200">
                    8464070196
                  </a>
                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    <a
                      href="tel:8464070196"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-semibold shadow-xs transition-colors duration-200"
                    >
                      <Phone className="w-3 h-3" />
                      Call Clinic
                    </a>
                    <a
                      href="https://wa.me/918464070196"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors duration-200"
                    >
                      <MessageCircle className="w-3 h-3" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-2.5 flex-shrink-0" />
                <a href="mailto:info@drnavyaendocare.com" className="text-white/60 hover:text-soft-teal transition-colors duration-200">
                  info@drnavyaendocare.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 text-primary mr-2.5 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 leading-relaxed text-xs">
                  Mon – Sat: 10:00 AM – 6:00 PM (Tue: 2–6 PM) • Sun: 11 AM – 2 PM
                </span>
              </li>
            </ul>

            {/* Embedded Google Map inside Footer */}
            <div className="pt-1">
              <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-white/15 shadow-elevated relative group bg-navy-dark">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.003117565863!2d83.41162707517173!3d18.115508882885994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be5ebd3b85a6b%3A0xb51e760ddf6688b2!2sDr.%20Navya%E2%80%99s%20Endo%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Navya's EndoCare Google Map - Vizianagaram"
                />
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2.5 right-2.5 bg-navy/90 hover:bg-navy text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5 shadow-lg backdrop-blur-xs hover:scale-105 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-soft-teal" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-white/60" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start text-xs text-white/40">
            <p>
              &copy; {new Date().getFullYear()} Dr. Navya&apos;s EndoCare — All rights reserved.
            </p>
            <p className="mt-1 text-xs text-white/30">
              Inaugurated 29 April 2024 • Vizianagaram, Andhra Pradesh
            </p>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <Link href="/#events" className="text-white/40 hover:text-soft-teal transition-colors duration-200">
              Events & Camps
            </Link>
            <Link href="/patient-resources" className="text-white/40 hover:text-soft-teal transition-colors duration-200">
              Patient Resources
            </Link>
            <Link href="/contact" className="text-white/40 hover:text-soft-teal transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>

        {/* Powered by Win Win - At bottom of the footer */}
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-center text-xs text-white/45">
          <p className="tracking-wide">
            Powered by{" "}
            <span className="text-soft-teal font-bold tracking-wider hover:text-white transition-colors duration-200">
              Win Win
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

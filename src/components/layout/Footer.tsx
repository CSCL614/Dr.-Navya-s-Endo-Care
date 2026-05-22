import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

const FacebookIcon = () => (
  <svg xmlns="http://www.0000.com/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.0000.com/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6 lg:col-span-5 xl:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Dr Navya's Endo Care Logo" 
                width={70} 
                height={70} 
                className="w-16 h-16 object-contain rounded-2xl bg-white shadow-sm flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-bold font-heading text-primary-dark leading-none uppercase mb-1">
                  DR NAVYA'S ENDO CARE
                </span>
                <span className="text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] font-semibold tracking-wide text-secondary leading-tight uppercase whitespace-nowrap">
                  DIABETES, THYROID AND ENDOCRINE SUPERSPECIALITY CENTER
                </span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Advanced Endocrinology care for diabetes, thyroid disorders, hormonal imbalance, obesity, PCOS, and metabolic disorders with compassion and expertise.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                <LinkedinIcon />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                <TwitterIcon />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-800 mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link href="/before-and-after" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> Before & After
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 xl:col-span-3">
            <h3 className="text-lg font-bold text-slate-800 mb-6 font-heading">Specialities</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#diabetes" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> Diabetes Management
                </Link>
              </li>
              <li>
                <Link href="/services#thyroid" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> Thyroid Disorders
                </Link>
              </li>
              <li>
                <Link href="/services#pcos" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> PCOS & Obesity
                </Link>
              </li>
              <li>
                <Link href="/services#hormonal" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> Hormonal Imbalance
                </Link>
              </li>
              <li>
                <Link href="/services#pediatric" className="text-slate-600 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2 text-primary/50">›</span> Pediatric Endocrinology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-slate-800 mb-6 font-heading">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 leading-relaxed">
                  Dr. Navya’s Endo Care, Ajay Children’s Hospital, junction, Phool Bagh Rd, Ambati Satram Area, Vizianagaram, Andhra Pradesh 535002
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+919032773508" className="text-slate-600 hover:text-primary transition-colors">
                  +91 90327 73508
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@drnavyaendocare.com" className="text-slate-600 hover:text-primary transition-colors">
                  info@drnavyaendocare.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 leading-relaxed">
                  Mon - Sat: 9:00 AM - 8:00 PM<br/>
                  Sunday: By Appointment
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Dr Navya's Endo Care. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-500 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

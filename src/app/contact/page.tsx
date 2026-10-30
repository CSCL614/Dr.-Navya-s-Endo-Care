"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle2, 
  PhoneCall, Building2, MessageCircle, Navigation, Compass, ExternalLink 
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    status: "idle", // idle, submitting, success, error
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });
    
    const form = e.currentTarget;
    const formData = {
      firstName: (form.elements.namedItem('fname') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lname') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormState({ 
        status: "success", 
        message: "Thank you for reaching out. Our team will contact you shortly." 
      });
      
      form.reset();
    } catch (error) {
      console.error(error);
      setFormState({
        status: "idle",
        message: "Something went wrong. Please try again later."
      });
      alert("Something went wrong. Please try again later.");
    }
  };

  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Dr.+Navya%E2%80%99s+Endo+Care,+Phool+Bagh+Rd,+Ambati+Satram+Area,+Vizianagaram,+Andhra+Pradesh+535002";

  return (
    <div className="overflow-hidden bg-background min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 bg-gradient-hero overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-soft-teal/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-border text-primary font-semibold rounded-full text-xs sm:text-sm mb-6 shadow-2xs">
              <Phone className="w-4 h-4 text-primary" />
              Direct Communication
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-navy mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              We're here to support your health journey. Reach out to schedule an appointment or ask any questions about our specialized endocrine services in Vizianagaram.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 max-w-7xl mx-auto">
            
            {/* Contact Info Side — Crystal Clear High Contrast */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="right">
                <div className="bg-gradient-to-br from-[#173B57] via-[#1E4D6E] to-[#0F2B40] rounded-[2rem] p-7 sm:p-10 text-white shadow-xl relative overflow-hidden border border-white/15">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  
                  <h3 className="text-2xl font-bold font-heading mb-6 relative z-10 !text-white">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6 relative z-10">
                    
                    {/* Clinic Address with Crisp High Contrast */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/15 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                        <MapPin className="w-6 h-6 text-amber-300" />
                      </div>
                      <div>
                        <h4 className="font-bold !text-white text-base mb-1.5 flex items-center gap-2">
                          <span>Clinic Address</span>
                          <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-md border border-amber-400/30 font-semibold">
                            Vizianagaram
                          </span>
                        </h4>
                        <p className="!text-white/95 leading-relaxed text-xs sm:text-sm font-medium">
                          Dr. Navya’s Endo Care, Ajay Children’s Hospital Junction, Phool Bagh Rd,<br />
                          Ambati Satram Area, Vizianagaram, Andhra Pradesh 535002
                        </p>
                        <a 
                          href={directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 mt-2 underline transition-colors"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Get Directions on Google Maps</span>
                        </a>
                      </div>
                    </div>

                    {/* Phone & WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/15 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                        <Phone className="w-6 h-6 text-teal-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold !text-white text-base mb-1">Clinic Phone & WhatsApp</h4>
                        <div className="space-y-1 mb-3">
                          <span className="text-[11px] text-teal-200 uppercase font-semibold tracking-wider block">Direct Line & WhatsApp</span>
                          <a href="tel:8464070196" className="!text-white hover:text-teal-200 font-extrabold text-2xl transition-colors inline-block tracking-wide">
                            8464070196
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <a 
                            href="tel:8464070196"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-navy font-bold rounded-xl text-xs hover:bg-teal-50 shadow-xs transition-all active:scale-95"
                          >
                            <Phone className="w-3.5 h-3.5 text-primary" />
                            Call 8464070196
                          </a>
                          <a 
                            href="https://wa.me/918464070196"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs shadow-xs transition-all active:scale-95"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/15 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                        <Mail className="w-6 h-6 text-sky-300" />
                      </div>
                      <div>
                        <h4 className="font-bold !text-white text-base mb-1">Email Address</h4>
                        <p className="!text-white/95 leading-relaxed text-xs sm:text-sm font-medium">
                          info@drnavyaendocare.com<br />
                          appointments@drnavyaendocare.com
                        </p>
                      </div>
                    </div>

                    {/* Consultation Timings */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/15 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                        <Clock className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="font-bold !text-white text-base mb-1">Consultation Timings</h4>
                        <p className="!text-white/95 leading-relaxed text-xs sm:text-sm font-medium">
                          Mon – Sat: 9:00 AM – 8:00 PM<br />
                          Sunday: By Prior Appointment Only
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>

              {/* Emergency Banner */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="bg-red-50/90 border border-red-200 rounded-3xl p-5 sm:p-6 flex items-center justify-between gap-4 shadow-sm">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 bg-red-100 border border-red-300 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-red-800 font-bold font-heading text-sm sm:text-base mb-0.5">
                        Medical Emergency Support
                      </h4>
                      <p className="text-red-700 text-xs sm:text-sm font-medium">
                        Urgent endocrine guidance: <a href="tel:8464070196" className="font-bold underline text-red-900">8464070196</a>
                      </p>
                    </div>
                  </div>
                  <a href="tel:8464070196" className="p-3 bg-red-100 rounded-2xl text-red-600 hover:bg-red-600 hover:text-white transition-colors shadow-xs shrink-0 active:scale-95">
                    <PhoneCall className="w-5 h-5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-card border border-border h-full relative overflow-hidden">
                  
                  {formState.status === "success" ? (
                    <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                      <div className="w-20 h-20 bg-soft-teal text-primary rounded-full flex items-center justify-center mb-6 shadow-2xs">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold font-heading text-navy mb-4">Message Sent!</h3>
                      <p className="text-text-secondary mb-8 max-w-sm">
                        {formState.message}
                      </p>
                      <button 
                        onClick={() => setFormState({ status: "idle", message: "" })}
                        className="px-8 py-3 bg-background-alt hover:bg-soft-teal text-navy font-semibold rounded-full transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : null}

                  <h3 className="text-2xl font-bold font-heading text-navy mb-2">Send us a Message</h3>
                  <p className="text-text-secondary mb-8 text-xs sm:text-sm">Fill out the form below and we will get back to you as soon as possible.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <input type="text" id="fname" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent text-sm" placeholder="First Name" />
                        <label htmlFor="fname" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">First Name</label>
                      </div>
                      <div className="relative group">
                        <input type="text" id="lname" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent text-sm" placeholder="Last Name" />
                        <label htmlFor="lname" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Last Name</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <input type="email" id="email" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent text-sm" placeholder="Email Address" />
                        <label htmlFor="email" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Email Address</label>
                      </div>
                      <div className="relative group">
                        <input type="tel" id="phone" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent text-sm" placeholder="Phone Number" />
                        <label htmlFor="phone" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Phone Number</label>
                      </div>
                    </div>

                    <div className="relative group">
                      <select id="subject" required defaultValue="" className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white appearance-none text-navy text-sm">
                        <option value="" disabled></option>
                        <option value="appointment">Book an Appointment</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                      <label htmlFor="subject" className="absolute left-4 top-2 text-xs font-semibold text-primary transition-all pointer-events-none">Subject / Reason</label>
                    </div>

                    <div className="relative group">
                      <textarea id="message" required rows={4} className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent resize-none text-sm" placeholder="Your Message"></textarea>
                      <label htmlFor="message" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Your Message</label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState.status === "submitting"}
                      className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-card hover:shadow-card-hover transition-all flex items-center justify-center disabled:opacity-70 group cursor-pointer text-sm"
                    >
                      {formState.status === "submitting" ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center font-bold">
                          Send Message
                          <Send className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Map & Directions Section with Telugu / English Conversion */}
      <section className="py-10 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-border shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-soft-teal text-primary flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy">
                    Clinic Location & Navigation
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Phool Bagh Road, Ambati Satram Area, Vizianagaram (Near Ajay Children&apos;s Hospital)
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200/80 rounded-full text-xs font-semibold text-primary">
                <MapPin className="w-3.5 h-3.5" />
                <span>Central Vizianagaram</span>
              </div>
            </div>

            {/* Address Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5 items-center">
              <div className="md:col-span-2">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
                    Official Clinic Address
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-navy leading-relaxed">
                    Dr. Navya’s Endo Care, Ajay Children’s Hospital Junction, Phool Bagh Rd, Ambati Satram Area, Vizianagaram, Andhra Pradesh 535002.<br />
                    <span className="text-text-secondary font-normal text-xs mt-1 block">
                      <strong>Landmark:</strong> Opposite Town Bus Stop Junction, right next to Ajay Children&apos;s Hospital. Parking facility available on premises.
                    </span>
                  </p>
                </div>
              </div>

              {/* Get Direction Action Buttons */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-card hover:shadow-card-hover transition-all touch-target"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Live Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href="tel:8464070196"
                  className="w-full py-2.5 px-4 bg-white hover:bg-soft-teal text-navy hover:text-primary rounded-xl font-bold text-xs border border-slate-200 flex items-center justify-center gap-2 transition-all shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Call for Route Help</span>
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="h-96 w-full rounded-3xl overflow-hidden border border-border shadow-card relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.003117565863!2d83.41162707517173!3d18.115508882885994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be5ebd3b85a6b%3A0xb51e760ddf6688b2!2sDr.%20Navya%E2%80%99s%20Endo%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Navya's EndoCare Location Map"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

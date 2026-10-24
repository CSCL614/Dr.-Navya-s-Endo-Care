"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle2, PhoneCall, Building2, MessageCircle } from "lucide-react";

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
              We're here to support your health journey. Reach out to schedule an appointment or ask any questions about our specialized endocrine services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Info Side */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="right">
                <div className="bg-gradient-navy rounded-[2rem] p-10 text-white shadow-xl relative overflow-hidden border border-white/10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  
                  <h3 className="text-2xl font-bold font-heading mb-8 relative z-10 text-white">Contact Information</h3>
                  
                  <div className="space-y-7 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                        <MapPin className="w-6 h-6 text-amber-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Clinic Address</h4>
                        <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
                          Dr. Navya’s Endo Care, Ajay Children’s Hospital, junction, Phool Bagh Rd,<br />
                          Ambati Satram Area, Vizianagaram, Andhra Pradesh 535002
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                        <Phone className="w-6 h-6 text-teal-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">Clinic Phone & WhatsApp</h4>
                        <div className="space-y-1 mb-3">
                          <span className="text-[10px] text-teal-200 uppercase font-semibold tracking-wider block">Direct Line & WhatsApp</span>
                          <a href="tel:8464070196" className="text-white hover:text-teal-200 font-extrabold text-xl transition-colors inline-block tracking-wide">
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

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                        <Mail className="w-6 h-6 text-sky-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Email Address</h4>
                        <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
                          info@drnavyaendocare.com<br />
                          appointments@drnavyaendocare.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                        <Clock className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Consultation Timings</h4>
                        <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
                          Mon – Sat: 9:00 AM – 8:00 PM<br />
                          Sunday: By Prior Appointment Only
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="bg-red-50/80 border border-red-200 rounded-3xl p-6 sm:p-7 flex items-center justify-between gap-4 shadow-[0_2px_10px_rgba(239,68,68,0.06)]">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 bg-red-100 border border-red-300 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-red-700 font-bold font-heading text-base mb-0.5">
                        Medical Emergency Support
                      </h4>
                      <p className="text-red-600/90 text-xs sm:text-sm">
                        Urgent endocrine guidance: <a href="tel:8464070196" className="font-bold underline text-red-800">8464070196</a>
                      </p>
                    </div>
                  </div>
                  <a href="tel:8464070196" className="relative p-3.5 bg-red-100 rounded-2xl text-red-600 hover:bg-red-600 hover:text-white transition-colors shadow-xs group shrink-0 active:scale-95">
                    <div className="absolute inset-0 bg-red-400 rounded-2xl animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40 group-hover:hidden" />
                    <PhoneCall className="w-5 h-5 relative z-10" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-card border border-border h-full relative overflow-hidden">
                  
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
                  <p className="text-text-secondary mb-8">Fill out the form below and we will get back to you as soon as possible.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input type="text" id="fname" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent" placeholder="First Name" />
                        <label htmlFor="fname" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">First Name</label>
                      </div>
                      <div className="relative group">
                        <input type="text" id="lname" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent" placeholder="Last Name" />
                        <label htmlFor="lname" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Last Name</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input type="email" id="email" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent" placeholder="Email Address" />
                        <label htmlFor="email" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Email Address</label>
                      </div>
                      <div className="relative group">
                        <input type="tel" id="phone" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent" placeholder="Phone Number" />
                        <label htmlFor="phone" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Phone Number</label>
                      </div>
                    </div>

                    <div className="relative group">
                      <select id="subject" required defaultValue="" className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white appearance-none text-navy">
                        <option value="" disabled></option>
                        <option value="appointment">Book an Appointment</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                      <label htmlFor="subject" className="absolute left-4 top-2 text-xs font-semibold text-primary transition-all pointer-events-none">Subject / Reason</label>
                    </div>

                    <div className="relative group">
                      <textarea id="message" required rows={4} className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-background-alt focus:bg-white text-navy placeholder-transparent resize-none" placeholder="Your Message"></textarea>
                      <label htmlFor="message" className="absolute left-4 top-2 text-xs font-semibold text-text-muted peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Your Message</label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState.status === "submitting"}
                      className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-card hover:shadow-card-hover transition-all flex items-center justify-center disabled:opacity-70 group"
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
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
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

      {/* Map Section */}
      <section className="h-96 w-full bg-slate-200 relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.003117565863!2d83.41162707517173!3d18.115508882885994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be5ebd3b85a6b%3A0xb51e760ddf6688b2!2sDr.%20Navya%E2%80%99s%20Endo%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0 transition-all duration-1000" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]" />
      </section>

    </div>
  );
}

"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle2, PhoneCall, Building2 } from "lucide-react";

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
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-20 bg-white overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
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
                <div className="bg-primary-dark rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  
                  <h3 className="text-2xl font-bold font-heading mb-8 relative z-10">Contact Information</h3>
                  
                  <div className="space-y-8 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-xl flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white/90 mb-1">Clinic Address</h4>
                        <p className="text-white/70 leading-relaxed text-sm">
                          Dr. Navya’s Endo Care, Ajay Children’s Hospital, junction, Phool Bagh Rd,<br />
                          Ambati Satram Area, Vizianagaram, Andhra Pradesh 535002
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-xl flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white/90 mb-1">Phone Numbers</h4>
                        <p className="text-white/70 leading-relaxed text-sm">
                          Main: +91 90327 73508<br />
                          Appt: +91 90327 73508
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-xl flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white/90 mb-1">Email Address</h4>
                        <p className="text-white/70 leading-relaxed text-sm">
                          info@drnavyaendocare.com<br />
                          appointments@drnavyaendocare.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-xl flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white/90 mb-1">Consultation Timings</h4>
                        <p className="text-white/70 leading-relaxed text-sm">
                          Mon - Sat: 9:00 AM - 8:00 PM<br />
                          Sunday: By Appointment Only
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="bg-red-50 border border-red-100 rounded-[2rem] p-8 flex items-center justify-between shadow-sm">
                  <div>
                    <h4 className="text-red-600 font-bold font-heading mb-1 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Medical Emergency
                    </h4>
                    <p className="text-red-500/80 text-sm">Available 24/7 for urgent care</p>
                  </div>
                  <a href="tel:+919032773508" className="relative p-4 bg-red-100 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-colors shadow-sm group">
                    <div className="absolute inset-0 bg-red-400 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50 group-hover:hidden"></div>
                    <PhoneCall className="w-6 h-6 relative z-10" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 h-full relative overflow-hidden">
                  
                  {formState.status === "success" ? (
                    <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                      <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold font-heading text-slate-800 mb-4">Message Sent!</h3>
                      <p className="text-slate-600 mb-8 max-w-sm">
                        {formState.message}
                      </p>
                      <button 
                        onClick={() => setFormState({ status: "idle", message: "" })}
                        className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : null}

                  <h3 className="text-2xl font-bold font-heading text-slate-800 mb-2">Send us a Message</h3>
                  <p className="text-slate-500 mb-8">Fill out the form below and we will get back to you as soon as possible.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input type="text" id="fname" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-slate-50 focus:bg-white placeholder-transparent" placeholder="First Name" />
                        <label htmlFor="fname" className="absolute left-4 top-2 text-xs font-semibold text-slate-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">First Name</label>
                      </div>
                      <div className="relative group">
                        <input type="text" id="lname" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-slate-50 focus:bg-white placeholder-transparent" placeholder="Last Name" />
                        <label htmlFor="lname" className="absolute left-4 top-2 text-xs font-semibold text-slate-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Last Name</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input type="email" id="email" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-slate-50 focus:bg-white placeholder-transparent" placeholder="Email Address" />
                        <label htmlFor="email" className="absolute left-4 top-2 text-xs font-semibold text-slate-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Email Address</label>
                      </div>
                      <div className="relative group">
                        <input type="tel" id="phone" required className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-slate-50 focus:bg-white placeholder-transparent" placeholder="Phone Number" />
                        <label htmlFor="phone" className="absolute left-4 top-2 text-xs font-semibold text-slate-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Phone Number</label>
                      </div>
                    </div>

                    <div className="relative group">
                      <select id="subject" required defaultValue="" className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-slate-50 focus:bg-white appearance-none text-slate-700">
                        <option value="" disabled></option>
                        <option value="appointment">Book an Appointment</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                      <label htmlFor="subject" className="absolute left-4 top-2 text-xs font-semibold text-primary transition-all pointer-events-none">Subject / Reason</label>
                    </div>

                    <div className="relative group">
                      <textarea id="message" required rows={4} className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-slate-50 focus:bg-white placeholder-transparent resize-none" placeholder="Your Message"></textarea>
                      <label htmlFor="message" className="absolute left-4 top-2 text-xs font-semibold text-slate-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary transition-all pointer-events-none">Your Message</label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState.status === "submitting"}
                      className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-soft hover:shadow-glow transition-all flex items-center justify-center disabled:opacity-70 group"
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

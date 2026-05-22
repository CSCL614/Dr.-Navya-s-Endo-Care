"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Calendar, MapPin, Clock, User, Phone, CheckCircle2, CalendarHeart } from "lucide-react";
import confetti from "canvas-confetti";
import { upcomingEvents, pastEvents, HospitalEvent } from "@/data/events";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const eventDate = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center mt-6">
      <div className="bg-white/80 backdrop-blur border border-primary/20 p-2 md:p-3 rounded-xl shadow-sm">
        <span className="block text-2xl md:text-3xl font-bold font-heading text-primary-dark">{timeLeft.days}</span>
        <span className="block text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Days</span>
      </div>
      <div className="bg-white/80 backdrop-blur border border-primary/20 p-2 md:p-3 rounded-xl shadow-sm">
        <span className="block text-2xl md:text-3xl font-bold font-heading text-primary-dark">{timeLeft.hours}</span>
        <span className="block text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Hours</span>
      </div>
      <div className="bg-white/80 backdrop-blur border border-primary/20 p-2 md:p-3 rounded-xl shadow-sm">
        <span className="block text-2xl md:text-3xl font-bold font-heading text-primary-dark">{timeLeft.minutes}</span>
        <span className="block text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Mins</span>
      </div>
      <div className="bg-white/80 backdrop-blur border border-primary/20 p-2 md:p-3 rounded-xl shadow-sm">
        <span className="block text-2xl md:text-3xl font-bold font-heading text-primary-dark">{timeLeft.seconds}</span>
        <span className="block text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Secs</span>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const handleRegister = (event: HospitalEvent) => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#14b8a6', '#38bdf8', '#ffffff']
    });

    if (event.whatsappNumber) {
      const message = encodeURIComponent(`Hi, I would like to register for the upcoming event: ${event.title}`);
      window.open(`https://wa.me/${event.whatsappNumber}?text=${message}`, '_blank');
    }
  };

  return (
    <div className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-20 lg:pb-28 bg-gradient-medical overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center p-3 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white mb-6">
              <CalendarHeart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-6 leading-tight">
              Medical Camps & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Awareness Programs</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Join our upcoming health initiatives designed to educate, empower, and screen our community for endocrine and metabolic disorders.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-4">Upcoming Events</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-12">
            {upcomingEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <div className="bg-white rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col lg:flex-row group">
                  {/* Image Side */}
                  <div className="w-full lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                      Upcoming
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-800 mb-4">{event.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">{event.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-slate-800">Date</p>
                          <p className="text-sm text-slate-600">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-slate-800">Time</p>
                          <p className="text-sm text-slate-600">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-slate-800">Venue</p>
                          <p className="text-sm text-slate-600">{event.venue}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-primary-dark shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-slate-800">Conducted By</p>
                          <p className="text-sm text-slate-600">{event.conductedBy}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                      <p className="text-sm font-semibold text-slate-800 text-center mb-2 uppercase tracking-widest">Event Starts In</p>
                      <CountdownTimer targetDate={event.date} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      <button 
                        onClick={() => handleRegister(event)}
                        className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Register on WhatsApp
                      </button>
                      <a 
                        href={`tel:${event.contact}`}
                        className="flex-1 bg-white hover:bg-slate-50 text-slate-700 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200"
                      >
                        <Phone className="w-5 h-5" />
                        Call to Register
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            
            {upcomingEvents.length === 0 && (
              <div className="text-center py-12 bg-white rounded-3xl border border-slate-100">
                <CalendarHeart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-700">No Upcoming Events</h3>
                <p className="text-slate-500 mt-2">Check back soon for new health camps and seminars.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-800 mb-4">Past Highlights</h2>
              <div className="w-24 h-1.5 bg-slate-200 mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-white/80 text-xs font-semibold mb-2 uppercase tracking-wider">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white">{event.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}

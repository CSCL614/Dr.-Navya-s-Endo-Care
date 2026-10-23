"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Calendar, MapPin, Clock, Phone, MessageCircle, 
  Sparkles, ArrowRight, Users, HeartPulse, Award 
} from "lucide-react";
import { upcomingEvents, pastEvents } from "@/data/events";
import Image from "next/image";

// Live Countdown Timer Component
function CampCountdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const eventDate = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
      <div className="bg-white/95 backdrop-blur border border-primary/20 p-2 sm:p-2.5 rounded-xl shadow-xs">
        <span className="block text-xl sm:text-2xl font-extrabold font-heading text-primary">{timeLeft.days}</span>
        <span className="block text-[9px] sm:text-[10px] font-bold text-text-muted uppercase tracking-wider">Days</span>
      </div>
      <div className="bg-white/95 backdrop-blur border border-primary/20 p-2 sm:p-2.5 rounded-xl shadow-xs">
        <span className="block text-xl sm:text-2xl font-extrabold font-heading text-primary">{timeLeft.hours}</span>
        <span className="block text-[9px] sm:text-[10px] font-bold text-text-muted uppercase tracking-wider">Hours</span>
      </div>
      <div className="bg-white/95 backdrop-blur border border-primary/20 p-2 sm:p-2.5 rounded-xl shadow-xs">
        <span className="block text-xl sm:text-2xl font-extrabold font-heading text-primary">{timeLeft.minutes}</span>
        <span className="block text-[9px] sm:text-[10px] font-bold text-text-muted uppercase tracking-wider">Mins</span>
      </div>
      <div className="bg-white/95 backdrop-blur border border-primary/20 p-2 sm:p-2.5 rounded-xl shadow-xs">
        <span className="block text-xl sm:text-2xl font-extrabold font-heading text-primary">{timeLeft.seconds}</span>
        <span className="block text-[9px] sm:text-[10px] font-bold text-text-muted uppercase tracking-wider">Secs</span>
      </div>
    </div>
  );
}

export function EventsAndCampsSection() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const primaryEvent = upcomingEvents[0];

  return (
    <section id="events" className="py-20 lg:py-28 bg-white relative overflow-hidden scroll-mt-20">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pale-blue/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Community Outreach & Prevention</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy mb-4 leading-tight tracking-tight">
              Events & Free <span className="gradient-text">Health Camps</span>
            </h2>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Dr. Navya’s EndoCare conducts regular community screening drives, free diagnostic camps, and educational seminars across Vizianagaram for early detection and prevention.
            </p>

            {/* Toggle Tabs */}
            <div className="inline-flex items-center p-1 bg-pale-blue/60 border border-border/80 rounded-full shadow-2xs mt-8">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === "upcoming"
                    ? "bg-primary text-white shadow-xs"
                    : "text-navy hover:text-primary"
                }`}
              >
                Upcoming Health Camps ({upcomingEvents.length})
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === "past"
                    ? "bg-primary text-white shadow-xs"
                    : "text-navy hover:text-primary"
                }`}
              >
                Past Mega Camps ({pastEvents.length})
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Tab 1: Upcoming Events */}
        {activeTab === "upcoming" && (
          <div className="space-y-10">
            {/* Featured Camp Hero Banner */}
            {primaryEvent && (
              <ScrollReveal direction="up">
                <div className="glass-card rounded-3xl border border-border/80 shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left: Event Details & Countdown */}
                    <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="px-3 py-1 bg-amber-500/10 text-amber-800 border border-amber-300/40 rounded-full text-xs font-bold uppercase tracking-wider">
                            Next Camp Announced
                          </span>
                          <span className="px-3 py-1 bg-pale-blue text-primary rounded-full text-xs font-bold border border-primary/20">
                            Free Consultations Included
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy leading-tight">
                          {primaryEvent.title}
                        </h3>

                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                          {primaryEvent.description}
                        </p>
                      </div>

                      {/* Event Metadata */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-y border-border/70 text-xs sm:text-sm">
                        <div className="flex items-center gap-2.5 text-navy">
                          <Calendar className="w-4 h-4 text-primary shrink-0" />
                          <span><strong>Date:</strong> 25 June 2026</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-navy">
                          <Clock className="w-4 h-4 text-primary shrink-0" />
                          <span><strong>Time:</strong> {primaryEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-navy">
                          <MapPin className="w-4 h-4 text-primary shrink-0" />
                          <span><strong>Venue:</strong> Vizianagaram Clinic</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-navy">
                          <Award className="w-4 h-4 text-accent-warm shrink-0" />
                          <span><strong>Lead:</strong> Dr. Navya Sruthi M.</span>
                        </div>
                      </div>

                      {/* Countdown Box */}
                      <div className="bg-pale-blue/60 p-4 sm:p-5 rounded-2xl border border-primary/20">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-navy uppercase tracking-wider">
                            Camp Commences In:
                          </span>
                          <span className="text-[11px] font-semibold text-primary">Limited Seats</span>
                        </div>
                        <CampCountdown targetDate={primaryEvent.date} />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href={`https://wa.me/${primaryEvent.whatsappNumber}?text=Hi%20Dr.%20Navya%27s%20EndoCare%2C%20I%20would%20like%20to%20register%20for%20the%20${encodeURIComponent(primaryEvent.title)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs hover:shadow-card flex items-center gap-2 active:scale-95"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Register via WhatsApp</span>
                        </a>

                        <a
                          href="tel:8464070196"
                          className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs hover:shadow-card flex items-center gap-2 active:scale-95"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call Clinic: 8464070196</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Camp Visual */}
                    <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100 overflow-hidden">
                      <Image
                        src={primaryEvent.imageUrl}
                        alt={primaryEvent.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                        <span className="text-xs font-bold text-pale-blue uppercase tracking-wider block mb-1">
                          Community Service
                        </span>
                        <h4 className="text-lg font-bold font-heading">
                          Free Glucose & Thyroid Diagnostics
                        </h4>
                        <p className="text-xs text-white/80 mt-1">
                          Walk-ins welcome • Early morning fasting samples supported
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Other Upcoming Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.slice(1).map((event, idx) => (
                <ScrollReveal key={event.id} delay={idx * 0.1} direction="up">
                  <div className="glass-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-pale-blue text-primary border border-primary/20">
                          Educational Seminar
                        </span>
                        <span className="text-xs text-text-muted font-medium">15 July 2026</span>
                      </div>

                      <h4 className="text-xl font-bold font-heading text-navy">
                        {event.title}
                      </h4>

                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                        {event.description}
                      </p>

                      <div className="space-y-1.5 pt-2 text-xs text-navy/90">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-border/70 flex items-center justify-between">
                      <a
                        href={`https://wa.me/918464070196?text=Inquiry%20about%20${encodeURIComponent(event.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1 group"
                      >
                        <span>Reserve a Seat</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <span className="text-[11px] text-text-muted">Conducted by Dr. Navya</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Past Camps & Achievements */}
        {activeTab === "past" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, idx) => (
              <ScrollReveal key={event.id} delay={idx * 0.1} direction="up">
                <div className="glass-card rounded-3xl border border-border/80 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 overflow-hidden flex flex-col h-full group transition-all duration-300">
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-navy/85 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      Completed Drive
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <h4 className="text-xl font-bold font-heading text-navy mb-2 group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs text-text-muted">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-navy">Over 500+ Screened</span>
                      </div>
                      <span className="font-medium text-text-muted">Vizianagaram</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Bottom Contact Outreach Bar */}
        <ScrollReveal delay={0.2} direction="up">
          <div className="mt-14 p-6 sm:p-8 bg-pale-blue/40 rounded-2xl border border-border/80 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-navy font-heading">
                  Want Dr. Navya’s EndoCare to conduct a screening camp at your institution or corporate?
                </h5>
                <p className="text-xs text-text-secondary">
                  We organize CSR camps and diagnostic screening drives for organizations in Vizianagaram.
                </p>
              </div>
            </div>

            <a
              href="tel:8464070196"
              className="shrink-0 px-5 py-2.5 bg-white hover:bg-primary hover:text-white text-navy font-bold rounded-xl text-xs border border-border/80 hover:border-primary transition-all flex items-center gap-2 shadow-xs active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-primary group-hover:text-white" />
              <span>Contact Coordinator: 8464070196</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

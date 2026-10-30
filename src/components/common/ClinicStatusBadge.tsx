"use client";

import React, { useState, useEffect } from "react";
import { Clock, ChevronDown, CheckCircle2 } from "lucide-react";
import { getClinicStatus, CLINIC_SCHEDULE, ClinicStatus } from "@/utils/clinicHours";

interface ClinicStatusBadgeProps {
  variant?: "floating" | "navbar" | "compact" | "contact" | "inline";
  showSchedulePopup?: boolean;
  className?: string;
}

export function ClinicStatusBadge({
  variant = "floating",
  showSchedulePopup = true,
  className = "",
}: ClinicStatusBadgeProps) {
  const [status, setStatus] = useState<ClinicStatus>(() => getClinicStatus());
  const [showSchedule, setShowSchedule] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStatus(getClinicStatus());

    // Update status every 60 seconds
    const interval = setInterval(() => {
      setStatus(getClinicStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const isOpen = mounted ? status.isOpen : true; // Default optimistic on SSR

  // Floating variant for Hero Center of Excellence badge
  if (variant === "floating") {
    return (
      <div className={`relative inline-block ${className}`}>
        <button
          type="button"
          onClick={() => showSchedulePopup && setShowSchedule(!showSchedule)}
          className={`inline-flex items-center gap-1.5 text-[9.5px] font-bold px-2 py-0.5 rounded-full border transition-all ${
            isOpen
              ? "text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100/80"
              : "text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100/80"
          }`}
          title="Click to view weekly schedule"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
            }`}
          />
          <span>{isOpen ? "Open Today" : "Closed Now"}</span>
          {showSchedulePopup && (
            <ChevronDown
              className={`w-2.5 h-2.5 opacity-60 transition-transform duration-200 ${
                showSchedule ? "rotate-180" : ""
              }`}
            />
          )}
        </button>

        {showSchedule && (
          <SchedulePopover
            currentDayIndex={status.dayIndex}
            onClose={() => setShowSchedule(false)}
          />
        )}
      </div>
    );
  }

  // Navbar variant for mobile drawer mini profile
  if (variant === "navbar") {
    return (
      <div className={`shrink-0 text-right ${className}`}>
        <button
          type="button"
          onClick={() => showSchedulePopup && setShowSchedule(!showSchedule)}
          className={`inline-flex items-center gap-1 text-[8.5px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full border whitespace-nowrap transition-all ${
            isOpen
              ? "text-emerald-700 bg-emerald-100/90 border-emerald-300/60"
              : "text-amber-700 bg-amber-100/90 border-amber-300/60"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
            }`}
          />
          {isOpen ? "Open Today" : "Closed Now"}
        </button>
        <span className="text-[8.5px] sm:text-[9px] text-text-muted block mt-0.5 font-medium whitespace-nowrap">
          {status.todayHours}
        </span>

        {showSchedule && (
          <div className="relative">
            <SchedulePopover
              currentDayIndex={status.dayIndex}
              onClose={() => setShowSchedule(false)}
            />
          </div>
        )}
      </div>
    );
  }

  // Contact page card variant
  if (variant === "contact") {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
              isOpen
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
                : "bg-amber-500/20 text-amber-300 border-amber-400/40"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
              }`}
            />
            {isOpen ? "Clinic Open Now" : "Clinic Currently Closed"}
          </span>
          <span className="text-white/80 text-xs font-medium">({status.subText})</span>
        </div>
      </div>
    );
  }

  // Inline / Compact variant
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${
        isOpen
          ? "text-emerald-700 bg-emerald-50 border-emerald-200"
          : "text-amber-700 bg-amber-50 border-amber-200"
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
        }`}
      />
      <span>{isOpen ? "Open Now" : "Closed Now"}</span>
    </span>
  );
}

function SchedulePopover({
  currentDayIndex,
  onClose,
}: {
  currentDayIndex: number;
  onClose: () => void;
}) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute left-0 bottom-full mb-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 text-left text-xs animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
          <div className="font-bold text-navy flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>Weekly Clinic Hours</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-xs font-bold px-1"
          >
            ✕
          </button>
        </div>
        <div className="space-y-1">
          {Object.entries(CLINIC_SCHEDULE).map(([dayKey, sched]) => {
            const isToday = Number(dayKey) === currentDayIndex;
            return (
              <div
                key={dayKey}
                className={`flex items-center justify-between py-1 px-1.5 rounded-lg text-[11px] ${
                  isToday
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-slate-600 font-medium"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {isToday && <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />}
                  <span>{sched.dayName}</span>
                </div>
                <span className={isToday ? "font-bold text-primary" : "text-slate-500"}>
                  {sched.displayHours}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-500 italic">
          * Joint Obesity Clinic: Wednesdays 4:00 PM – 6:00 PM
        </div>
      </div>
    </>
  );
}

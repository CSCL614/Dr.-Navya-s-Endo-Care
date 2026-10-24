"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export type IconBadgeVariant = 
  | "teal" 
  | "navy" 
  | "mint" 
  | "amber" 
  | "emerald" 
  | "sky" 
  | "rose" 
  | "indigo";

export type IconBadgeSize = "sm" | "md" | "lg" | "xl";

interface CenterIconBadgeProps {
  icon: LucideIcon;
  variant?: IconBadgeVariant;
  size?: IconBadgeSize;
  className?: string;
  badgeLabel?: string;
}

const variantStyles: Record<IconBadgeVariant, {
  container: string;
  icon: string;
  ring: string;
  halo: string;
}> = {
  teal: {
    container: "bg-gradient-to-br from-soft-teal via-soft-teal to-teal-100/80 border-primary/20 text-primary",
    icon: "text-primary group-hover:text-primary-dark",
    ring: "ring-primary/10 group-hover:ring-primary/25",
    halo: "bg-primary/15",
  },
  navy: {
    container: "bg-gradient-to-br from-slate-100 via-slate-50 to-navy/10 border-navy/20 text-navy",
    icon: "text-navy group-hover:text-primary",
    ring: "ring-navy/10 group-hover:ring-navy/25",
    halo: "bg-navy/15",
  },
  mint: {
    container: "bg-gradient-to-br from-emerald-50 via-soft-teal to-teal-100 border-teal-200 text-teal-800",
    icon: "text-teal-700 group-hover:text-teal-900",
    ring: "ring-teal-500/10 group-hover:ring-teal-500/25",
    halo: "bg-teal-400/20",
  },
  amber: {
    container: "bg-gradient-to-br from-amber-50 via-amber-100/70 to-orange-100/60 border-amber-300 text-amber-800",
    icon: "text-amber-700 group-hover:text-amber-900",
    ring: "ring-amber-500/15 group-hover:ring-amber-500/30",
    halo: "bg-amber-400/20",
  },
  emerald: {
    container: "bg-gradient-to-br from-emerald-50 via-emerald-100/80 to-teal-100/50 border-emerald-300 text-emerald-800",
    icon: "text-emerald-700 group-hover:text-emerald-900",
    ring: "ring-emerald-500/15 group-hover:ring-emerald-500/30",
    halo: "bg-emerald-400/20",
  },
  sky: {
    container: "bg-gradient-to-br from-sky-50 via-pale-blue to-sky-100 border-sky-200 text-sky-800",
    icon: "text-sky-700 group-hover:text-sky-900",
    ring: "ring-sky-500/15 group-hover:ring-sky-500/30",
    halo: "bg-sky-400/20",
  },
  rose: {
    container: "bg-gradient-to-br from-rose-50 via-rose-100/60 to-pink-100/50 border-rose-200 text-rose-800",
    icon: "text-rose-700 group-hover:text-rose-900",
    ring: "ring-rose-500/15 group-hover:ring-rose-500/30",
    halo: "bg-rose-400/20",
  },
  indigo: {
    container: "bg-gradient-to-br from-indigo-50 via-indigo-100/70 to-purple-100/50 border-indigo-200 text-indigo-800",
    icon: "text-indigo-700 group-hover:text-indigo-900",
    ring: "ring-indigo-500/15 group-hover:ring-indigo-500/30",
    halo: "bg-indigo-400/20",
  },
};

const sizeStyles: Record<IconBadgeSize, {
  box: string;
  icon: string;
  halo: string;
}> = {
  sm: {
    box: "w-10 h-10 rounded-xl",
    icon: "w-5 h-5",
    halo: "w-12 h-12 -inset-1",
  },
  md: {
    box: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl",
    icon: "w-6 h-6 sm:w-7 sm:h-7",
    halo: "w-16 h-16 -inset-1.5",
  },
  lg: {
    box: "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl",
    icon: "w-7 h-7 sm:w-8 sm:h-8",
    halo: "w-20 h-20 -inset-2",
  },
  xl: {
    box: "w-16 h-16 sm:w-20 sm:h-20 rounded-3xl",
    icon: "w-8 h-8 sm:w-10 sm:h-10",
    halo: "w-24 h-24 -inset-2.5",
  },
};

export function CenterIconBadge({
  icon: Icon,
  variant = "teal",
  size = "md",
  className,
  badgeLabel
}: CenterIconBadgeProps) {
  const v = variantStyles[variant];
  const s = sizeStyles[size];

  return (
    <div className={cn("relative inline-flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300", className)}>
      {/* Soft Ambient Breathing Halo Glow */}
      <div 
        className={cn(
          "absolute rounded-full blur-md opacity-50 group-hover:opacity-90 halo-glow-pulse transition-opacity duration-300 pointer-events-none transform-gpu",
          v.halo,
          s.halo
        )} 
        aria-hidden="true" 
      />

      {/* Main Icon Box */}
      <div 
        className={cn(
          "relative flex items-center justify-center border shadow-2xs ring-4 transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(22,124,128,0.25)]",
          v.container,
          v.ring,
          s.box
        )}
      >
        <Icon className={cn("transition-transform duration-300 group-hover:scale-110", v.icon, s.icon)} strokeWidth={2.2} />
      </div>

      {/* Optional Mini Status Dot or Tag */}
      {badgeLabel && (
        <span className="absolute -bottom-1 -right-1 text-[8.5px] font-bold px-1.5 py-0.5 rounded-full bg-white text-navy border border-border shadow-2xs whitespace-nowrap">
          {badgeLabel}
        </span>
      )}
    </div>
  );
}

interface CreativeCardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
  accentBar?: boolean;
  pulseGlow?: boolean;
}

export function CreativeCard({
  children,
  className,
  highlighted = false,
  accentBar = false,
  pulseGlow = false,
}: CreativeCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 sm:p-7 lg:p-8 transition-all duration-300 h-full flex flex-col group overflow-hidden card-interactive-glow",
        pulseGlow && "card-glow-pulse",
        highlighted 
          ? "bg-gradient-to-b from-soft-teal/30 via-white to-white border-2 border-primary/30 shadow-[0_4px_20px_rgba(22,124,128,0.08)] hover:shadow-[0_16px_36px_rgba(22,124,128,0.18)] hover:-translate-y-1.5"
          : "bg-white border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 hover:-translate-y-1.5",
        className
      )}
    >
      {/* Top subtle accent bar */}
      {accentBar && (
        <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-colors" />
      )}
      {children}
    </div>
  );
}

"use client";

import React, { useState, useId } from "react";
import { LucideIcon, ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { CenterIconBadge, IconBadgeVariant, IconBadgeSize } from "./CreativeCard";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface ExpandableCardProps {
  /** Optional icon displayed in a circular badge */
  icon?: LucideIcon;
  /** Color theme of the icon badge */
  iconVariant?: IconBadgeVariant;
  /** Size of the icon badge */
  iconSize?: IconBadgeSize;
  /** Optional status badge text (e.g., "Specialized Lab", "Phase 01") */
  badge?: string;
  /** Custom badge styling class */
  badgeColor?: string;
  /** Main title of the card */
  title: string;
  /** Optional Telugu script subtitle */
  teluguTitle?: string;
  /** Optional English subtitle / category */
  subtitle?: string;
  /** Brief summary displayed in the collapsed initial state (1-2 lines) */
  summary: string;
  /** Detailed content revealed when expanded */
  children?: React.ReactNode;
  /** Optional persistent bottom action (e.g. permanent button or link) */
  action?: React.ReactNode;
  /** Custom label for the expand button (defaults to "Explore Details") */
  expandLabel?: string;
  /** Custom label for the collapse button (defaults to "Show Less") */
  collapseLabel?: string;
  /** Controlled expansion state */
  isExpanded?: boolean;
  /** Controlled toggle callback */
  onToggle?: () => void;
  /** Default expansion state if uncontrolled */
  defaultExpanded?: boolean;
  /** Alignment of header elements: "center" (default) or "left" */
  headerAlign?: "center" | "left";
  /** Optional custom CSS classes */
  className?: string;
  /** If true, the card content is always expanded on desktop (md:) and only collapses on mobile */
  desktopAlwaysExpanded?: boolean;
  /** Visual variant: 'plus' (plus/minus icon) or 'chevron' (rotating chevron) */
  toggleStyle?: "plus" | "chevron" | "pill";
  /** Accent top border */
  accentBar?: boolean;
  /** Highlighted card styling */
  highlighted?: boolean;
}

export function ExpandableCard({
  icon,
  iconVariant = "teal",
  iconSize = "md",
  badge,
  badgeColor = "bg-soft-teal text-primary border-primary/20",
  title,
  teluguTitle,
  subtitle,
  summary,
  children,
  action,
  expandLabel = "Explore Details",
  collapseLabel = "Show Less",
  isExpanded: controlledExpanded,
  onToggle: controlledOnToggle,
  defaultExpanded = false,
  headerAlign = "center",
  className,
  desktopAlwaysExpanded = false,
  toggleStyle = "pill",
  accentBar = false,
  highlighted = false,
}: ExpandableCardProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const contentId = useId();

  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isControlled && controlledOnToggle) {
      controlledOnToggle();
    } else {
      setInternalExpanded((prev) => !prev);
    }
  };

  const isCenter = headerAlign === "center";

  return (
    <div
      className={cn(
        "relative rounded-3xl bg-white border border-[#E3EBF0] shadow-[0_2px_12px_rgba(23,59,87,0.05)] hover:shadow-[0_16px_36px_rgba(23,59,87,0.11)] hover:border-primary/40 transition-all duration-300 flex flex-col group overflow-hidden card-interactive-glow",
        highlighted && "border-primary/40 ring-2 ring-primary/10 shadow-[0_4px_20px_rgba(22,124,128,0.08)]",
        className
      )}
    >
      {/* Top subtle accent bar */}
      {accentBar && (
        <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-colors" />
      )}

      {/* Main Card Container */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow">
        
        {/* Upper Meta: Badge or Top Row */}
        {badge && (
          <div className={cn("mb-3 flex", isCenter ? "justify-center" : "justify-between items-center")}>
            <span
              className={cn(
                "text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full border shadow-2xs uppercase tracking-wider inline-block",
                badgeColor
              )}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Header Section: Icon & Titles */}
        <div className={cn("flex flex-col mb-3", isCenter ? "items-center text-center" : "items-start text-left")}>
          {icon && (
            <div className="mb-3.5">
              <CenterIconBadge icon={icon} variant={iconVariant} size={iconSize} />
            </div>
          )}

          <h3 className="text-lg sm:text-xl font-bold font-heading text-navy group-hover:text-primary transition-colors duration-200 leading-snug">
            {title}
          </h3>

          {teluguTitle && (
            <div className="text-[11px] sm:text-xs font-bold text-primary/90 font-sans mt-0.5 mb-1.5">
              {teluguTitle}
            </div>
          )}

          {subtitle && (
            <div className="text-xs sm:text-sm font-semibold text-primary/90 mt-0.5 mb-1">
              {subtitle}
            </div>
          )}
        </div>

        {/* Short Summary (Always visible initially) */}
        <p
          className={cn(
            "text-xs sm:text-sm text-[#344654] leading-relaxed mb-4",
            isCenter ? "text-center" : "text-left"
          )}
        >
          {summary}
        </p>

        {/* Expandable Content Area */}
        {children && (
          <>
            {/* Mobile / Responsive Expandable Container */}
            <div className={cn(desktopAlwaysExpanded && "md:hidden")}>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-label={`${title} details`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3.5 border-t border-[#E3EBF0] mb-4">
                      {children}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Always Expanded Display (when desktopAlwaysExpanded is true) */}
            {desktopAlwaysExpanded && (
              <div className="hidden md:block pt-3.5 border-t border-[#E3EBF0] mb-4">
                {children}
              </div>
            )}

            {/* Expand / Collapse Interactive Trigger */}
            <div
              className={cn(
                "pt-2 flex items-center justify-center mt-auto",
                desktopAlwaysExpanded && "md:hidden"
              )}
            >
              <button
                type="button"
                onClick={handleToggle}
                aria-expanded={isExpanded}
                aria-controls={contentId}
                className={cn(
                  "inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs transition-all duration-200 touch-target cursor-pointer",
                  isExpanded
                    ? "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                    : "bg-soft-teal/80 text-primary hover:bg-soft-teal hover:text-primary-dark border border-primary/20 shadow-2xs"
                )}
              >
                {toggleStyle === "plus" ? (
                  <>
                    <motion.span
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </motion.span>
                    <span>{isExpanded ? collapseLabel : expandLabel}</span>
                  </>
                ) : toggleStyle === "chevron" ? (
                  <>
                    <span>{isExpanded ? collapseLabel : expandLabel}</span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.span>
                  </>
                ) : (
                  <>
                    <span className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center shadow-2xs">
                      {isExpanded ? (
                        <Minus className="w-3 h-3 text-slate-700" />
                      ) : (
                        <Plus className="w-3 h-3 text-primary" />
                      )}
                    </span>
                    <span>{isExpanded ? collapseLabel : expandLabel}</span>
                  </>
                )}
              </button>
            </div>
          </>
        )}

        {/* Optional Action Slot (always visible if provided, e.g., phone call or button) */}
        {action && (
          <div className="pt-3.5 border-t border-[#E3EBF0] mt-auto">
            {action}
          </div>
        )}

      </div>
    </div>
  );
}

/**
 * Helper component for rendering expandable list items / checklists
 */
export interface ExpandableListProps {
  items: string[];
  initialVisibleCount?: number;
  labelMore?: string;
  labelLess?: string;
  itemIcon?: LucideIcon;
  className?: string;
}

export function ExpandableList({
  items,
  initialVisibleCount = 3,
  labelMore = "View All Signs",
  labelLess = "Show Less",
  itemIcon: ItemIcon,
  className,
}: ExpandableListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, initialVisibleCount);
  const remainingCount = items.length - initialVisibleCount;

  if (items.length <= initialVisibleCount) {
    return (
      <div className={cn("space-y-2", className)}>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#344654]">
            {ItemIcon && <ItemIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />}
            <span>{item}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="space-y-2">
        {visibleItems.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#344654]">
            {ItemIcon && <ItemIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />}
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors py-1 px-2.5 rounded-lg bg-soft-teal/50 hover:bg-soft-teal border border-primary/20 touch-target cursor-pointer"
        >
          <span>
            {isExpanded ? labelLess : `${labelMore} (+${remainingCount})`}
          </span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </button>
      </div>
    </div>
  );
}

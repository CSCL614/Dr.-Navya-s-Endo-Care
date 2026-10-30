"use client";

import React, { useState, useId } from "react";
import { LucideIcon, Plus, Minus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { CenterIconBadge, IconBadgeVariant } from "./CreativeCard";

import type { ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ExpandableGroupProps {
  /** Main heading for this group */
  title: string;
  /** Optional Telugu script title */
  teluguTitle?: string;
  /** Optional subtitle or summary line */
  subtitle?: string;
  /** Optional tag or count badge (e.g., "4 Specialties", "3 Facilities") */
  badge?: string;
  badgeColor?: string;
  /** Optional leading icon */
  icon?: LucideIcon;
  /** Color theme for icon badge */
  iconVariant?: IconBadgeVariant;
  /** Optional item count indicator */
  itemCount?: number | string;
  /** Content revealed when expanded */
  children: React.ReactNode;
  /** Controlled expansion */
  isExpanded?: boolean;
  /** Uncontrolled default state */
  defaultExpanded?: boolean;
  /** Controlled toggle handler */
  onToggle?: () => void;
  /** Additional wrapper classes */
  className?: string;
  /** Additional content container classes */
  contentClassName?: string;
  /** Visual theme variant */
  variant?: "default" | "subtle" | "bordered" | "card";
  /** Expand trigger style: "pill" | "icon" */
  toggleStyle?: "pill" | "icon";
  /** Anchor ID for direct scrolling */
  id?: string;
}

export function ExpandableGroup({
  title,
  teluguTitle,
  subtitle,
  badge,
  badgeColor = "bg-soft-teal text-primary border-primary/20",
  icon,
  iconVariant = "teal",
  itemCount,
  children,
  isExpanded: controlledExpanded,
  defaultExpanded = false,
  onToggle: controlledOnToggle,
  className,
  contentClassName,
  variant = "card",
  toggleStyle = "pill",
  id,
}: ExpandableGroupProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const contentId = useId();

  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    if (isControlled && controlledOnToggle) {
      controlledOnToggle();
    } else {
      setInternalExpanded((prev) => !prev);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden",
        variant === "card" && [
          "bg-white border",
          isExpanded
            ? "border-primary/50 shadow-elevated glow-card-featured ring-1 ring-primary/25"
            : "border-border/80 hover:border-primary/45 shadow-2xs hover:shadow-card card-interactive-glow",
        ],
        variant === "bordered" && [
          "bg-white border-2",
          isExpanded ? "border-primary shadow-sm" : "border-slate-200 hover:border-slate-300",
        ],
        variant === "subtle" && [
          "bg-slate-50/70 border border-slate-200/80",
          isExpanded && "bg-white border-primary/30 shadow-sm",
        ],
        className
      )}
    >
      {/* Group Header Bar (Clickable) */}
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        className={cn(
          "w-full text-left p-4 sm:p-5 lg:p-6 flex items-center justify-between gap-3 sm:gap-4 select-none cursor-pointer group transition-colors duration-200 touch-target",
          isExpanded ? "bg-soft-teal/30" : "hover:bg-slate-50/80"
        )}
      >
        {/* Left Section: Icon + Titles */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          {icon && (
            <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
              <CenterIconBadge
                icon={icon}
                variant={iconVariant}
                size="md"
                className="shadow-2xs"
              />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold font-heading text-navy group-hover:text-primary transition-colors duration-200 truncate">
                {title}
              </h3>

              {teluguTitle && (
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-medium text-primary bg-white/80 rounded-md border border-primary/20">
                  {teluguTitle}
                </span>
              )}

              {badge && (
                <span
                  className={cn(
                    "text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border shrink-0",
                    badgeColor
                  )}
                >
                  {badge}
                </span>
              )}

              {itemCount !== undefined && (
                <span className="text-[10px] sm:text-xs font-medium text-text-secondary bg-slate-100 px-2 py-0.5 rounded-full shrink-0">
                  {itemCount}
                </span>
              )}
            </div>

            {teluguTitle && (
              <p className="sm:hidden text-xs font-medium text-primary mb-0.5">
                {teluguTitle}
              </p>
            )}

            {subtitle && (
              <p className="text-xs sm:text-sm text-text-secondary line-clamp-1 group-hover:text-text-primary transition-colors">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Right Section: Expansion Trigger Indicator */}
        <div className="shrink-0 flex items-center gap-2">
          {toggleStyle === "pill" ? (
            <div
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border",
                isExpanded
                  ? "bg-primary text-white border-primary shadow-2xs"
                  : "bg-white text-navy border-slate-200 group-hover:border-primary/40 group-hover:bg-soft-teal group-hover:text-primary"
              )}
            >
              <span>{isExpanded ? "Collapse" : "Explore"}</span>
              {isExpanded ? (
                <Minus className="w-3.5 h-3.5" />
              ) : (
                <Plus className="w-3.5 h-3.5" />
              )}
            </div>
          ) : (
            <div
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border",
                isExpanded
                  ? "bg-primary text-white border-primary rotate-180"
                  : "bg-white text-navy border-slate-200 group-hover:border-primary/40 group-hover:text-primary group-hover:bg-soft-teal"
              )}
            >
              <ChevronDown className="w-4 h-4 transition-transform duration-200" />
            </div>
          )}
        </div>
      </button>

      {/* Expandable Content Container */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25, delay: 0.05 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.15 },
              },
            }}
            className="overflow-hidden border-t border-border/60 bg-gradient-to-b from-soft-teal/10 to-white"
          >
            <div className={cn("p-4 sm:p-6 lg:p-7", contentClassName)}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export interface AccordionItem {
  id: string;
  title: string;
  teluguTitle?: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  icon?: LucideIcon;
  iconVariant?: IconBadgeVariant;
  itemCount?: number | string;
  renderContent: () => React.ReactNode;
}

export interface ExpandableAccordionGroupProps {
  items: AccordionItem[];
  defaultOpenId?: string | null;
  allowMultiple?: boolean;
  className?: string;
  variant?: "default" | "subtle" | "bordered" | "card";
}

export function ExpandableAccordionGroup({
  items,
  defaultOpenId = null,
  allowMultiple = false,
  className,
  variant = "card",
}: ExpandableAccordionGroupProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3.5 sm:space-y-4", className)}>
      {items.map((item) => {
        const isExpanded = openIds.includes(item.id);
        return (
          <ExpandableGroup
            key={item.id}
            id={item.id}
            title={item.title}
            teluguTitle={item.teluguTitle}
            subtitle={item.subtitle}
            badge={item.badge}
            badgeColor={item.badgeColor}
            icon={item.icon}
            iconVariant={item.iconVariant}
            itemCount={item.itemCount}
            isExpanded={isExpanded}
            onToggle={() => toggleItem(item.id)}
            variant={variant}
          >
            {item.renderContent()}
          </ExpandableGroup>
        );
      })}
    </div>
  );
}

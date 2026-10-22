"use client";

import { ReactNode } from 'react';

/**
 * Lightweight native scroll provider that relies on native hardware-accelerated
 * CSS smooth scrolling (scroll-behavior: smooth) without main-thread JS interception,
 * optimizing INP and mobile scrolling smoothness.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

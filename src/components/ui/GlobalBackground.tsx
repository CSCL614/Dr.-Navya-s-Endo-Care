"use client";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-slate-50/50" aria-hidden="true">
      {/* Subtle Medical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e906_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e906_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_30%,transparent_100%)]" />

      {/* Static Pure CSS Soft Radial Glows - Zero CPU/GPU Overhead */}
      <div className="absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-sky-200/25 to-teal-200/15 blur-3xl pointer-events-none" />
      <div className="absolute top-[35%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-teal-200/20 to-emerald-200/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[15%] w-[45vw] h-[35vw] rounded-full bg-gradient-to-tr from-cyan-200/15 to-sky-100/20 blur-3xl pointer-events-none" />
    </div>
  );
}

"use client";

export function GlobalBackground() {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-background transform-gpu" 
      style={{ contain: "strict" }}
      aria-hidden="true"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E3EBF015_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Static Soft Radial Glows with GPU composition */}
      <div className="absolute top-[-10%] left-[-8%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-soft-teal/20 to-primary/3 blur-3xl pointer-events-none transform-gpu" />
      <div className="absolute top-[45%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-pale-blue/30 to-primary/2 blur-3xl pointer-events-none transform-gpu" />
      <div className="absolute bottom-[-15%] left-[25%] w-[40vw] h-[30vw] rounded-full bg-gradient-to-tr from-soft-teal/10 to-background blur-3xl pointer-events-none transform-gpu" />
    </div>
  );
}

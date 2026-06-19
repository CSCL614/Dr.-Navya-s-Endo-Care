"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  beforeClassName?: string;
  afterClassName?: string;
}

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
  beforeClassName,
  afterClassName
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div 
      className={cn("relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden group select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 bg-slate-200">
        <Image 
          src={afterImage}
          alt={afterLabel}
          fill
          className={cn("object-cover", afterClassName)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 bg-slate-300 pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image 
          src={beforeImage}
          alt={beforeLabel}
          fill
          className={cn("object-cover", beforeClassName)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle Line */}
      <div 
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Slider Button - Premium Frosted Glass */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-lg border border-white/60 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:scale-110">
          <div className="flex items-center justify-between w-full px-2 text-white drop-shadow-md">
            <MoveLeft className="w-4 h-4 md:w-5 md:h-5" />
            <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </div>

      {/* Invisible Range Input */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition}
        onChange={handleDrag}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 touch-pan-y"
        aria-label="Image comparison slider"
      />
      
      {/* Subtle overlay when not interacted with to indicate dragging capability */}
      <div className={cn(
        "absolute inset-0 bg-black/10 pointer-events-none transition-opacity duration-500",
        isHovered || sliderPosition !== 50 ? "opacity-0" : "opacity-100"
      )} />
    </div>
  );
}

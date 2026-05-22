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
        />
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10 transition-opacity duration-300">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 bg-slate-300"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image 
          src={beforeImage}
          alt={beforeLabel}
          fill
          className={cn("object-cover", beforeClassName)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10 transition-opacity duration-300">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle Line */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none transition-all duration-75"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:scale-110">
          <MoveLeft className="w-3 h-3 md:w-4 md:h-4 text-slate-500 mr-[-2px] md:mr-[-3px]" />
          <MoveRight className="w-3 h-3 md:w-4 md:h-4 text-slate-500 ml-[-2px] md:ml-[-3px]" />
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
        "absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-500",
        isHovered || sliderPosition !== 50 ? "opacity-0" : "opacity-100"
      )} />
    </div>
  );
}

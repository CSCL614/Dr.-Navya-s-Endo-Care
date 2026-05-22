"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface Album {
  id: string;
  title: string;
  images: string[];
}

interface AlbumCardProps {
  album: Album;
  onImageClick: (album: Album, startIndex: number) => void;
}

export function AlbumCard({ album, onImageClick }: AlbumCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    // Only auto-scroll if there's more than 1 image and we aren't hovering over the card
    if (album.images.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % album.images.length);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(timer);
  }, [album.images.length, isHovered]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent clicking the image behind it
    setCurrentIndex((prev) => (prev + 1) % album.images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? album.images.length - 1 : prev - 1));
  };

  return (
    <div 
      className="bg-white rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col group h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-3/4 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onImageClick(album, currentIndex)}>
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={album.images[currentIndex]}
            alt={`${album.title} - Image ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>

        {/* Hover Overlay with Zoom Icon */}
        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/50 text-white backdrop-blur-md scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
            <ZoomIn className="w-6 h-6" />
          </div>
        </div>

        {/* Navigation Arrows (Only show if multiple images) */}
        {album.images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-slate-800 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-slate-800 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Album Info Bottom */}
      <div className="h-1/4 p-5 flex flex-col justify-center items-center bg-white relative z-20">
        <h3 className="text-xl font-bold font-heading text-slate-800 text-center mb-2">{album.title}</h3>
        
        {/* Dots Indicator */}
        {album.images.length > 1 && (
          <div className="flex gap-1.5 justify-center mt-auto">
            {album.images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-slate-200'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

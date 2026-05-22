"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { AlbumCard, Album } from "@/components/ui/AlbumCard";

const galleryAlbums: Album[] = [
  {
    id: "interior",
    title: "Clinic Interior",
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "consultation",
    title: "Consultation",
    images: [
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "diagnostics",
    title: "Advanced Diagnostics",
    images: [
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "patient-care",
    title: "Patient Care",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160501-bbe57469278b?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "awareness",
    title: "Medical Awareness",
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "lab",
    title: "Laboratory",
    images: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "reception",
    title: "Reception Area",
    images: [
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "cabin",
    title: "Doctor's Cabin",
    images: [
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

export default function GalleryPage() {
  const [lightboxState, setLightboxState] = useState<{ album: Album; currentIndex: number } | null>(null);

  const handleImageClick = (album: Album, startIndex: number) => {
    setLightboxState({ album, currentIndex: startIndex });
  };

  // Lightbox auto-scroll logic
  useEffect(() => {
    if (!lightboxState || lightboxState.album.images.length <= 1) return;

    const timer = setInterval(() => {
      setLightboxState(prev => {
        if (!prev) return null;
        return {
          ...prev,
          currentIndex: (prev.currentIndex + 1) % prev.album.images.length
        };
      });
    }, 4000); // 4 seconds per slide in lightbox

    return () => clearInterval(timer);
  }, [lightboxState?.album.id]);

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxState(prev => {
      if (!prev) return null;
      return { ...prev, currentIndex: (prev.currentIndex + 1) % prev.album.images.length };
    });
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxState(prev => {
      if (!prev) return null;
      const len = prev.album.images.length;
      return { ...prev, currentIndex: prev.currentIndex === 0 ? len - 1 : prev.currentIndex - 1 };
    });
  };

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-20 bg-white overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-800 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Gallery Albums</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Take a tour of our state-of-the-art clinic. Designed to provide a calming, professional, and world-class healthcare experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Albums Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryAlbums.map((album, index) => (
              <ScrollReveal key={album.id} delay={index * 0.1}>
                <AlbumCard album={album} onImageClick={handleImageClick} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-lg"
            onClick={() => setLightboxState(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 shadow-lg"
              onClick={() => setLightboxState(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            {lightboxState.album.images.length > 1 && (
              <>
                <button 
                  onClick={handleLightboxPrev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={handleLightboxNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img 
                    key={lightboxState.currentIndex}
                    src={lightboxState.album.images[lightboxState.currentIndex]} 
                    alt="Enlarged gallery view" 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl absolute"
                  />
                </AnimatePresence>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-white font-bold font-heading text-xl mb-3">{lightboxState.album.title}</h3>
                {lightboxState.album.images.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {lightboxState.album.images.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === lightboxState.currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/30'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

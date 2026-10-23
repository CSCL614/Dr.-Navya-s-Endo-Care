"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eye, X, ZoomIn, Camera, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface GalleryPhoto {
  id: string;
  title: string;
  category: "foot-suite" | "infrastructure" | "diagnostics";
  imageUrl: string;
  caption: string;
  badge: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-1",
    title: "Diabetic Foot Profiler & Biothesiometer Suite",
    category: "foot-suite",
    imageUrl: "/gallery/diabetic-foot-profiler.jpg",
    caption: "Advanced digital biothesiometry workstation at Dr. Navya’s EndoCare for accurate vibration perception threshold (VPT) testing and early peripheral neuropathy screening.",
    badge: "Specialized Suite"
  },
  {
    id: "photo-2",
    title: "Diabetic Foot Care & Patient Guidance Station",
    category: "foot-suite",
    imageUrl: "/gallery/diabetic-foot-care-guide.jpg",
    caption: "Visual foot inspection guidelines, monofilament sensory analysis, and custom offloading footwear counseling area for diabetic patients.",
    badge: "Patient Education"
  },
  {
    id: "photo-3",
    title: "Clinic Identity & Superspeciality Emblem",
    category: "infrastructure",
    imageUrl: "/gallery/clinic-logo.jpg",
    caption: "Official identity of Dr. Navya's EndoCare — Diabetes, Thyroid & Endocrine Superspeciality Center, inaugurated 29 April 2024 at Vizianagaram.",
    badge: "Clinic Emblem"
  },
  {
    id: "photo-4",
    title: "Consultant Examination & Counseling Cabin",
    category: "infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
    caption: "Private, comfortable consultation chamber where Dr. Navya Sruthi Mandapati conducts in-depth adult and paediatric endocrine evaluations.",
    badge: "Consultation"
  },
  {
    id: "photo-5",
    title: "In-House Diagnostic Laboratory",
    category: "diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    caption: "Rapid-turnaround blood glucose, HbA1c, thyroid panel, and electrolyte testing workstations ensuring immediate clinical correlation.",
    badge: "Diagnostics"
  },
  {
    id: "photo-6",
    title: "Patient Care, Monitoring & Day-Care Facility",
    category: "infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    caption: "Well-appointed reception, spacious waiting lounges, and day-care monitoring beds designed for utmost patient comfort.",
    badge: "Day-Care"
  }
];

export function HomeGallerySection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "foot-suite" | "infrastructure" | "diagnostics">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredPhotos = activeCategory === "all" 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === activeCategory);

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "foot-suite", label: "Diabetic Foot Suite" },
    { id: "infrastructure", label: "Chambers & Infrastructure" },
    { id: "diagnostics", label: "Diagnostics & Lab" },
  ] as const;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden scroll-mt-20">
      {/* Soft Ambient Accents */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-pale-blue/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal>
            <div className="section-tag mb-4">
              <Camera className="w-4 h-4 text-primary" />
              <span>Clinic Facilities Showcase</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy mb-4 leading-tight tracking-tight">
              Clinic <span className="gradient-text">Photo Gallery</span>
            </h2>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Explore the modern infrastructure, specialized diabetic foot care suite, diagnostic technology, and patient care areas at Dr. Navya’s EndoCare in Vizianagaram.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer active:scale-95 ${
                    activeCategory === tab.id
                      ? "bg-primary text-white border-primary shadow-xs hover:bg-primary-dark"
                      : "bg-pale-blue/60 text-navy hover:text-primary border-border/80 hover:border-primary/40 hover:bg-pale-blue"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => (
            <ScrollReveal key={photo.id} delay={index * 0.08} direction="up">
              <div 
                onClick={() => setSelectedPhoto(photo)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-navy border border-border shadow-xs">
                    {photo.badge}
                  </div>

                  {/* Hover Overlay with circular zoom icon */}
                  <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-navy group-hover:text-primary transition-colors mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary">
                    <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Photo</span>
                    </span>
                    <span className="text-[11px] text-text-muted font-normal">Vizianagaram</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-navy/85 backdrop-blur-md p-4 sm:p-6 md:p-10"
              onClick={() => setSelectedPhoto(null)}
            >
              <button
                className="absolute top-5 right-5 sm:top-7 sm:right-7 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-navy transition-all duration-200 z-50 shadow-md active:scale-95 cursor-pointer"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close Photo Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[380px] sm:h-[480px] md:h-[520px] bg-black">
                  <Image
                    src={selectedPhoto.imageUrl}
                    alt={selectedPhoto.title}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3.5 py-1.5 rounded-full text-xs font-bold text-navy shadow-xs">
                    {selectedPhoto.badge}
                  </div>
                </div>

                <div className="p-6 sm:p-8 bg-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy mb-2">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {selectedPhoto.caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

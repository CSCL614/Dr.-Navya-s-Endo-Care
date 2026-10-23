"use client";

const services = [
  "Type 1 & Type 2 Diabetes Care",
  "Thyroid Disorders Superspeciality",
  "Obesity & Lifestyle Clinic (Wed 4–6 PM)",
  "PCOS & Metabolic Health",
  "Paediatric Endocrinology & Growth",
  "Comprehensive Diabetic Foot Screening",
  "Biothesiometry & Vascular Assessment",
  "Adult & Paediatric Hormonal Care"
];

// Duplicate the array a few times to ensure seamless infinite scrolling
const marqueeItems = [...services, ...services, ...services, ...services];

export function ServicesMarquee() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-navy via-navy-light to-navy text-white py-4 shadow-md block relative z-30 mb-4 sm:mb-8">
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll-marquee 40s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
      <div className="flex whitespace-nowrap items-center w-max animate-marquee">
        {marqueeItems.map((service, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-sm md:text-base font-medium tracking-wider pr-8 text-white/90">
              {service}
            </span>
            <span className="text-accent-warm text-sm pr-8" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

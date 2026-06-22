"use client";

const services = [
  "Diabetes Management",
  "Thyroid Disorders",
  "Hormonal Imbalance",
  "Obesity & Weight Management",
  "PCOS Care",
  "Bone Health"
];

// Duplicate the array a few times to ensure seamless infinite scrolling
const marqueeItems = [...services, ...services, ...services, ...services];

export function ServicesMarquee() {
  return (
    <div className="w-full overflow-hidden bg-primary text-white py-3.5 shadow-md block relative z-30 mb-4 sm:mb-8">
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll-marquee 35s linear infinite;
        }
      `}</style>
      <div className="flex whitespace-nowrap items-center w-max animate-marquee">
        {marqueeItems.map((service, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-sm md:text-base font-medium tracking-wider pr-8">
              {service}
            </span>
            <span className="text-teal-200 text-xs pr-8">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

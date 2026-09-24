import React, { useState } from 'react';

const TRANSFORMATIONS = [
  {
    title: "Hyper-Realistic Microblading",
    area: "Brows",
    notes: "Restored sparse arches to full, feather-light symmetry matching natural hair growth patterns.",
    image: "/images/microblading.jpg"
  },
  {
    title: "Velvet Lip Blush Wash",
    area: "Lips",
    notes: "Soft nude rose contour correcting pale vermilion borders with all-day effortless color.",
    image: "/images/lip-blush.jpg"
  },
  {
    title: "Blade & Shade Hybrid Brow",
    area: "Brows",
    notes: "Microbladed hair strokes in front with powdery gradient tail density for low-maintenance beauty.",
    image: "/images/powder-brows.jpg"
  },
  {
    title: "Lash Line Enhancement",
    area: "Eyes",
    notes: "Intra-lash micro-pigmentation creating the optical illusion of fuller, darker eyelashes.",
    image: "/images/eyeliner.jpg"
  }
];

export default function TransformationGallery({ onOpenBooking }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = TRANSFORMATIONS[selectedIdx];

  return (
    <section id="gallery" className="py-20 bg-stone-50 dark:bg-[#0e0d11] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold tracking-widest text-[#b07d62] dark:text-[#d4a373] uppercase">
            // TRANSFORMATION PORTFOLIO
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 dark:text-white">
            Natural, Healed, Undetectable
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg font-light">
            We prioritize healed longevity and soft realism over harsh trends. Here is how your enhancements look in natural daylight.
          </p>
        </div>

        {/* Gallery Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual Showcase */}
          <div className="lg:col-span-8">
            <div className="card-thick overflow-hidden relative group">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#d4a373] text-white">
                  {active.area} Enhancement
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                  {active.title}
                </h3>
                <p className="text-sm text-stone-200 max-w-xl font-light">
                  {active.notes}
                </p>
              </div>
            </div>
          </div>

          {/* Side Selector Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {TRANSFORMATIONS.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setSelectedIdx(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border flex items-center justify-between ${
                  selectedIdx === idx
                    ? 'bg-white dark:bg-[#16141b] border-[#d4a373] shadow-thick'
                    : 'bg-stone-100/70 dark:bg-[#110f14] border-stone-200 dark:border-[#221f28] hover:border-[#d4a373]/50'
                }`}
              >
                <div>
                  <div className="text-[11px] font-mono tracking-widest text-[#b07d62] dark:text-[#d4a373] uppercase">
                    0{idx + 1} • {item.area}
                  </div>
                  <div className="font-serif font-medium text-stone-900 dark:text-white text-lg">
                    {item.title}
                  </div>
                </div>
                <svg className={`w-5 h-5 transition-transform ${selectedIdx === idx ? 'text-[#d4a373] translate-x-1' : 'text-stone-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            ))}

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking(active.area, active.title)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4a373] to-[#b07d62] text-white font-medium text-sm shadow-md hover:shadow-gold-glow transition-all text-center"
              >
                Request Custom Consultation for {active.area}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/servicesData';

export default function ServicesSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="procedures" className="py-20 bg-stone-50/60 dark:bg-[#0e0d11] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#b07d62] dark:text-[#d4a373] uppercase">
            <span>// PROCEDURES & ARTISTRY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 dark:text-white">
            Tailored Enhancements for Your Unique Features
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg font-light">
            Every procedure begins with comprehensive bone-structure mapping, custom pigment formulation, and bespoke technique selection.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#d4a373] text-white shadow-md'
                  : 'bg-white dark:bg-[#16141a] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-[#2a2533] hover:border-[#d4a373]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Procedures Grid - Thick & Alive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="card-thick-hover flex flex-col justify-between group"
            >
              {/* Media header */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-black/80 text-stone-900 dark:text-white backdrop-blur-md">
                    {service.subType}
                  </span>
                  {service.freeForSurvivors && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#d4a373] text-white shadow-md">
                      100% FREE FOR SURVIVORS
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-200">
                  <span className="flex items-center space-x-1">
                    <svg className="w-3.5 h-3.5 text-[#d4a373]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{service.duration}</span>
                  </span>
                  <span className="text-[#e8c4a2] font-medium">
                    Retention: {service.retention}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono tracking-widest text-[#b07d62] dark:text-[#d4a373] uppercase">
                    // 0{index + 1} {service.category}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-stone-900 dark:text-white group-hover:text-[#d4a373] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 dark:border-[#221f28] space-y-3">
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    <strong className="text-stone-700 dark:text-stone-300">Ideal For:</strong> {service.recommendedFor}
                  </div>

                  <button
                    onClick={() => onOpenBooking(service.category, service.title)}
                    className="w-full py-3 rounded-full bg-stone-900 dark:bg-[#1f1b24] text-white hover:bg-[#d4a373] dark:hover:bg-[#d4a373] text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Inquire / Book This Service</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

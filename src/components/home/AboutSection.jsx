import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AboutSection({ onOpenBooking }) {
  const { artist } = BUSINESS_INFO;

  return (
    <section id="about" className="py-20 bg-[#faf8f5] dark:bg-[#0b0a0d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card-thick overflow-hidden border-2 border-stone-200 dark:border-[#2a2533]">
              <img
                src="/images/hero-porsche.jpg"
                alt="Porsche Ray in her studio"
                className="w-full h-[450px] object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-[#2a2533] h-36">
                <img
                  src="/images/studio-lounge.jpg"
                  alt="Motsy Beauty Lounge Folsom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-[#2a2533] h-36">
                <img
                  src="/images/consultation-room.jpg"
                  alt="Consultation Space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-xs font-semibold tracking-widest text-[#b07d62] dark:text-[#d4a373] uppercase">
              // ABOUT THE ARTIST
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 dark:text-white leading-tight">
              Artistry, Skill & <br />
              <span className="italic font-normal text-gold-gradient">
                Genuine Human Connection
              </span>
            </h2>

            <p className="text-stone-700 dark:text-stone-300 text-base sm:text-lg font-light leading-relaxed">
              {artist.bio}
            </p>

            {/* Quote block */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#131116] border-l-4 border-[#d4a373] border border-stone-200 dark:border-[#2a2533] shadow-sm">
              <p className="font-serif italic text-stone-800 dark:text-stone-200 text-base leading-relaxed">
                "{artist.quote}"
              </p>
              <div className="mt-3 text-xs font-semibold text-[#b07d62] dark:text-[#d4a373]">
                — Porsche Ray, Founder
              </div>
            </div>

            {/* Credentials Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-stone-200 dark:border-[#241f2c] bg-stone-50 dark:bg-[#110f14]">
                <div className="font-semibold text-sm text-stone-900 dark:text-white">18x Certified Master</div>
                <div className="text-xs text-stone-500 mt-1">Advanced Microblading, Ombré Shading, Lip Blush & Paramedical SMP</div>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 dark:border-[#241f2c] bg-stone-50 dark:bg-[#110f14]">
                <div className="font-semibold text-sm text-stone-900 dark:text-white">Medical-Grade Safety</div>
                <div className="text-xs text-stone-500 mt-1">Hospital-grade sterilization, single-use disposable cartridges & vegan pigments</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-3.5 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-medium text-sm hover:bg-[#d4a373] dark:hover:bg-[#d4a373] transition-colors"
              >
                Schedule Consultation with Porsche
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

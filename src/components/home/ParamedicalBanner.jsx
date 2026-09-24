import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ParamedicalBanner({ onOpenBooking }) {
  return (
    <section id="survivor-pledge" className="py-16 bg-[#131116] text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#d4a373]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-[#2a2533] bg-gradient-to-br from-[#1a1720] to-[#0e0d11] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-thick">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4a373]/20 border border-[#d4a373]/40 text-[#e8c4a2] text-xs font-semibold tracking-wider uppercase">
                <span>OUR SACRED PLEDGE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                Free 3D Areola Restorative Tattoos for <br />
                <span className="italic font-normal text-gold-gradient">
                  Breast Cancer Warriors & Survivors
                </span>
              </h2>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light max-w-3xl">
                {BUSINESS_INFO.survivorPromise} Porsche uses specialized medical tattooing techniques to simulate realistic depth, shading, and texture so you can look in the mirror and feel whole again.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-[#e8c4a2] pt-2">
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]"></span>
                  <span>100% Free of Charge</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]"></span>
                  <span>Requires 6 Months Healed Post-Op</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]"></span>
                  <span>Private, Compassionate Studio</span>
                </span>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking('Paramedical', '3D Areola Restoration (FREE for Survivors)')}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b07d62] text-white font-medium text-sm shadow-md hover:shadow-gold-glow hover:opacity-95 transition-all"
                >
                  Inquire Privately & Compassionately
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 relative flex justify-center">
              <div className="rounded-2xl overflow-hidden border border-[#2a2533] max-w-xs shadow-2xl">
                <img
                  src="/images/paramedical-care.jpg"
                  alt="Paramedical Restorative Tattooing"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

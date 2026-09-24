import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a373]/10 dark:bg-[#d4a373]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4a373]/10 border border-[#d4a373]/30 text-[#b07d62] dark:text-[#e8c4a2] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#d4a373]"></span>
              <span>18X CERTIFIED PMU ARTIST • FOLSOM, CA</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl font-medium tracking-tight text-stone-900 dark:text-white leading-[1.12]">
              Effortless Natural Beauty. <br />
              <span className="italic font-normal text-gold-gradient">
                Wake Up Flawless.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 max-w-2xl font-light leading-relaxed">
              Experience the pinnacle of permanent cosmetics in Northern California. Custom hyper-realistic microblading, velvet lip blush, eyeliner, and restorative 3D areola tattooing with master artist Porsche Ray.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                id="schedule-drawer"
                onClick={() => onOpenBooking()}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b07d62] text-white font-medium text-base shadow-thick hover:shadow-gold-glow hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
              >
                <span>Reserve Consultation</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <a
                href="#procedures"
                className="px-8 py-4 rounded-full border-2 border-stone-300 dark:border-stone-700 hover:border-[#d4a373] dark:hover:border-[#d4a373] text-stone-800 dark:text-stone-200 font-medium text-base text-center transition-all duration-200 hover:bg-stone-100/50 dark:hover:bg-stone-800/40"
              >
                Explore Procedures
              </a>
            </div>

            {/* Micro-Trust Credentials */}
            <div className="pt-6 border-t border-stone-200 dark:border-stone-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="flex items-center text-[#d4a373] text-sm">
                  ★★★★★
                </div>
                <div className="text-xs font-semibold text-stone-900 dark:text-stone-200 mt-0.5">5.0 Star Rated</div>
                <div className="text-[11px] text-stone-500">Sacramento & Folsom Clients</div>
              </div>

              <div>
                <div className="text-xs font-semibold text-stone-900 dark:text-stone-200 mt-1">18x Certified</div>
                <div className="text-[11px] text-stone-500">Master Level PMU & SMP</div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs font-semibold text-[#b07d62] dark:text-[#e8c4a2] mt-1">Survivor Pledge</div>
                <div className="text-[11px] text-stone-500">Free 3D Areola Restoration</div>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Photo Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d4a373]/30 to-[#b07d62]/30 rounded-3xl blur-xl opacity-70"></div>
              
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden card-thick border-2 border-stone-200/90 dark:border-[#2a2533]">
                <img
                  src="/images/hero-porsche.jpg"
                  alt="Porsche Ray - Founder and 18x Certified PMU Artist at The Makeover Mommy"
                  className="w-full h-[480px] sm:h-[560px] object-cover object-top filter contrast-[1.03]"
                />
                
                {/* Floating Studio Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card border border-white/20 dark:border-white/10 shadow-lg text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#d4a373]/20 flex items-center justify-center text-[#d4a373] font-serif font-bold text-lg">
                      PR
                    </div>
                    <div>
                      <div className="font-serif font-semibold text-stone-900 dark:text-white text-base">
                        Porsche Ray
                      </div>
                      <div className="text-xs text-[#b07d62] dark:text-[#d4a373] font-medium">
                        Owner & Master PMU Artist • Motsy Beauty Lounge
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

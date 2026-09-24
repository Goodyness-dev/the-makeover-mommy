import React from 'react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function LocationHoursSection({ onOpenBooking }) {
  const open = isOpenNow();

  return (
    <section id="location" className="py-20 bg-[#faf8f5] dark:bg-[#0b0a0d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Studio & Hours Info */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="text-xs font-semibold tracking-widest text-[#b07d62] dark:text-[#d4a373] uppercase">
              // STUDIO & APPOINTMENTS
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 dark:text-white leading-tight">
              Located in the Heart of Folsom, California
            </h2>

            <div className="card-thick p-7 sm:p-8 space-y-6">
              
              {/* Address item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#d4a373]/15 flex items-center justify-center text-[#d4a373] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#b07d62] dark:text-[#d4a373] uppercase tracking-wider">
                    STUDIO ADDRESS
                  </div>
                  <div className="font-serif font-semibold text-lg text-stone-900 dark:text-white mt-1">
                    The Makeover Mommy
                  </div>
                  <div className="text-sm text-stone-600 dark:text-stone-300">
                    6693 Folsom-Auburn Road, Suite E
                  </div>
                  <div className="text-xs font-medium text-[#b07d62] dark:text-[#d4a373] mt-0.5">
                    (Inside Motsy Beauty Lounge)
                  </div>
                  <div className="text-xs text-stone-500 mt-1">
                    Serving Folsom, El Dorado Hills, Granite Bay, Roseville & Greater Sacramento
                  </div>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start space-x-4 pt-4 border-t border-stone-200 dark:border-[#221f28]">
                <div className="w-10 h-10 rounded-full bg-[#d4a373]/15 flex items-center justify-center text-[#d4a373] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#b07d62] dark:text-[#d4a373] uppercase tracking-wider">
                    DIRECT CALL OR TEXT
                  </div>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="font-serif font-semibold text-lg text-stone-900 dark:text-white hover:text-[#d4a373] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-stone-400">/</span>
                    <a
                      href={`tel:${BUSINESS_INFO.secondaryPhone.replace(/[^0-9]/g, '')}`}
                      className="font-serif font-semibold text-lg text-stone-900 dark:text-white hover:text-[#d4a373] transition-colors"
                    >
                      {BUSINESS_INFO.secondaryPhone}
                    </a>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">
                    Email: {BUSINESS_INFO.email}
                  </div>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="pt-4 border-t border-stone-200 dark:border-[#221f28]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#b07d62] dark:text-[#d4a373] uppercase tracking-wider">
                    OPERATING HOURS
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${open ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-400'}`}>
                    {open ? 'Open Now' : 'Closed Now'}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                  {BUSINESS_INFO.hours.map((h) => (
                    <div key={h.day} className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800/40">
                      <span className="font-medium text-stone-800 dark:text-stone-200">{h.day}</span>
                      <span>
                        {h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
                        {h.note && <span className="text-[#d4a373] ml-1.5 font-medium">({h.note})</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cancellation policy note */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-amber-800 dark:text-amber-300">Cancellation Policy:</strong> 14-day advance notice required to reschedule without deposit forfeiture. Rescheduled deposits are 100% credited to your new session.
              </div>

            </div>
          </div>

          {/* Right: Interactive Map & Quick Action */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="card-thick overflow-hidden h-full min-h-[420px] flex flex-col">
              <div className="relative flex-1 w-full min-h-[340px]">
                <iframe
                  title="The Makeover Mommy Location"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full min-h-[340px] filter grayscale-[15%] contrast-[1.05]"
                ></iframe>
              </div>

              <div className="p-6 bg-white dark:bg-[#131116] border-t border-stone-200 dark:border-[#2a2533] flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={BUSINESS_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-medium text-xs tracking-wider uppercase text-center hover:bg-[#d4a373] transition-colors"
                >
                  Get Driving Directions
                </a>

                <button
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b07d62] text-white font-medium text-xs tracking-wider uppercase text-center shadow-md hover:shadow-gold-glow transition-all"
                >
                  Book Appointment Slot
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

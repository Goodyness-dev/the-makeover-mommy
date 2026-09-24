import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-stone-50 dark:bg-[#0e0d11] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold tracking-widest text-[#b07d62] dark:text-[#d4a373] uppercase">
            // CLIENT EXPERIENCES
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 dark:text-white">
            Loved Across Sacramento & Folsom
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg font-light">
            Real feedback from clients who simplified their morning beauty routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESS_INFO.reviews.map((rev, index) => (
            <div
              key={index}
              className="card-thick p-8 text-left flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-[#d4a373] text-sm tracking-wide">
                    ★★★★★
                  </div>
                  <span className="text-xs text-stone-400 font-mono">
                    {rev.source}
                  </span>
                </div>
                <p className="text-stone-700 dark:text-stone-300 text-base font-light italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 dark:border-[#221f28] flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-stone-900 dark:text-white block font-serif text-sm">
                    {rev.author}
                  </span>
                  <span className="text-stone-500">
                    {rev.location}
                  </span>
                </div>
                <span className="text-stone-400">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

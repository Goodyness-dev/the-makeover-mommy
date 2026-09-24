import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#110f14] text-stone-400 border-t border-[#221f28] pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 text-left">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-semibold text-white tracking-wider">
              THE MAKEOVER MOMMY
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Folsom's luxury permanent cosmetics & paramedical tattoo studio, led by 18x certified master artist Porsche Ray. Located inside Motsy Beauty Lounge.
            </p>
            <div className="text-xs text-[#d4a373] font-medium">
              ★ Proudly offering free 3D areola restoration to breast cancer survivors.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Procedures
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#procedures" className="hover:text-[#d4a373] transition-colors">Hyper-Realistic Microblading</a></li>
              <li><a href="#procedures" className="hover:text-[#d4a373] transition-colors">Ombré Powder Brows</a></li>
              <li><a href="#procedures" className="hover:text-[#d4a373] transition-colors">Velvet Lip Blushing</a></li>
              <li><a href="#procedures" className="hover:text-[#d4a373] transition-colors">Lash Line Enhancement</a></li>
              <li><a href="#survivor-pledge" className="hover:text-[#d4a373] transition-colors">3D Areola Restoration (Free)</a></li>
              <li><a href="#procedures" className="hover:text-[#d4a373] transition-colors">Microneedling Collagen Boost</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Studio & Contact
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <strong className="text-stone-300">Studio:</strong> {BUSINESS_INFO.address.street}
              </li>
              <li className="text-[#d4a373]">
                {BUSINESS_INFO.address.suite}
              </li>
              <li>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</li>
              <li className="pt-1">
                <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-white hover:text-[#d4a373]">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#d4a373]">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Summary & Admin Link */}
          <div className="space-y-3">
            <div className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Studio Hours
            </div>
            <ul className="space-y-1.5 text-xs">
              <li className="flex justify-between">
                <span>Tue – Fri:</span>
                <span className="text-stone-300">9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-stone-300">9:00 AM – 4:00 PM</span>
              </li>
              <li className="flex justify-between text-stone-500">
                <span>Sun – Mon:</span>
                <span>Closed / Private Appt</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#221f28]">
              <button
                onClick={() => onNavigate('admin')}
                className="text-xs text-stone-500 hover:text-[#d4a373] transition-colors flex items-center space-x-1"
              >
                <span>Studio Management Portal</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#221f28] flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All Rights Reserved. Permanent Makeup in Folsom, California.
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-stone-300">About</a>
            <a href="#procedures" className="hover:text-stone-300">Procedures</a>
            <a href="#location" className="hover:text-stone-300">Policies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

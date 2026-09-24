import React, { useState } from 'react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function Navbar({ onNavigate, currentPage, onOpenBooking, darkMode, onToggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const open = isOpenNow();

  const navLinks = [
    { label: 'Procedures', href: '#procedures' },
    { label: 'About Porsche', href: '#about' },
    { label: 'Survivor Pledge', href: '#survivor-pledge' },
    { label: 'Before & After', href: '#gallery' },
    { label: 'Studio & Hours', href: '#location' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/90 dark:bg-[#0b0a0d]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-[#2a2533]/80 transition-colors duration-200">
      {/* Top micro-bar */}
      <div className="bg-[#131116] text-[#e8c4a2] text-xs py-2 px-4 border-b border-[#2a2533]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5">
              <span className={`w-2 h-2 rounded-full ${open ? 'bg-emerald-400 animate-pulse' : 'bg-stone-500'}`}></span>
              <span className="font-medium tracking-wide">
                {open ? 'STUDIO OPEN TODAY' : 'STUDIO OPEN TUE – SAT'}
              </span>
            </span>
            <span className="hidden sm:inline text-stone-600 dark:text-stone-400">•</span>
            <span className="hidden sm:inline text-stone-300">
              Inside Motsy Beauty Lounge, Folsom CA
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#d4a373] font-medium hidden md:inline">
              ★ Free 3D Areola Restoration for Cancer Survivors
            </span>
            <a
              id="tel-btn"
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="text-white hover:text-[#d4a373] transition-colors font-medium flex items-center space-x-1"
            >
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="flex flex-col group cursor-pointer"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-stone-900 dark:text-white group-hover:text-[#d4a373] transition-colors">
              THE MAKEOVER MOMMY
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#b07d62] dark:text-[#d4a373] font-medium uppercase mt-0.5">
              PERMANENT MAKEUP & PARAMEDICAL • FOLSOM, CA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-[#d4a373] dark:hover:text-[#d4a373] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Dark Mode Toggle */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onToggleDarkMode}
              aria-label="Toggle visual theme"
              className="p-2.5 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/80 transition-colors"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-[#d4a373]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <button
              id="schedule-drawer"
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b07d62] text-white font-medium text-sm shadow-md hover:shadow-gold-glow hover:opacity-95 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onToggleDarkMode}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-stone-600 dark:text-stone-300"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-[#d4a373]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-stone-800 dark:text-white hover:bg-stone-200 dark:hover:bg-stone-800"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 dark:border-stone-800 bg-[#faf8f5] dark:bg-[#131116] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="px-3 py-2 text-base font-medium text-stone-800 dark:text-stone-200 hover:text-[#d4a373] rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800/50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-col space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4a373] to-[#b07d62] text-white font-medium text-center shadow-md"
            >
              Book Consultation
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-center font-medium"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

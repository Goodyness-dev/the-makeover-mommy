import React, { useState } from 'react';
import { SERVICES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function QuoteWizardModal({ isOpen, onClose, initialCategory, initialService }) {
  const [selectedService, setSelectedService] = useState(initialService || '');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDay: 'Tuesday',
    preferredTime: 'Morning (10:00 AM)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate instant atomic lead capture
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#131116] rounded-3xl border border-stone-200 dark:border-[#2a2533] shadow-2xl p-6 sm:p-10 text-left overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <h3 className="font-serif text-3xl font-medium text-stone-900 dark:text-white">
              Consultation Request Received
            </h3>
            <p className="text-stone-600 dark:text-stone-300 text-sm max-w-md mx-auto">
              Thank you, {formData.name || 'there'}! Porsche Ray will personally review your request and text/call you at <strong>{formData.phone}</strong> within 24 hours to confirm your appointment time and discuss preparation guidelines.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#d4a373] text-white font-medium text-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-widest text-[#b07d62] dark:text-[#d4a373] uppercase">
                // RESERVE YOUR APPOINTMENT
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-white mt-1">
                Book Consultation with Porsche Ray
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
                Select your desired permanent makeup or paramedical treatment below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Service Select */}
              <div>
                <label className="block text-stone-700 dark:text-stone-300 font-semibold mb-1.5">
                  Select Procedure:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-3 rounded-xl border border-stone-300 dark:border-[#2a2533] bg-stone-50 dark:bg-[#1a1721] text-stone-900 dark:text-white focus:outline-none focus:border-[#d4a373]"
                  required
                >
                  <option value="">-- Choose a Service --</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.category} • {s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 dark:text-stone-300 font-semibold mb-1.5">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full p-3 rounded-xl border border-stone-300 dark:border-[#2a2533] bg-stone-50 dark:bg-[#1a1721] text-stone-900 dark:text-white focus:outline-none focus:border-[#d4a373]"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 dark:text-stone-300 font-semibold mb-1.5">
                    Mobile Phone (For SMS Confirmation):
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(916) 000-0000"
                    className="w-full p-3 rounded-xl border border-stone-300 dark:border-[#2a2533] bg-stone-50 dark:bg-[#1a1721] text-stone-900 dark:text-white focus:outline-none focus:border-[#d4a373]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-stone-700 dark:text-stone-300 font-semibold mb-1.5">
                  Email Address:
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full p-3 rounded-xl border border-stone-300 dark:border-[#2a2533] bg-stone-50 dark:bg-[#1a1721] text-stone-900 dark:text-white focus:outline-none focus:border-[#d4a373]"
                />
              </div>

              {/* Day & Time Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 dark:text-stone-300 font-semibold mb-1.5">
                    Preferred Day of Week:
                  </label>
                  <select
                    value={formData.preferredDay}
                    onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 dark:border-[#2a2533] bg-stone-50 dark:bg-[#1a1721] text-stone-900 dark:text-white focus:outline-none focus:border-[#d4a373]"
                  >
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 dark:text-stone-300 font-semibold mb-1.5">
                    Preferred Time Window:
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 dark:border-[#2a2533] bg-stone-50 dark:bg-[#1a1721] text-stone-900 dark:text-white focus:outline-none focus:border-[#d4a373]"
                  >
                    <option value="Morning (10:00 AM)">Morning (10:00 AM)</option>
                    <option value="Mid-day (1:00 PM)">Mid-day (1:00 PM)</option>
                    <option value="Afternoon (3:30 PM)">Afternoon (3:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-stone-700 dark:text-stone-300 font-semibold mb-1.5">
                  Questions or Medical Notes (Optional):
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Previous microblading done 3 years ago, sensitive skin, etc."
                  className="w-full p-3 rounded-xl border border-stone-300 dark:border-[#2a2533] bg-stone-50 dark:bg-[#1a1721] text-stone-900 dark:text-white focus:outline-none focus:border-[#d4a373]"
                ></textarea>
              </div>

              <div className="p-3 rounded-xl bg-stone-100 dark:bg-[#1c1922] text-[11px] text-stone-500">
                🔒 Your consultation reservation is secure. A 20% deposit is held only once your date & time are confirmed directly by Porsche.
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b07d62] text-white font-semibold text-sm shadow-md hover:shadow-gold-glow transition-all"
                >
                  {submitting ? 'Submitting Reservation...' : 'Confirm Consultation Request'}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

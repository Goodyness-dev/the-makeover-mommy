/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxe: {
          dark: '#0b0a0d',
          card: '#131116',
          cardHover: '#1c1921',
          border: '#2a2533',
          borderSubtle: '#1d1a24',
          gold: '#d4a373',
          goldLight: '#e8c4a2',
          goldMuted: '#9e7952',
          rose: '#b07d62',
          lightBg: '#faf8f5',
          lightCard: '#ffffff',
          lightBorder: '#ebe4dc'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'thick': '0 12px 36px -8px rgba(0, 0, 0, 0.35), 0 4px 12px -2px rgba(0, 0, 0, 0.2)',
        'thick-hover': '0 20px 48px -10px rgba(212, 163, 115, 0.18), 0 8px 24px -4px rgba(0, 0, 0, 0.4)',
        'gold-glow': '0 0 25px rgba(212, 163, 115, 0.25)'
      }
    },
  },
  plugins: [],
}

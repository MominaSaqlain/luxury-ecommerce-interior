/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      colors: {
        // MUQA'S INTERIOR Luxury Palette
        charcoal: {
          DEFAULT: '#2C2C2C', // Deep Charcoal (Primary Text)
          light: '#404040',
          dark: '#1A1A1A'
        },
        gold: {
          DEFAULT: '#D4AF37', // Warm Gold (Accent, CTAs)
          dark: '#B8860B',    // Dark Gold (Hover states)
          light: '#F3E5AB'
        },
        cream: {
          DEFAULT: '#F5F5DC', // Soft Cream (Backgrounds)
          light: '#FFFFFF',   // Pure White
        },
        brown: {
          DEFAULT: '#8B4513', // Rich Brown (Secondary accent)
        },
        beige: {
          DEFAULT: '#F4EAD5', // Soft Beige (Alternate backgrounds)
        },
        stone: {
          DEFAULT: '#E5E5E5', // Light Gray (Borders, dividers)
          dark: '#A3A3A3',
        }
      },
      boxShadow: {
        'luxury': '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
        'luxury-lg': '0 30px 60px -15px rgba(0, 0, 0, 0.12)',
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.4)',
      },
      backgroundImage: {
        'gradient-cream-white': 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
      },
      backdropBlur: {
        xs: '4px',
        md: '12px',
        lg: '24px'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.5s ease-out',
        'luxury-float': 'luxuryFloat 6s ease-in-out infinite',
        'stagger': 'stagger 0.1s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        luxuryFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

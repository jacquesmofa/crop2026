import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D5C63',
          dark: '#094449',
          light: '#1A7A84',
        },
        secondary: {
          DEFAULT: '#C9A961',
          dark: '#B08F45',
          light: '#D4B876',
        },
        accent: {
          DEFAULT: '#2E8B9E',
          coral: '#E07A5F',
        },
        navy: {
          DEFAULT: '#1A2332',
          dark: '#0F1419',
        },
        charcoal: '#2D3748',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'content': '1400px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
} satisfies Config

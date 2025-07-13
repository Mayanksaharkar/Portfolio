/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-smooth': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scale-smooth': 'scaleSmooth 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleSmooth: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    // themes: ["light", "dark"]
    themes: [
      {
        light: {
          "primary": "#6587ff",

          "neutral": "#3a395e",

          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
          "base-300": "#d8d8d8",
        },
        dark: {
          "primary": "#6587ff",
          "neutral": "#a5acba",
          "base-100": "#1d232a",
          "base-200": "#181d23",
          "base-300": "#14191e",
        }
      }
    ]
  },
}
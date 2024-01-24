/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
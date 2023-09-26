/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      basic: ["Satoshi", "sans-serif"],
      title: ["Recoleta", "sans-serif"],
      hero: ['Inter', 'sans-serif']
     
    },
  },
  plugins: [],
}
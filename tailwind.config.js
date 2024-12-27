/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/frontend/**/*.{js,ts,jsx,tsx}",
    "./src/backend/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Overpass: ["Overpass"],
      SignikaNegative: ["Signika Negative"],
    },
    extend: {
      fontWeight: {
        bold: '700',
        medium: '500',
      },
    },
  },
  plugins: [],
}
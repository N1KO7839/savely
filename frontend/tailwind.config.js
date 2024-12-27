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
      Overpass: ["Overpass", "sans-serif"],
      SignikaNegative: ["Signika Negative", "sans-serif"],
    },
    extend: {
      fontWeight: {
        bold: '700',
        medium: '500',
      },
      minWidth: {
        'xl': '1218px',
        'md': '928px',
        'sm': '640px',
      },
    },
  },
  plugins: [

  ],
};

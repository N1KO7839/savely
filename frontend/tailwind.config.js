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
        'mobileS': '274px',
        'mobileM': '339px',
        'mobileL': '389px',
        'sm': '640px',
        'tablet': '732px',
        'lg': '924px',
        'xl': '1218px',
      },
      screens: {
        'mobileS': '320px',
        'mobileM': '375px',
        'mobileL': '425px',
        'tablet': '768px',
      },
    },
  },
  plugins: [

  ],
};

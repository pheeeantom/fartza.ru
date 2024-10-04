/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./views/index.html",
  "./react/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        ...colors
      }
    },
  },
  plugins: [],
}


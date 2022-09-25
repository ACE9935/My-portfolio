/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:'#0A1334',
        lBlack:'#14202E',
        mediumBlue:'#2D4356',
        lightBlue:'#89AAC3'
      }
    },
  },
  plugins: [],
}

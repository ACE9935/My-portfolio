/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:'#4fd78f',
        secondary:'#36393b',
        dark:'#202121'
      }
    },
  },
  plugins: [],
}

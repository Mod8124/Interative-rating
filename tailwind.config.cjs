/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Orange':'hsl(25, 97%, 53%)',
        'white':'hsl(0, 0%, 100%)',
        'lightGrey':'hsl(217, 12%, 63%)',
        'mediumGrey':'hsl(216, 12%, 54%)',
        'darkBlue':'hsl(213, 19%, 18%)',
        'softDarkBlue':'hsl(213, 19%, 11%)',
        'veryDarkBlue':'hsl(216, 12%, 8%)'
      },
      fontFamily:{
        'Overpass':['Overpass']
      },
      fontSize:{
        sm:'15px'
      }
    },
  },
  plugins: [],
}

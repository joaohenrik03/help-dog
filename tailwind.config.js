/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: 'Rubik, sans-serif;',       
          bold: 'Merriweather, serif;',
        },
        colors: {
          purple: {
            500: '#713FFF',
            600: '#3C184E',
          }
        } 
      }
    },
  },
  plugins: [],
}

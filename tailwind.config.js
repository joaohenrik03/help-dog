/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      colors: {
        'purple-500': '#713FFF',
        'purple-600': '#3C184E',
      }
    },
  },
  plugins: [],
}

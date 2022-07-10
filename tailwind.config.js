/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'rubik': ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

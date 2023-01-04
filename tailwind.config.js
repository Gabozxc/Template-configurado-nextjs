/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'night': "#1F2937",
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        seroja: {
          light: '#2e7d32', // Hijau Herbal Seroja
          dark: '#1b5e20',
        }
      }
    },
  },
  plugins: [],
}
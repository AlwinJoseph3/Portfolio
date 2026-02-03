/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Critical for your light/dark mode button
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#007AFF', // Using a variable instead of hardcoding
        }
      }
    },
  },
  plugins: [],
}
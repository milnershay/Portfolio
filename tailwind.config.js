/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#63b3ed', // cool blue accent
        'dark-bg': '#1a202c',
        'light-bg': '#2d3748',
        'light-text': '#e2e8f0',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


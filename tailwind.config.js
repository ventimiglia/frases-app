/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a421f9",
        secondary: "#00dcb3"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


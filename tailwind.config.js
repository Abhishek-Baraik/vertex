/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       primary:"#1A76D1",
       secondary:"#2C2D3F",
       tertiary:"#176ABC",
       quadery:"#EDF2FF"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      lato: '"Lato", sans-serif',
      eduTas: '"Edu TAS Beginner", cursive',
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "meal-one": "url('/img/meal1.jpg')",
        "meal-two": "url('/img/meal2.jpg')",
        "plate-one": "url('/img/menu/plate1.jpg')",
      },
    },
  },
  plugins: [],
};

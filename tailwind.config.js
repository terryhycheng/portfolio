/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fugaz-one": ['"Fugaz One"', "cursive"],
        "merriweather-sans": ['"Merriweather Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

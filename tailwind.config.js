/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_gray: "hsl(0, 0%, 63%)",
        very_dark_gray: "hsl(0, 0%, 27%)",
      },
      fontFamily: {
        league_spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1280px",
    },
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

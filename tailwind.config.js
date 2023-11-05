/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      headingFont: ["Montserrat Subrayada", "sans-serif"],
      signFont: ["Dancing Script", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};

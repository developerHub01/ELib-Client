/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      headingFont: ["Montserrat Subrayada", "sans-serif"],
      signFont: ["Dancing Script", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};

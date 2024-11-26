/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "media",
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#26daeb",
          200: "#22c5d4",
          300: "#1da8b5",
          400: "#15858f",
        },
      },
    },
  },
  plugins: [],
};

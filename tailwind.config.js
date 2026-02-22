/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              "primary": "#5b13ec",
              "primary-light": "#7c42f2",
              "background-light": "#f6f6f8",
              "background-dark": "#131118",
              "surface-dark": "#1f1c27",
              "gold": "#D4AF37",
              "silver": "#C0C0C0",
          },
          fontFamily: {
              "display": ["Inter", "sans-serif"],
              "body": ["Inter", "sans-serif"],
          },
          borderRadius: {
              "full": "9999px"
          },
      },
  },
  plugins: [],
}


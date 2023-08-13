/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "whiteSmoke-rgba": "rgba(255, 255, 255, 0.2)",
        "white-rgba": "rgba(255, 255, 255, 0.9)",
        "white-play": "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

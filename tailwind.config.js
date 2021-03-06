/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "sje-yellow": "#ffb703",
        primary: "#1b1b4b",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};

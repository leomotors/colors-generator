// @ts-check

/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;

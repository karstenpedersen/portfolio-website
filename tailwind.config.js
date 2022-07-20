/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        "light-gray": "var(--color-light-gray)",
      },
      fontFamily: {
        logo: ["Ibarra Real Nova"],
        heading: ["Josefin Sans"],
        paragraph: ["Josefin Sans"],
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};

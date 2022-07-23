const plugin = require('tailwindcss/plugin');

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
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ],
};

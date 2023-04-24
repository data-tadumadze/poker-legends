/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      darkGray: "#1c1d1e",
      middleGray: "#2c3234",
      lightGray: "#44494b",
      white: "#f8f8f8",
      orange: "#ef5a21",
      yellow: "#ffbe00",
      brown: "#b78648",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1160px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        hero: "url('./assets/images/banner.jgp')",
      },
    },
  },
  plugins: [],
};

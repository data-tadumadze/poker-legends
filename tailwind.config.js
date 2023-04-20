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
    },
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/banner.jgp')",
      },
    },
  },
  plugins: [],
};

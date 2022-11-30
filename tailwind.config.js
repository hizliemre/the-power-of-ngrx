/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: ({ colors }) => ({
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      ngrx: {
        DEFAULT: "#BA2BD2",
        50: "#ECC2F3",
        100: "#E6B1EF",
        200: "#DB8FE8",
        300: "#D16DE1",
        400: "#C64CDA",
        500: "#BA2BD2",
        600: "#9121A3",
        700: "#681875",
        800: "#3E0E46",
        900: "#150518",
      },
    }),
    plugins: [require("@tailwindcss/typography")],
  },
};

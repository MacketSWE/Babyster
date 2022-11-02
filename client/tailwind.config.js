/* eslint-disable global-require */

// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      red: {
        100: "#FDF0EE",
        DEFAULT: "#FA674D",
        light: "#fa8470",
      },
      blue: {
        DEFAULT: "#1B214D",
        light: "#2e304d",
        dark: "#171C36",
        darker: "#111536",
        50: "#A6B1B9",
        100: "#EDF0F2",
        200: "#DFF0F5",
        // 900: '#072d3e',
        900: "#1B214D", // text
      },
      green: {
        DEFAULT: "#23D97E",
        400: "#23D97E",
        500: "#5ca26b",
      },
      yellow: {
        DEFAULT: "#E3CE3B",
      },
      gray: {
        50: "#FAFAFA",
        100: "#F5F5F5", // Button / Input
        200: "#E6E6E6", // Button 2
        300: "#BABABA", // Icon / Light text / Placeholder
        400: "#A0A0A0", // Light text / Footer links
        //
        700: "#7F7F7F", // Button text/Dark text
        800: "#727272", // Button text/Dark text
        900: "#4E4E4E",
        // blue: '#7C8388'
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      body: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: "0.5rem",
      },
      width: {
        600: "600px",
        "screen/2": "50vw",
      },
      height: {
        menu: "3rem",
      },
    },
    screens: {
      xs: { max: "450px" },
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

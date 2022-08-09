const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const cyellow = {
  200: '#fef7ec',
  300: '#fdeed9',
  400: '#fbe6c5',
  500: '#fadcb0',
  600: '#f8cd8c',
  700: '#f5bc66',
  800: '#f2a32c',
  900: '#d3840d'
} 

const cred = {
  200: '#edbfbf',
  300: '#e4a0a0',
  400: '#db8080',
  500: '#d05a5a',
  600: '#c94040',
  700: '#af3131',
  800: '#8f2828',
  900: '#7f2424'
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: cred,
        accent: cyellow
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

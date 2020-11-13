const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1140px",
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#bbb",
      primary: "#18364C",
      secondary: "#eb655a",
    },
    fill: (theme) => theme("colors"),
    fontFamily: {
      sans: ["Nunito", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    container: {
      center: true,
    },
    extend: {
      backgroundOpacity: {
        85: "0.85",
      },
    },
  },
  variants: {},
  plugins: [],
}

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
      xxl: "1280px",
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#bbb",
      graylight: "#f9f9f9",
      light: "#838383",
      primary: "#18364C",
      secondary: "#eb655a",
    },
    fill: (theme) => theme("colors"),
    fontFamily: {
      sans: ["Nunito", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      big: "1.625rem",
      xxl: "2.125rem",
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

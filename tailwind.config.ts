import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {},
      borderRadius: {
        DEFAULT: "15px",
      },
      fontSize: {
        "7.5xl": "5.5rem",
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
        "14xl": "18rem",
        "16xl": "24rem",
        "20xl": "30rem",
      },
      screens: {
        xs: "380px",
        xxl: "1400px",
      },
      colors: {
        primary: {
          50: "#A4CBA5",
          200: "#70AE72",
          300: "#589C5B",
          400: "#518F53",
          500: "#4A834C",
          600: "#427544",
          700: "#3B683D",
          800: "#2C4E2D",
          900: "#1D341E",
          950: "#0F1A0F",
        },
        neutral: {
          50: "#ECEDEC",
          100: "#E5E6E5",
          200: "#DDDFDD",
          300: "#CDD0CD",
          400: "#A9ADA9",
          500: "#7C837C",
          600: "#5C615C",
          700: "#414441",
          800: "#202220",
          900: "#161816",
          950: "#070808",
        }
      },
      keyframes: {
        slow: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "slow-spin": "slow 10s alternate ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
};
export default config;
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
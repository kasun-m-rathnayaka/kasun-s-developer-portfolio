import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      black:{
         primary:'#010115', 
      },
      purple:{
         100:'#8982a8', 
      }
    },
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
      shimmer: "shimmer 2s linear infinite",
    },
    keyframes: {
      shimmer: {
        from: {
          "backgroundPosition": "0 0"
        },
        to: {
          "backgroundPosition": "-200% 0"
        }
      },
      spotlight: {
        "0%": {
          opacity: "0",
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: "0.8",
          transform: "translate(-40%,-40%) scale(1)",
        },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;

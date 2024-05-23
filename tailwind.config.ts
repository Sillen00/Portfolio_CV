import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#202020",
        "primary-color-dark": "#000000",
        "primary-color-light": "#443A37",
        "secondary-color": "#DE4126",
        "secondary-color-dark": "#584d4c",
        "secondary-color-light": "#E6563C",
        "accent-color": "#B0254F",
        "hover-color": "#262626",
      },
      textColor: {
        primary: "#ccd6f6",
        secondary: "#B0B0B0",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1980px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;

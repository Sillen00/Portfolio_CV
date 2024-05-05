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
        "primary-color": "#261C21",
        "primary-color-dark": "#000000",
        "primary-color-light": "#443A37",
        "secondary-color": "#DE4126",
        "secondary-color-dark": "#a12c18",
        "secondary-color-light": "#E6563C",
        "accent-color": "#B0254F",
      },
      textColor: {
        primary: "#FFFFFF",
        secondary: "#B0B0B0",
      },
    },
  },
  plugins: [],
};
export default config;

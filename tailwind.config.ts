import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#dadada",
        primary: "#d0ff71",
        accent: "#5e67e6",
        card: "#1a1a1b",
        cardBorder: "#333333",
        textMuted: "#b5b5b5"
      },
      fontFamily: {
        antonio: ["var(--font-antonio)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg:        "var(--bg)",
        card:      "var(--bg-card)",
        text:      "var(--text)",
        muted:     "var(--text-muted)",
        accent:    "var(--accent)",
        lime:      "#d0ff71",
        green:     "#0bde66",
        red:       "#ff2244",
        border:    "var(--border)",
        /* fixed palette */
        dark:      "#1a1a1b",
        "dark-card":"#333333",
        indigo:    "#5e67e6",
      },
      fontFamily: {
        antonio: ["var(--font-antonio)", "sans-serif"],
        inter:   ["var(--font-inter)", "sans-serif"],
      },
      screens: {
        mobile:  { max: "809px" },
        tablet:  { min: "810px", max: "1199px" },
        desktop: { min: "1200px" },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      colors: {
        primary: "#033F63",
        secondary: "#7C96AB",
        neutral: "#B7B7B7",
        success: "#98C39D",
        error: "#FF621F",
        yellow: "#ffc82c",
      },
    },
  },
  plugins: [require("preline/plugin")],
  darkMode: "class",
};
export default config;

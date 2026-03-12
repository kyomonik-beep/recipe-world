import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFCF8",
        foreground: "#2C2C24",
        primary: {
          DEFAULT: "#5D7052",
          foreground: "#F3F4F1",
        },
        secondary: {
          DEFAULT: "#C18C5D",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#E6DCCD",
          foreground: "#4A4A40",
        },
        muted: {
          DEFAULT: "#F0EBE5",
          foreground: "#78786C",
        },
        border: "#DED8CF",
        destructive: "#A85448",
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(93, 112, 82, 0.15)",
        float: "0 10px 40px -10px rgba(193, 140, 93, 0.2)",
        hover: "0 20px 40px -10px rgba(93, 112, 82, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;

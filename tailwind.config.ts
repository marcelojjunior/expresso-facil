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
        blue: {
          primary: "#040A2F",
        },
        yellow: {
          primary: "#FFCE33",
        },
        dark: {
          primary: "#101920",
        },
        gray: {
          primary: "#F0EFED",
        },
      },
      boxShadow: {
        custom: '0px 3px 8px 0px rgba(0, 0, 0, 0.12)',
        "back-to-top": "2px 4px 11.3px 0 rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

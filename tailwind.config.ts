import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        inter: ["Inter"],
      },
      boxShadow: {
        navbar: "0px 4px 15px 0px #0000001F",
      },
      colors: {
        "washcam-blue": "#152349",
        "washcam-active": "#1E3A8A",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1920px",
        },
      },
    },
  },
  plugins: [],
};

export default config;

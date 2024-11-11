import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 10s ease-out', 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
      },
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
      },
      fontFamily: {
        pacifico: ["var(--font-pacifico)", "cursive"],  
        poppins: ["var(--font-poppins)", "sans-serif"], 
      },
    },
  },
  plugins: [
   
  ],
};

export default config;

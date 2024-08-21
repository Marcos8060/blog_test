import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primary: '#D9D9D9',
      button: '#8E8E8E',
      white: '#ffffff',
      link: '#0055CC',
    }
  },
  plugins: [],
};
export default config;

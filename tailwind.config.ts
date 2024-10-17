import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primary: '#111926',
      button: '#0B1320',
      secondary: '#D9D9D9',
      white: '#ffffff',
      link: '#0055CC',
      gray: '#A4A4A4',
    }
  },
  plugins: [],
};
export default config;

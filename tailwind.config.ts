import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oleo script", "system-ui"],
        primary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

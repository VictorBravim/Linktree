import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': "#02030B",
      }
    },
  },
  plugins: [],
} satisfies Config;

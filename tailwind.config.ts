import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontSize: {
      sm: '1.2rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2.2rem',
      '2xl': '2.4rem',
      '3xl': '2.6rem',
      '4xl': '2.8rem',
      '5xl': '3.0rem',
    }
  },
  plugins: [],
} satisfies Config;

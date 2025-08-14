import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pixel: {
          primary: "#6C63FF",
          accent: "#FF6FB5",
          text: "#1F2937",
          muted: "#6B7280",
          bg: "#F9FAFB",
        },
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};
export default config;

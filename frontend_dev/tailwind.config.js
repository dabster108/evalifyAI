/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F3F0FF",
          600: "#7C3AED",
          700: "#6D28D9",
        },
        blue: {
          500: "#0EA5E9",
          600: "#0284C7",
        },
        cyan: {
          500: "#00D9FF",
          600: "#00B8D4",
        },
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(124, 58, 237, 0.4)",
        "glow-cyan": "0 0 20px rgba(0, 217, 255, 0.4)",
      },
    },
  },
  plugins: [],
};

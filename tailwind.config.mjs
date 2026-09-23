/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff9f4",
          100: "#d7f0e3",
          200: "#b0e1c8",
          300: "#7fcca8",
          400: "#4fb086",
          500: "#2f9169",
          600: "#217555",
          700: "#1b5d46",
          800: "#184a39",
          900: "#153d30",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgb(0 0 0 / 0.06), 0 1px 3px -1px rgb(0 0 0 / 0.06)",
        card: "0 4px 20px -4px rgb(0 0 0 / 0.08)",
      },
    },
  },
  plugins: [],
};

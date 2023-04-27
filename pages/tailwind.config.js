/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media ",
  theme: {
    extend: {
      colors: {
        thor: {
          100: "#faf5ee",
          200: "#b6c8c9",
          300: "#242830",
          400: "#448b9e",
          500: "#4f5b5f",
          600: "#0a0b0d",
          700: "#f4f7f8",
        },
        harry: {
          10: "#dbd9e0",
          50: "#f8f7ff",
          100: "#274c77",
          200: "#0d3b66",
          300: "#00a8e8",
          400: "#fff",
        },
        ebony: {
          50: "#f4f6fb",
          100: "#e8ecf6",
          200: "#cbd7ec",
          300: "#9db4dc",
          400: "#698cc7",
          500: "#466eb1",
          600: "#345595",
          700: "#2b4479",
          800: "#273c65",
          900: "#111827",
        },
        woodsmoke: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#3f3f46",
          700: "#3f3e47",
          800: "#27272a",
          900: "#18181b",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};

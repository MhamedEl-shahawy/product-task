/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        abel: ["var(--font-abel)", "sans-serif"],
      },
      colors: {
        primary: "#285f9d",
        secondary: "#7f7f7f",
        header: "#d9d9d9",
        footer: "#292759",
      },
    },
  },
  plugins: [],
};

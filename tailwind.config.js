/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,sass,scss,css}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "@/**.{js,ts,jsx,tsx,mdx,css,scss,sass}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

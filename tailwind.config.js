/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("@catppuccin/tailwindcss")],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
}
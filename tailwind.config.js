/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989ff",
        topHeadingPrimary: "#010f1c",
        topHeadingSecondry: "#021d35",
        pink: "#FD4B6B"
      },
      container: {
        center: true,
        padding: "15px"

      }
    },
  },
  plugins: [],
}


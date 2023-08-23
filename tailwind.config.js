/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '13px',
        md: '40px'
      },
      width: {
        width: "420px"
      }
    },
  },
  plugins: [],
}
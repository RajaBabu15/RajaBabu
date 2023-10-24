/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Pinyon Script', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}


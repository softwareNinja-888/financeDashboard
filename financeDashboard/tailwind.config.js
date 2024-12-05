/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#e3e4e6',
        lightYellow: '#f8f4b7',
      },
    },
  },
  plugins: [],
}


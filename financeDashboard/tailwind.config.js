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
        darkYellow: '#fee35b',
      },
      fontFamily:{
        oswald : ['oswald','sans-serif'],
        roboto: ['roboto', 'sans-serif'],
        space: ['space','sans-serif'],
        ant: ['ant','sans-serif'],
        inc: ['inc','sans-serif'],
        inter: ['inter','sans-serif'],
        mont: ['mont','sans-serif'],
      }
    },
  },
  plugins: [],
}


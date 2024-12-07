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
        mainColor:'#d8a17e',
      },
      fontFamily:{
        oswald : ['oswald','sans-serif'],
        roboto: ['roboto', 'sans-serif'],
        space: ['space','sans-serif'],
        ant: ['ant','sans-serif'],
        inc: ['inc','sans-serif'],
        inter: ['inter','sans-serif'],
        mont: ['mont','sans-serif'],
      },
      backgroundImage:{
        profile: "url('/headshot.jpg')"
      }
    },
  },
  plugins: [],
}


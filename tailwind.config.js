/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleLight: '#d0cbf3',
        violetDark: '#1A1832',
        violetDarkEx: '#1A2036',
        purpleDark: '#7A58F4',
      },
    },
  },
  plugins: [],
}


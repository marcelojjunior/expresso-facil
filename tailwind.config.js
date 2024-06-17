/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          'primary': '#040A2F',
        },
        yellow: {
          'primary': '#FFCF01',
        }
      }
    },
  },
  plugins: [],
}


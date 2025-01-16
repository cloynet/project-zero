/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      fontFamily: {
        gemumu: ["Gemunu Libre", "serif"],
        open: ["Open Sans", "serif"]
      },
      colors: {
        'zero-red': "#BC1A45",
        "zero-melon": "#FFD369",
        "zero-grey": "#DDDDDD",
        "zero-white": "#F7F7F7"
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
};


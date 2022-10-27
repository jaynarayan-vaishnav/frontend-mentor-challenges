/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    sm:"375px",
    md:"768px",
    lg:"976px",
    xl:"1440px",

    extend: {
      colors:{
        darkblue : 'hsl(228, 45%, 44%)',
        Darkcyan: 'hsl(158, 36%, 37%)',
        Cream: 'hsl(30, 38%, 92%)',
        Verydarkblue: 'hsl(212, 21%, 14%)',
        Darkgrayishblue:'hsl(228, 12%, 48%)',
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        fraunces : ["'fraunces'", 'serif'],
        monsterrat : ["'Monsterrat'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

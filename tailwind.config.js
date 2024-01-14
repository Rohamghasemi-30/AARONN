/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
    backgroundColor:{
      maincolor: {
        100:"#FF9142",
        200:"#1A1A1A",
        300:"#262A2C",
        400:"#E5E6EB",
        500:"#E5E6EB",
        600:"#03030480",
        700:"45474B",
      },
      
    },
    textColor:{
      100:"#F9FAFB",
      200:"#F4F4F6",
      300:"#E5E6EB",
      400:"#D3D5DA",
      500:"#9EA3AE",
      600:"#6C727F",
      700:"#4D5461",
      800:"#394150",
      900:"#212936",
      1000:"#0B0A0F",
      1100:"#ffffff",
    },
    fontFamily:{
      syne:"syne",
      Rubik:"Rubik",
    },
    borderRadius:{
      btn:"32.5px"
    },
  },
  plugins: [],
}

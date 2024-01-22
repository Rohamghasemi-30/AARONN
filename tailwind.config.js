/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: {
          maincolor: {
            100: "#FF9143",
            200: "#1A1A1A",
            300: "#262A2C",
            400: "#696969",
            500: "#E5E6EB",
            600: "#949494",
          },
        },
        textColor: {
          grays: {
            100: "#F9FAFB",
            200: "#F4F4F6",
            300: "#E5E6EB",
            400: "#D3D5DA",
            500: "#9EA3AE",
            600: "#6C727F",
            700: "#4D5461",
            800: "#394150",
            900: "#212936",
            1000: "#0B0A0F",
            1100: "#A8A8A8",
            1200: "#606060",
            1300: "#949494",
            1400: "#FF9142",
          },
        },
      },
        fontFamily: {
            syne: "syne",
            Rubik: "Rubik",
          },

        borderRadius: {
          rounded: "32.5px",
        },
    },
    plugins: [],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        prim: "Markazi Text", 
        secon: "Karla",
      },
      width: {
        btnwidth: "214px"
      },
      height: {
        btnhei: "56.27px"
      },
      backgroundColor: {
        secon: "#B17190"
      },
    },
  },
  plugins: [],
}


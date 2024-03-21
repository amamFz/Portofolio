/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: "Lato",
      },
      colors: {
        colorPrimary: "#37b24d",
        colorSecondary: "#343a40",
        colorKetiga: "#868e96",
        textBlur: "#f1f3f5",
      },
    },
  },
  plugins: [],
};

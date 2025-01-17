/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "event-bg":
          "linear-gradient(160deg, rgb(112, 167, 199) 0%, rgba(21, 122, 117, 0.9) 100%),url('https://aub.ac.bd/static/assets/images/event-slider-bg.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        screen: ["100vh", "100dvh"],
      },
      width: {
        screen: ["100vw", "100dvw"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        // "gradient-white": "linear-gradient(90deg, #F2F7FD 0%, #E0E4FD 100%",
        "gradient-custom": "linear-gradient(90deg, #111 0%, #555 100%",
      }),
    },
  },
  plugins: [],
};

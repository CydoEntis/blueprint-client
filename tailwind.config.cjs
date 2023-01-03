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
      colors: {
        "indigo-500": "#794BF4",
        "white-500": "#F2F7FD",
        // "white-600": "#E0E4FD",
        "white-600": "#E7EAF9",
        "black-400": "#414141",
        "grey-550": "#909090",
        "blue-450": "#63A9DC",
        "indigo-450": "#7A4CF5",
        "yellow-450": "#E7B200",
        "red-450": "#DC6465",
        "green-450": "#21CB61",
        "orange-450": "#DA9B65",
        "gray-50": "#F4F6F8",
        "gray-60": "#8B8B8B",
      },
    },
  },
  plugins: [],
};

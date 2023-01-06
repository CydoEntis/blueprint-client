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
        "cyan-50": "#4098FE",
        "green-50": "#55BC39",
        "yellow-50": "#E7B200",
        "orange-50": "#FF9805",
        "purple-50": "#B684F4",
        "pink-50": "#FD66BF",
        "red-50": "#FF8485",

        "accent-10": "#DCEFF5",
        "accent-30": "#7ED5E9",
        "accent-50": "#00B0D6",
        "grey-30": "#838796",
        "grey-40": "#6B6F7C",
        "grey-50": "#4E4F4F",

        "off-white": "#F5F7FA",

        "blue-10": "#6BB4D1",
        "blue-50": "#2D728D",
        "blue-70": "#176284",
        "white-60": "#CEDEFC",
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
        "orange-450": "#FE9A01",
        "gray-40": "#F0F5F5",
        "gray-50": "#F4F6F8",
        "gray-55": "#E6EDED",
        "gray-60": "#8B8B8B",
        "gray-70": "#2B2C32",
      },
    },
  },
  plugins: [],
};

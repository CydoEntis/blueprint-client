/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "accent-10": "#DCEFF5",
        "accent-30": "#7ED5E9",
        "accent-40": "#00B0D6",
        "grey-10": "#F8F8F8",
        "grey-20": "#838796",
        "grey-30": "#6B6F7C",
        "grey-40": "#4E4F4F",
        "off-white": "#F5F7FA",
        "off-white-20": "#E9EAEA",
        "blue-40": "#4098FE",
        "green-40": "#55BC39",
        "yellow-40": "#E7B200",
        "orange-40": "#FF9805",
        "purple-40": "#B684F4",
        "pink-40": "#FD66BF",
        "red-40": "#FF8485",
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|border|)-(blue|green|yellow|orange|purple|pink|red|grey|accent|off-white)-(10|20|30|40)/,
    },
  ],
  plugins: [],
};

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

        "blue-10": "#DCEFF5",
        "blue-30": "#7ED5E9",
        "blue-40": "#00B0D6",

        "green-10": "#E0F5DC",
        "green-30": "#73D501",
        "green-40": "#55BC39",
        "bright-green-50": "#b2ff80",

        "yellow-10": "#F5F1DC",
        "yellow-30": "#E7B200",
        "yellow-40": "#D48902",

        "orange-10": "#FFEACA",
        "orange-30": "#FF9805",
        "orange-40": "#FF6100",

        "purple-10": "#EADCF5",
        "purple-30": "#B684F4",
        "purple-40": "#9E0BD6",

        "pink-10": "#F5DCF1",
        "pink-30": "#FD66BF",
        "pink-40": "#D60B9E",

        "red-10": "#F5E2DC",
        "red-30": "#FF8485",
        "red-40": "#D33503",
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

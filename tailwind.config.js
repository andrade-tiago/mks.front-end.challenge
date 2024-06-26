/** @type {import('tailwindcss').Config} */

import COLORS from "./src/styles/colors";
import FONT_FAMILIES from "./src/styles/fonts";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: FONT_FAMILIES,
    },
  },
  plugins: [],
}

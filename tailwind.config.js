/** @type {import('tailwindcss').Config} */

import COLORS from "./src/styles/colors";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
}

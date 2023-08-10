/** @type {import('tailwindcss').Config} */
export default {
  textColor: {
    default: "#00A919",
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Rubik", "sans"],
      },
      backgroundColor: {
        default: "#00A919",
      },
    },
  },
  plugins: [],
};

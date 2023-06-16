/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"],
      },
      colors: {
        conduit: {
          green: "#5CB85C"
        }
      },
      spacing: {
        navItem: "0.425rem"
      }
    },
  },
  plugins: [],
};

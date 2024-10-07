/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#a40000",
          0: "#e4b3b3",
          10: "#db9999",
          20: "#c86666",
          30: "#b63333",
          40: "#ad1a1a",
          50: "#a40000",
          60: "#940000",
          70: "#730000",
          80: "#620000",
          90: "#420000",
        },
        dark: "#210000",
      },
    },
  },
  plugins: [],
};

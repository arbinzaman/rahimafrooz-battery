import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#ffffff",
        primary: "#0ea5e9",
        secondary: "#000000",
      },
    },
  },
  plugins: [daisyui],
};

import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#ffffff",
        primary: "#0d72b9",
        secondary: "#0962ae",
        button:"#0d72b8",
        border_primary:"#75aed6",
        background:"#deebf6",
        tableBackground1:"#1b5ba9",
        tableBackground2:"#2471b7",
        cookieList:"#d7dde3",
        button2: "#94e7f3",
        background2:"#d7dde3",
      },
      fontSize:{
        xlarge:"46.47px",
        large:"33.33px",
        semi_large:"30px",
        medium:"20px",
        regular:"17px",
        small:"13px",
        xsmall:"12px",
        xxsmall:"10px",
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'cross-pattern': "url('src/assets/images/Texture_more_visible.png')",
        'circuit-texture': "url('src/assets/images/Circuit-texture.png')",
      }
    },
  },
  plugins: [daisyui],
};

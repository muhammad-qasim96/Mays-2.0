/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: { 2: 2 },
      colors: { mainColor: "#EC5727", darkBg: "#131313" },
    },
    fontFamily: { pop: ["Poppins", "sans-serif"] },
    backgroundImage: {
      hero: "url(https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1440&q=60)",
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};

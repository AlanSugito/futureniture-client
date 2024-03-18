/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-black": "#222222",
        "color-yellow": "#FFC700",
        "glass-active": "rgba(255, 255, 255, 46%)",
      },
      fontSize: {
        title: "2rem",
        subtitle: "1.2rem",
        body: "1rem",
        "title-mobile": "1.25rem",
        "subtitle-mobile": "1rem",
        "body-mobile": "0.75rem",
      },
      fontWeight: {
        title: 600,
        subtitle: 500,
        normal: 400,
      },
      fontFamily: {
        heading: "Montserrat, sans-serif",
        body: "Quicksand, sans-serif",
      },
      boxShadow: {
        default: "0 10px 5px 20px rgba(201, 197, 196, 72%)",
      },
    },
  },
  plugins: [],
};

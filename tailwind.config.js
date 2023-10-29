/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/images/home-bg2.jpg')",
        "store-bg": "url('/images/home-bg.jpg')",
      },
    },
  },
  plugins: [],
};

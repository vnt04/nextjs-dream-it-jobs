/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#33AFA9",
      },
      screens: {
        screen4K: "2496px",
        xl: "1440px",
        "2xl": "1920px",
      },
    },
  },
  plugins: [],
};

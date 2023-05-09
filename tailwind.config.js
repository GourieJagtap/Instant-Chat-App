/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#2e1065',
      'white':"#ffffff",
      'lightblue':"#ddd6fe",
      'stone':"#fafafa",
      'messagebox':"#ede9fe",
      "gray":"#1e293b"
    },
  },
}


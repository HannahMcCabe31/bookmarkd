/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
    "./src/**/.{js,ts,jsx,tsx}",'./pages/**/*.{html,js}',
    './src/components/**/*.{html,jsx}'
  ],
    theme: {
      colors: {
          "navbar": "#302D40",
          "background-blue": "#14191D",
          "element-blue": "#16344E",
          "cool-gray": "#A7ADBB",
          "shadow-gray": "#596278",
          "button-beige": "#E1DDD1",
          "heart-red": "#FF584E",
          "star-blue": "#68B9FF",
          "white": "#FFFFFF",
        },
      extend: {
        },
    },
    plugins: [],
  };
  
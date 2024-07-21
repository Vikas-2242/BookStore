// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('daisyui')],
// }; 
// module.exports = {
//   content: [
//     './src/**/*.{html,js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require("daisyui")],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

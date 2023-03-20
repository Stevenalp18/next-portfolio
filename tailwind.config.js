/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      shantell: ['Shantell sans'],
      alegreya: ['Alegreya Sans'],
      sono: ['Sono']
    },
    backgroundImage: {
      'starry-sky': "",
    }
  },
},
  plugins: [],
}

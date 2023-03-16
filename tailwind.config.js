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
      'lake': "url('https://raw.githubusercontent.com/Stevenalp18/web-dev-images/main/Next-portfolio/lake-night.avif')",
      'starry-sky': "url('https://raw.githubusercontent.com/Stevenalp18/web-dev-images/main/Next-portfolio/starry-night.avif')",
      'dark-night': "url('https://github.com/Stevenalp18/web-dev-images/blob/main/dark-night.jpeg?raw=true')"
    }
  },
},
  plugins: [],
}
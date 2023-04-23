/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react',
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Arial'],
    },
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin'),
    //require('@tailwindcss/forms')    
  ],
}


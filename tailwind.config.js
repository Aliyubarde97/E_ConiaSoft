/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'bg-color': '#004181',
        'hero-color':'#FFFFFF',
        'section-color':'#D7E7F8',
        'features-color':'#F6F6F6',
        'text-colorblue':'#004181',
        'text-colorwhite':'#FFFFFF',
        'text-colorblack':'#071625',
        'btn-primary': '#004181',

      },
      container:{
        center:true,
        screens:{}  
    },
    },
  },
  // eslint-disable-next-line no-undef
  plugins:[],
}


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
        'bg-color': '#238DC1',
        'hero-color':'#FFFFFF',
        'section-color':'#D7E7F8',
        'features-color':'#F6F6F6',
        'text-colorblue':'#004181',
        'text-colorwhite':'#FFFFFF',
        'text-colorblack':'#000102',
        'btn-primary': '#238DC1',

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

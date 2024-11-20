/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        'primary': '#ffffff',
        'primary-dark': '#000000',
        'primary-red': '#E50914',
        'secondary-red-100': '#EB3942',
        'secondary-red-200': '#C11119',
        'secondary-red-300': '#F50723',
        'secondary-blue-100': '#0071EB',
        'secondary-blue-200': '#448EF4',
        'secondary-blue-300': '#54B9C5',


      },
    extend: {},

  },

  plugins: [],

}


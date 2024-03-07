/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      bg_pagina:'#222020',
      azul_escuro:'#485fc4',
      azul_claro:'#7cb9f2',
      marrom:'#a97959',
      branco:'#e9e9e9',
      roxo:'#d853c7',
      cinza_claro:'#888',
      cinza : '#292828',
      cinza_escuro:'#121212',
      amarelo : '#e4ca05',
      verde : '#0a0',
      url_clicado : '#6c3b9f'
    },
    fontFamily: {
      titulo : ['Passion One', 'cursive'],
      subtitulo: ['Bebas Neue', 'cursive'],
      tags : ['Open Sans', 'sans-serif']
    },
    fontSize: {
      '14':'14px',
      '16':'16px',
      '18':'18px',
      '20':'20px',
      '22':'22px',
      '25':'25px',
      '28':'28px',
      '30':'30px',
      '35':'35px',
      '40':'40px',
      '45':'45px',
      '50':'50px',
      '60':'60px',
      '70':'70px',
      '80':'80px',
      '90':'90px',
      '100':'100px'
    },
    spacing:{
      '0':'0px',
      '1':'1px',
      '2':'2px',
      '5':'5px',
      '8':'8px',
      '10':'10px',
      '15':'15px',
      '20':'20px',
      '25':'25px',
      '30':'30px',
      '35':'35px',
      '40':'40px',
      '45':'45px',
      '50':'50px',
      '60':'60px',
      '70':'70px',
      '80':'80px',
      '90':'90px',
      '100':'100px',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1700px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}


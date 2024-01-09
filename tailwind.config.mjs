/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#b9b9b9', // Gris Claro
        secondary: '#FFEE58', // Naranja Claro
        accent: '#FF6E40', // Color de acento para elementos destacados
        deactivated: '#6D4C41',
        dark: '#494949', // Gris
        darken: '#0d0d0df5' // Gris Oscuro
      },
      fontFamily: {
        primary: ['"Exo 2"', 'sans-serif'],
        secondary: ['Oswald', 'sans-serif']
      },
      fontSize: {
        xxs: '.5rem',
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '10xl': '10rem'
      },
      fontWeight: {
        thin: 100,
        medium: 500,
        bold: 800
      },
      textShadow: {
        outline:
          '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2200px'
      }
    }
  },
  plugins: []
}

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
        dark: '#494949', // Gris
        darken: '#0d0d0df5' // Gris Oscuro
      },
      fontFamily: {
        primary: ['"Exo 2"', 'sans-serif'],
        secondary: ['Ubuntu', 'sans-serif']
      },
      fontSize: {
        xxs: '.5rem',
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
      },
      fontWeight: {
        thin: 100,
        medium: 500,
        bold: 800
      }
    }
  },
  plugins: []
}

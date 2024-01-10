/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

import { brightOrange, adobeOrange } from './colors/color-themes'

const defaultCOlors = {
  primary: '#b9b9b9', // Gris Claro
  secondary: '#FFEE58', // Naranja Claro
  'secondary-neon': '#FFEE581F', // Naranja Claro
  accent: '#FF6E40', // Color de acento para elementos destacados
  'accent-dark': '#E64A19',
  'accent-neon': '#FF6E401F',
  deactivated: '#6D4C41',
  dark: '#494949', // Gris
  darken: '#0d0d0df5' // Gris Oscuro
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...adobeOrange,
        // 'primary-lighter': '#F86928',
        // 'primary-light': '#FFBD9F',
        // primary: '#FF7A3D',
        // 'primary-dark': '#BB3D04',
        // 'primary-darken': '#7D2700',
        'primary-accent': '#e25503',
        'secondary-lighter': brightOrange['secondary-lighter'],
        'secondary-light': brightOrange['secondary-light'],
        secondary: brightOrange['secondary'],
        'secondary-dark': brightOrange['secondary-dark'],
        'secondary-darken': brightOrange['secondary-darken']

        // 'complement-lighter': '#2759A4',
        // 'complement-light': '#A5C8FC',
        // complement: '#3A6FBD',
        // 'complement-dark': '#0D3A7B',
        // 'complement-darken': '#062553',

        // light: '#b9b9b9',
        // lighter: '#e9e9e9',
        // dark: '#4a4a4a',
        // darker: '#1a1a1a',
        // darken: '#0d0d0d'
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
      // boxShadow: {
      //   neon:
      // }
    }
  },
  plugins: []
}

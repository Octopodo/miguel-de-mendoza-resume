/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

import {
  brightOrange,
  adobeOrange,
  mixedOrange,
  greenJoker
} from './colors/color-themes'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...greenJoker,
        ...mixedOrange
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

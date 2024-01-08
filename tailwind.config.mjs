/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.slate[50], // Color principal de la marca
        secondary: colors.green[500], // Color secundario de la marca
        accent: colors.purple[500], // Color de acento para elementos destacados
        background: colors.gray[100], // Color de fondo principal
        surface: colors.white, // Color de fondo para elementos de la interfaz de usuario como tarjetas, modales, etc.
        error: colors.red[600], // Color para mensajes de error
        warning: colors.yellow[500], // Color para mensajes de advertencia
        success: colors.green[500], // Color para mensajes de éxito
        info: colors.blue[300], // Color para mensajes de información
        onPrimary: colors.white, // Color de texto y iconos cuando el fondo es 'primary'
        onSecondary: colors.red[600], // Color de texto y iconos cuando el fondo es 'secondary'
        onBackground: colors.gray[900], // Color de texto e iconos cuando el fondo es 'background'
        onSurface: colors.gray[900] // Color de texto e iconos cuando el fondo es 'surface'
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

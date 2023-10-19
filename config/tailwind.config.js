const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode : 'jit',
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors:{
        primary: '#e8f3ff',
        secondary: '#b3d4ff',
        tertiary: '#112cff',
        buttons: '#5689ff',
        buttonsHover: '#10269f',
        buttonsTitle: '#ffffff',
        links: '#2f5cff',
        letters: '#0a145c',
        titles: '#000000',
      },
    },
  },
  plugins: []
}

const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        dark: 'hsl(209, 23%, 22%)',
        darkerBlue: 'hsl(200, 15%, 8%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)'
      },
      gray: {
        dark: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      white: colors.white,
      transparent: 'transparent'
    },

    fontFamily: {
      'body': ['Nunito Sans']
    },
    fontSize: {
      extend: {
        'body1': '14px',
        'body2': '16px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

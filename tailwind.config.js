module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f2fbfc',
          500: '#04B2D9',
          600: '#039ec0',
          700: '#027690',
          800: '#013b48',
          900: '#001318'
        },
        neutral: {
          100: '#',
          500: '#',
          600: '#',
          700: '#',
          800: '#',
          900: '#'
        },
      },
      fontFamily: {
        body: ['Public Sans','Playfair Display'],
        title: ['Playfair Display']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'system-ui'],
    },
    extend: {
      screens: {
        'xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

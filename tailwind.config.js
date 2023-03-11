module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Inter Tight', 'system-ui'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '3.815rem',
      'huge': '7.451rem',
      'h1': '1.953rem',
      'h2': '1.563rem', 
      'h3': '1.25rem',
      'h4': '1rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': {
        light: '#00dce6',
        DEFAULT: '#1af5ff',
        dark: '#00dce6',
      },
      'neutral': {
        50: '#f2f2f3',
        100: '#d8d8da',
        200: '#bdbfc1',
        300: '#a3a5a8',
        400: '#898b90',
        500: '#6f7276',
        600: '#57585c',
        700: '#3e3f42',
        800: '#252627',
        900: '#0c0d0d',
      },
    },
    extend: {
      screens: {
        // 'xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

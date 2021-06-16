const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        antonio: ['Antonio'],
        spartan: ['Spartan'],
      },
      fontSize: {
        h1: [
          '80px',
          {
            lineHeight: '103px',
          },
        ],
        h2: [
          '40px',
          {
            letterSpacing: '-1.5px',
            lineHeight: '52px',
          },
        ],
        h3: [
          '12px',
          {
            letterSpacing: '2.6px',
            lineHeight: '25px',
          },
        ],
        h4: [
          '11px',
          {
            letterSpacing: '1px',
            lineHeight: '25px',
          },
        ],
        body: [
          '14px',
          {
            lineHeight: '25px',
          },
        ],
      },
      colors: {
        theme: {
          white: '#ffffff',
          'dark-blue': '#070724',
          'dark-gray': '#38384f',
          gray: '#838391',
          grayer: '#d8d8d8',
          turquoise: '#419ebb',
          orange: '#eda249',
          purple: '#6d2ed5',
          'darker-orange': '#d14c32',
          red: '#d83a34',
          'dark-orange': '#cd5120',
          teal: '#1ec1a2',
          blue: '#2d68f0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

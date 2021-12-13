module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-10',
       },
      fontSize: {
        '10xl': '300px' 
      },
      animation: {
        'apear': 'apear 3s ease-in-out',
      },
      keyframes: {
        apear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
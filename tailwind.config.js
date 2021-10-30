module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#fff4ec',
      'text1': '#005f73',
      'text2': '#e3342f',
     }),

    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#f2b880',
      'secondary': '#00a6fb',
      'danger': '#e3342f',
    },

    extend: {
      fontFamily: {
        'Abril': ['Abril Fatface', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

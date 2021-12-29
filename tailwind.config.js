module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily:{
      'primary': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors:{
        'secondary': '#C7E4E5',
        'tertiary': '#293241',
        'line':'#3D5A80',
        'highlight': '#5FADDA',
      },
    },
  },
  plugins: [],
}

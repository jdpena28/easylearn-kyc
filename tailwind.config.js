module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'primary': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors:{
        'secondary': '#C7E4E5',
        'tertiary': '#293241',
        'highlight': '#5FADDA',
      },
    },
  },
  plugins: [],
}

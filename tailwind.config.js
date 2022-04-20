module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#faf9f5',
        brown: {
          400: '#594a4e',
          600: '#33272a',
        },
        green: {
          200: '#e8e8e4',
          600: '#4D645F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Raleway', 'system-ui', 'san-serif'],
      },
    },
  },
  plugins: [],
}

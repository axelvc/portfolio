module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#faf9f5',
          100: '#e8e8e4',
        },
        brown: {
          400: '#594a4e',
          600: '#33272a',
          800: '#1D1618',
          900: '#130f10',
        },
        green: {
          300: '#d0d0c8',
          600: '#4d645f',
        },
        rose: {
          200: '#f6c0b8',
          300: '#f09688',
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

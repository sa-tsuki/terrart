module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },
    fontSize: {
      xs: '0.8125rem',
      sm: '0.875rem',
      base: '1rem',
      xl: '2rem',
      '5xl': '3.75rem',
    },
    color: {},
    background: {},
    extend: {
      spacing: {
        25: '6.25rem',
        90: '22.5rem',
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './articles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },
    fontSize: {
      xxs: '0.5rem',
      xs: '0.8125rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1.375rem',
      xl: '2rem',
      '5xl': '3.75rem',
    },
    color: {},
    background: {},
    extend: {
      spacing: {
        21: '5.25rem',
        25: '6.25rem',
        64: '16rem',
        90: '22.5rem',
      },
    },
  },
  plugins: [],
  mode: 'jit',
}

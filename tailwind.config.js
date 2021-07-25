module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    colors: {
      primary: 'var(--color-primary)',
    },
    extend: {
      fontFamily: {
        'sans': ['Apercu']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        background: {
          primary: 'var(--color-background-primary)',
        },
        border: {
          primary: 'var(--color-border-primary)',
        }
      },
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

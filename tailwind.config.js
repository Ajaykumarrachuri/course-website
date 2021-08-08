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
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    fontFamily: {
      'sans': ['Apercu']
    },
    extend: {
      colors: {
        background: {
          primary: 'var(--color-background-primary)',
        },
        border: {
          primary: 'var(--color-border-primary)',
        },
        text: {
          hover: 'var(--color-text-hover)',
        }
      },
      animation: {
        rollin: 'rollin 0.5s ease',
        rollout: 'rollout 0.5s ease'
      },
      keyframes: {
        rollin: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100, transform: 'rotate(360deg)' }
        },
        rollout: {
          '0%': { opacity: 100, transform: 'rotate(-360deg)' },
          '100%': { opacity: 0 }
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

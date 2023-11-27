/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        black: {
          none: '#fff',
          50: '#f6f6f6',
          100: '#f2f2f2', //hover light
          200: '#e7e7e7',
          300: '#c4c4c4',
          400: '#a6a6a6',
          500: '#7c7c7c',
          600: '#686868',
          700: '#494949',
          800: '#272727', //hover dark
          900: '#0F0F0F',
          full: '#000',
        },
        dark: '#0F0F0F',
        text: '#1B1464',
        textContrast: '#f3f0e3',
        clrPrimary: {
          50: '#fef8e3',
          100: '#fcedb7',
          200: '#fbe18a',
          300: '#fad65d',
          400: '#facc3f',
          500: '#f9c331',
          600: '#f8b62b',
          700: '#f7a427',
          800: '#f69424',
          900: '#f4781f',
        },
        clrSecondary: {
          50: '#e7e7f2',
          100: '#c2c4e0',
          200: '#9a9ecb',
          300: '#7478b7',
          400: '#585ca8',
          500: '#3d409a',
          600: '#383990',
          700: '#2f2f85',
          800: '#282679',
          900: '#1b1464',
        },
        warning: '#edb95e',
        error: '#e23636',
        success: '#82dd55',
        hover: { dark: '#272727', light: '#f2f2f2' },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

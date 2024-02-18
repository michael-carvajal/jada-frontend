/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'jada-purple': {
          400: '#F4E6FD',
          500: '#E4C1F9',
          600: '#CE8EF4',
          700: '#B75BEF',
          800: '#A128EA',
          900: '#8313C6',
          950: '#7211AD', 
        },
        'jada-pink': {
          300: '#FFEBF4',
          400: '#FFC2DE',
          500: '#FF99C8',
          600: '#FF61AA',
          700: '#FF298B',
          800: '#F0006E',
          900: '#B80055',
          950: '#9C0048', 
        },
        'jada-yellow': {
          400: '#FEFBE4',
          500: '#FCF6BD',
          600: '#FAEF87',
          700: '#F7E752',
          800: '#F5E01C',
          900: '#CFBC09',
          950: '#B4A408',
        },
        'jada-blue': {
          300: '#F5FBFE',
          400: '#CFEDFC',
          500: '#A9DEF9',
          600: '#75CAF5',
          700: '#40B6F2',
          800: '#10A0E9',
          900: '#0D7CB5',
          950: '#0B6A9B', // Custom shade beyond the default scale
        },
        'jada-green':{
          400: '#F1FCF5',
          500: '#D0F4DE',
          600: '#A3E9BE',
          700: '#75DF9E',
          800: '#48D47E',
          900: '#2BB862',
          950: '#26A256', // Custom shade beyond the default scale
        },
      },
    },
  },
  plugins: [],
}

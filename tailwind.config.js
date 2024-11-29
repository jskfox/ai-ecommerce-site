/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B5876',
          light: '#4B7793',
          dark: '#1A3B4F',
        },
        secondary: {
          DEFAULT: '#7FB5B5',
          light: '#9FCFCF',
          dark: '#5F9B9B',
        },
        accent: {
          DEFAULT: '#E5E1D4',
          light: '#F2F0E8',
          dark: '#D8D2C0',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      sm: '1.2rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2.2rem',
      '2xl': '2.4rem',
      '3xl': '2.6rem',
      '4xl': '2.8rem',
      '5xl': '3.0rem',
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('hover', '@media(hover:hover){ &:where(:any-link, :enabled, summary):hover }');
    }),
  ],
};

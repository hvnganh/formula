/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const screens = require('./config/theme/screens');
const colors = require('./config/theme/colors');
const height = require('./config/theme/height');
const width = require('./config/theme/width');

export default {
  prefix: 'tw-',
  content: ['./public/**/*.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: { ...width },
      height: { ...height },
      colors: { ...colors },
      screens: { ...screens },
    },
  },
  plugins: [],
};

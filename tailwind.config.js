/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    fontFamily: {
      sans: [
        'Exo',
        'Helvetica Neue',
        '-apple-system',
        'BlinkMacSystemFont',
        'Arial',
        'メイリオ',
        'Meiryo',
        'sans-serif',
      ],
    },
    extend: {
      blur: {
        xs: '2px',
      },
      width: {
        112: '28rem',
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
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
};

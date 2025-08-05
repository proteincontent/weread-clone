import { mergeConfig } from 'vite';
import { resolve } from 'path';

const config = {
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};

export default config;
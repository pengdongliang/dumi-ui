import { defineConfig } from 'father';
import { resolve } from 'path';

export default defineConfig({
  esm: {
    input: 'packages',
    output: 'dist',
  },
  alias: { 'dumi-ui': resolve(__dirname, './packages') },
});

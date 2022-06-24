import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import typescript from '@rollup/plugin-typescript';

const resolvePath = (str: string) => resolve(__dirname, str);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolvePath('packages/index.ts'),
      name: 'mashiirox-ui',
      fileName: (format) => `mashiirox-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
      plugins: [
        typescript({
          target: 'es2015',
          rootDir: resolvePath('packages/'),
          declaration: true,
          declarationDir: resolvePath('dist'),
          exclude: resolvePath('node_modules/**'),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});

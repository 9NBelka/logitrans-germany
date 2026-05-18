import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // camelCase class names (.my-class → s.myClass)
      localsConvention: 'camelCase',
    },
  },
});

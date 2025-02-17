import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['react-remove-properties']
    }
  })],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.REACT_APP_PROFILING': '"true"'
  }
});

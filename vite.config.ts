import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    emptyOutDir: true,
    lib: {
      entry: {
        index: 'src/main.ts',
      },
      name: 'agent-ai-sdk',
      fileName: (format, entryName) =>
        format === 'es' ? `${entryName}.js` : `${entryName}.cjs`,
    },
  },
});

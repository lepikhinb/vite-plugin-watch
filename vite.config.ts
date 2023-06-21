import { resolve } from "path"
import { defineConfig } from "vite"
import eslintPlugin from "vite-plugin-eslint"
import { builtinModules } from "module"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Vite Watcher Runner",
      fileName: `vite-plugin-watch`,
    },
    rollupOptions: {
      external: ["node:child_process", "node:path"],
    },
  },
  plugins: [eslintPlugin()],
})

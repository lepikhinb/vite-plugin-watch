import { resolve } from "path"
import { defineConfig } from "vite"
import eslintPlugin from "vite-plugin-eslint"
import { nodeResolve } from "@rollup/plugin-node-resolve"

export default defineConfig({
  build: {
    target: "",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Vite Watcher Runner",
      fileName: `vite-plugin-watch`,
    },
    rollupOptions: {},
  },
  plugins: [eslintPlugin(), nodeResolve()],
})

import { PluginOption } from "vite"
import minimatch from "minimatch"
const path = require("path")
const { exec } = require("child_process")

export const watch = (config: {
  pattern: string | string[]
  command: string
  silent?: boolean
  timeout?: number
  onInit?: boolean
}): PluginOption => {
  const options = {
    silent: false,
    timeout: 500,
    onInit: true,
    ...config,
  }

  let throttled = false

  const execute = () => {
    exec(options.command, (exception, output, error) => {
      if (!options.silent && output) console.log(output)
      if (!options.silent && error) console.error(error)
    })
  }

  return {
    name: "vite-plugin-watch",

    buildStart() {
      if (options.onInit) {
        execute()
      }
    },

    handleHotUpdate({ file, server }) {
      if (throttled) return

      throttled = true

      setTimeout(() => (throttled = false), options.timeout)

      const patterns = Array.of(options.pattern).flat()
      const shouldRun = patterns.find((pattern) =>
        minimatch(file, path.resolve(server.config.root, pattern))
      )

      if (shouldRun) {
        console.info("Running", options.command, "\n")

        execute()
      }
    },
  }
}

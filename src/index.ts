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
  output?: (output: string) => void
  errorOutput?: (error: string) => void
}): PluginOption => {
  const options = {
    silent: false,
    timeout: 500,
    onInit: true,
    output: (output: string) => {
      console.log(output)
    },
    errorOutput: (error: string) => {
      console.error(error)
    },
    ...config,
  }

  let throttled = false

  const execute = () => {
    exec(options.command, (exception, output, error) => {
      if (!options.silent && output) options.output(output)
      if (!options.silent && error) options.errorOutput(error)
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

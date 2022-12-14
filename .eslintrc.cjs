const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "node/no-missing-import": [
      "error",
      {
        allowModules: ["types", "estree", "less", "sass", "stylus"],
        tryExtensions: [".ts", ".js", ".jsx", ".tsx", ".d.ts"],
      },
    ],
  },
})

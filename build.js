#!/usr/bin/env node

const path  = require("path")
const rails = require("esbuild-rails")

require("esbuild").build({
  entryPoints: ["application.js"],
  outdir: path.join(process.cwd(), "app/assets/builds/"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  bundle: true,
  plugins: [
    rails(),
  ],
  watch: process.argv.includes("--watch"),
}).catch(() => process.exit(1))



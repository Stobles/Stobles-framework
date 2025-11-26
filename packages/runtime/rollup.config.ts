import { defineConfig } from "rollup";

import cleanupPlugin from "rollup-plugin-cleanup";
import typescript from "@rollup/plugin-typescript";
import filesize from "rollup-plugin-filesize";

export default defineConfig({
  input: "src/index.ts",
  plugins: [cleanupPlugin(), typescript()],
  output: {
    file: "dist/stobles-framework.js",
    format: "esm",
    plugins: [filesize()],
  },
});

import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "@wwa/rollup-plugin-terser";

const packageJson = require("./package.json");

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/index.tsx",
  output: [
    {
      dir: "dist",
      format: "cjs",
      name: packageJson.name,
      entryFileNames: "index.js",
    },
    {
      dir: "dist",
      entryFileNames: "index.mjs",
      format: "esm",
      name: packageJson.name,
    },
  ],
  plugins: [
    terser(),
    external(),
    resolve(),
    commonjs(),
    postcss(),
    typescript({
      tsconfig: "./tsconfig.json",
      outDir: "dist",
    }),
  ],
  external: [
    "src/**/*.stories.tsx", // Exclude story files from being bundled
  ],
};

export default config;

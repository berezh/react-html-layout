/* eslint-disable import/no-default-export */
import { obfuscator } from "rollup-obfuscator";
import typescript from "@rollup/plugin-typescript";
// import scss from "rollup-plugin-scss";

import pkg from "./package.json";
// import fs from "fs";

const plugins = [
  typescript(),
  //   scss({
  //     // output: false,
  //     output: function (styles) {
  //       fs.writeFileSync("dist/index.css", styles);
  //     },
  //   }),
];

if (process.env.BUILD === "production") {
  plugins.push(obfuscator());
}

const output = [];
if (process.env.BUILD === "dev") {
  output.push({
    file: `${testAppPath}/index.js`,
    // old: format: "es",
    format: "cjs",
    banner: "/* eslint-disable */",
  });
} else {
  output.push({ file: pkg.main, format: "cjs" });
  output.push({ file: pkg.module, format: "esm" });
}

export default [
  {
    input: "src/index.ts",
    dest: "index.js",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins,
    output,
  },
];

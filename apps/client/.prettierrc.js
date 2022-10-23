// @ts-check

/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  ...require("@producktivity/config/prettier-app"),
  importOrder: [
    "^react",
    "^next",
    "^@",
    "^\\$",
    "^[a-zA-Z]",
    "^[.][.]",
    "^[.]",
  ],
};

module.exports = config;

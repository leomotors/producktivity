// @ts-check

/** @type {Omit<import("@trivago/prettier-plugin-sort-imports").PrettierConfig, "importOrder">} */
const config = {
  ...require("./prettier-base"),
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy", "jsx"],
};

module.exports = config;

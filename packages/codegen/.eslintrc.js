// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  ...require("@producktivity/config/eslint-app"),
  ignorePatterns: ["src/generated/**/*"],
};

module.exports = config;

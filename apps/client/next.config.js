/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withTM = require("next-transpile-modules")([
  "@producktivity/codegen",
  "@producktivity/constants",
  "@producktivity/design",
]);

module.exports = withTM({
  reactStrictMode: true,
});

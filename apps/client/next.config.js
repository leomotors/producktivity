// @ts-check

const withTM = require("next-transpile-modules")(["@producktivity/design"]);

module.exports = withTM({
  reactStrictMode: true,
});

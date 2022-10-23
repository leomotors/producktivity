// @ts-check

/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  ...require("@producktivity/config/prettier-app"),
  importOrder: [
    "^@producktivity",
    "^@nestjs",
    "^@",
    "^src/",
    "^[a-zA-Z]",
    "^./prisma",
    "^./app",
    "^[.][.]",
    "^[.]",
  ],
};

module.exports = config;

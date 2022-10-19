module.exports = {
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

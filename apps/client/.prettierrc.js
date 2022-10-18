module.exports = {
  ...require("@producktivity/config/prettier-app"),
  importOrder: [
    "^\\$styles",
    "^[$]",
    "^@",
    "^next",
    "^react",
    "^[a-zA-Z]",
    "^[.][.]",
    "^[.]",
  ],
};

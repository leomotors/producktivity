module.exports = {
  ...require("@producktivity/config/prettier-web"),
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

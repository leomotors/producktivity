module.exports = {
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

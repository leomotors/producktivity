const fs = require("node:fs").promises;

async function main() {
  const env = `DATABASE_URL="${process.env.DATABASE_URL}"
JWT_SECRET="${process.env.JWT_SECRET}"
`;
  await fs.writeFile(".env", env);
}

main();

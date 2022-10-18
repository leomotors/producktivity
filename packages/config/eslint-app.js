// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "turbo",
  ],
  rules: {
    "prettier/prettier": "warn",
    eqeqeq: "warn",
    "no-constant-binary-expression": "error",
    "import/no-cycle": "warn",
    "tailwindcss/no-custom-classname": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
};

module.exports = config;

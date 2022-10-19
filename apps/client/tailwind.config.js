// @ts-check

/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css,scss}",
    "../../packages/design/*.{js,ts,jsx,tsx,css,scss}",
  ],
};

module.exports = config;

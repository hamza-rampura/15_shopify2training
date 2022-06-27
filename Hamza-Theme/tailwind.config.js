/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      height: {
        "94": "22rem"
      }
    },
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ["./**/*.liquid"],
  },
};

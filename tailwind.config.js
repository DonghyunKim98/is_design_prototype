const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}rem`) };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './screen/**/*.{js,ts,jsx,tsx}',
  ],
  important: '#__next',
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  theme: {
    extend: {
      aspectRatio: {
        '5/8': '5 / 8',
      },
      minWidth: rem0_10,
    },
  },
};

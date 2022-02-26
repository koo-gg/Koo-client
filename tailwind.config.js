module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      screens: {
        'media-hover': {'raw': '(hover: hover)'},
      }
    },
  },
  plugins: [],
};

module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      backgroundColor: {
        default: '#36393F',
        primary: '#2F3136',
        discrod: '#7289DA',
      },
      screens: {
        'media-hover': { raw: '(hover: hover)' },
      },
      gridTemplateColumns: {
        'guild-list': 'repeat(auto-fill, minmax(120px, 1fr))',
      },
    },
  },
  plugins: [],
};

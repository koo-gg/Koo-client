module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      backgroundColor: {
        default: '#36393F',
        primary: '#2F3136',
        discrod: '#7289DA',
        bgDark: '#2B2D32',
      },
      colors : {
        iconDefalt: '#B9BBBE',
        iconHover: '#ffffff',
        iconEffect : "#B6BDC9",
      },
      boxShadow: {
        'iconEffect': '0 0 20px -10px rgba(0, 0, 0, 0.45)',
        'iconHover': '0 0 20px -8px rgba(0, 0, 0, 0.62)',
      },
      dropShadow: {
        'iconHover': '0 0 20px -8px rgba(0, 0, 0, 0.62)',
      },
      screens: {
        'media-hover': { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [],
};

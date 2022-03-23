module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      backgroundColor: {
        default: '#36393F',
        primary: '#2F3136',
        discrod: '#7289DA',
        bgDark: '#2B2D32',
        Black: "#000000"
      },
      colors : {
        iconDefalt: '#B9BBBE',
        iconHover: '#ffffff',
        iconEffect : "#B6BDC9",
      },
      boxShadow: {
        'iconEffect': '0 0 20px -10px rgba(0, 0, 0, 0.55)',
        'iconHover': '0 0 20px -8px rgba(0, 0, 0, 0.7)',
      },
      dropShadow: {
        'iconHover': '0 0 20px -8px rgba(0, 0, 0, 0.62)',
      },
      screens: {
        'media-hover': { raw: '(hover: hover)' },
      },
      gridTemplateColumns: {
        'guild-list': 'repeat(auto-fill, minmax(120px, 1fr))',
        'guild-detail': 'repeat(3, minmax(320px, 1fr))'
      },
      spacing: {
        'minus-8': '-2rem',
        'minus-2/4': '-50%',
      }
    },
  },
  plugins: [],
};

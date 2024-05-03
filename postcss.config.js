module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-scrollbar': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
};

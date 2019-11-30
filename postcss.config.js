// `styled-jsx-plugin-postcss` is using https://www.npmjs.com/package/postcss-load-plugins
module.exports = ctx => ({
  plugins: {
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
      },
    },
  },
})

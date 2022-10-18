module.exports = {
  plugins: [
    require('postcss-nested'),
    {
      postcssPlugin: 'postcss-google-slide-units',
      Once (root) {
        root.replaceValues(/\d+(\.\d+)?gs/g, { fast: 'gs' }, raw => 100 * parseFloat(raw, 10) + 'px')
      }
    }
  ]
}

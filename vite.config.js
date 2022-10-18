import svgLoader from 'vite-svg-loader'

export default {
  server: {
    fs: {
      allow: ['../../theme']
    }
  },
  plugins: [svgLoader()]
}

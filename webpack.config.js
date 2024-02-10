const path = require('path')
const {
  WranglerJsCompatWebpackPlugin,
} = require('wranglerjs-compat-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './index.js',
  plugins: [new WranglerJsCompatWebpackPlugin()],
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      url: require.resolve('url/'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      timers: require.resolve('timers-browserify'),
      buffer: require.resolve('buffer/'),
    },
  },
}

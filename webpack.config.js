const path = require('path')
const {
  WranglerJsCompatWebpackPlugin,
} = require('wranglerjs-compat-webpack-plugin')

module.exports = {
  entry: './index.js',
  plugins: [new WranglerJsCompatWebpackPlugin()],
}

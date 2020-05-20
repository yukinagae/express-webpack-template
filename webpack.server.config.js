const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    server: './server.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  // webpack now targets node server
  // see: https://stackoverflow.com/questions/40959835/webpack-express-cannot-resolve-module-fs-request-dependency-is-expression
  target: 'node',
  // Without the below setting, cause the error:
  // Error: ENOENT: no such file or directory, stat '/index.html'
  node: {
    __dirname: false,
    __filename: false,
  },
  // Need this to avoid error when working with Express
  // WARNING in ./node_modules/express/lib/view.js 81:13-25
  externals: [nodeExternals()]
}

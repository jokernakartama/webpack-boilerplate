const { merge } = require('webpack-merge')
const config = require('./webpack.common')
const { buildPath } = require('./constants')

module.exports = merge(config, {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  devServer: {
    port: 5000,
    contentBase: buildPath,
    historyApiFallback: true,
    hot: true,
    quiet: false,
    stats: 'minimal',
    publicPath: '/',
    overlay: true,
    serveIndex: false,
    injectClient: true,
    inline: true,
    compress: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
})

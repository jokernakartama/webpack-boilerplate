const { merge } = require('webpack-merge')
const config = require('./webpack.common')
const { buildPath } = require('./constants')

module.exports = merge(config, {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  stats: {
    logging: true
  },
  devServer: {
    port: 5000,
    contentBase: buildPath,
    hot: true,
    quiet: false,
    stats: 'minimal',
    publicPath: '/',
    // noInfo: true,
    inline: true,
    compress: true
  }
})

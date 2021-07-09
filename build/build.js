process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const config = require('./config/webpack.prod')

webpack(config, (error, stats) => {
  if (error) throw error

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./config/webpack.dev')
const compiler = webpack(config)

WebpackDevServer.addDevServerEntrypoints(config, config.devServer)

const server = new WebpackDevServer(compiler, config.devServer)

server.listen(config.devServer.port, 'localhost')

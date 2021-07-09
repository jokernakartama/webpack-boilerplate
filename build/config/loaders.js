const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const loaderOptions = {
  css: {
    importLoaders: 1,
    modules: true
  },
  postcss: {
    postcssOptions: {
      plugins: [
        require('postcss-import')(),
        require('autoprefixer')()
      ]
    }
  }
}

module.exports = function (list) {
  const isProduction = process.env.NODE_ENV === 'production'
  const loaders = isProduction ? [] : [ 'style-loader' ]

  list.forEach((name) => {
    loaders.push({
      loader: name + '-loader',
      options: Object.assign({}, loaderOptions[name], { sourceMap: !isProduction })
    })
  })

  if (isProduction) {
    return [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: false
        }
      }
    ].concat(loaders)
  } else {
    return loaders
  }
}

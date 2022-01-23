const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?|css)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}

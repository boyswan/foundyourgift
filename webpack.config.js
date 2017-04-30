const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {
  context: __dirname,
  entry: { app: ['babel-polyfill', './src/app.js'] },
  output: { path: path.resolve(__dirname, './public'), filename: '[name].js', publicPath: '.' },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.css', '.svg']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.svg$/, loader: 'babel!react-svg' },
      { test: /\.(ttf|eot|jpg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.ejs') })]
}

switch (NODE_ENV) {
  case 'production':
    config.plugins = config.plugins.concat([
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } })
    ])
    break
  case 'development': {
    config.devtool = 'source-map'
    config.devServer = {
      colors: true,
      contentBase: './public',
      historyApiFallback: true,
      inline: true,
      progress: true
    }
  }
  default:
    break
}

module.exports = config

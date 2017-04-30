const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

const prodPlug = [
  new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: ['babel-polyfill', './app.js'],
    vendor: Object.keys(require('./package.json').dependencies)
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
    publicPath: '.'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.svg$/, loader: 'babel!react-svg' },
      { test: /\.(ttf|eot|jpg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity
    })
  ].concat(env === 'production' ? prodPlug : [])
}

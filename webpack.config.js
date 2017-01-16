const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  entry: {
    app: ['babel-polyfill', './src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: path.resolve(__dirname, 'public')
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.css', '.svg']
  },
  module: {
    loaders: [
      { test: /\.(js)$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.(css)$/, loader: 'style-loader!css-loader' },
      { test: /\.svg$/, loader: 'babel!react-svg' },
      {
        test: /\.(ttf|eot|jpg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
    ]
  },
  plugins: [],
  devtool: 'source-map'
};

switch(NODE_ENV) {
  case 'production':
    config.plugins = config.plugins.concat([
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') }}),
    ]);
    break;
  case 'development':
  default:
    break;
}

module.exports = config;

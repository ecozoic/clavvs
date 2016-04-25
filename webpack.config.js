var path = require('path');
var webpack = require('webpack');
var CopyPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('src/client/js'),
  entry: ['./index'],
  output: {
    path: path.resolve('public/js'),
    filename: 'app.js'
  },

  devtool: 'source-map',

  plugins: [
    new CopyPlugin([
      { from: path.resolve('src/client/img'), to: path.resolve('public/img') },
      { from: path.resolve('src/client/*.html'), to: path.resolve('public') },
      { from: path.resolve('src/client/*.ico'), to: path.resolve('public') }
    ]),
    new ExtractTextPlugin('../css/app.css'),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss?sourceMap!sass?sourceMap')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /node_modules/,
        loaders: ['file?name=../img/[name].[ext]']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  postcss: function() {
    return [
      require('postcss-cssnext')
    ];
  }
};

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('src/client'),
  entry: ['./index'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.js',
    publicPath: '/'
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin('./css/app.css'),
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
        loader: ExtractTextPlugin.extract('css!postcss!sass')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /node_modules/,
        loaders: ['file?name=./img/[name].[ext]']
      },
      {
        test: /\.(txt|ico)$/,
        exclude: /node_modules/,
        loaders: ['file?name=[name].[ext]']
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

require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

// TODO: optimize/splitchunks
// TODO: env plugins
// TODO: dotenv plugin
// TODO: stylelint loader
// dev - HMR, prod - bundle analyzer
// TODO: pushstate-server compress
// TODO: file/image loaders
// TODO: file hashing
// TODO: browserlist, optimize babel-preset-env

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: './src/index',

  output: {
    filename: isProduction ? 'bundle.min.js' : 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  modules: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  devtool: isProduction ? 'source-map' : 'eval',

  bail: isProduction,

  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT || 8080,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      template: 'src/index.html',
    }),
  ],
};

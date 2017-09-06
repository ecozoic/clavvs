const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractApp = new ExtractTextPlugin({
  filename: 'assets/[name].[contenthash:8].css',
});

const extractAntd = new ExtractTextPlugin({
  filename: 'assets/antd.[contenthash:8].css',
});

module.exports = {
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    app: './src/main',
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/[name].[chunkhash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        loader: extractApp.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                camelCase: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                minimize: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
        exclude: /node_modules/,
      },
      {
        test: /\.s?(a|c)ss$/,
        loader: extractAntd.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
        }),
        include: path.resolve(__dirname, '../node_modules/antd'),
      },
    ],
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    extractAntd,
    extractApp,
  ],
};

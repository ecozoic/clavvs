require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production';

// TODO: browserlist, optimize babel-preset-env, polyfill

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
];

const prodPlugins = [
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: '../reports/bundle.html',
    defaultSizes: 'parsed',
    openAnalyzer: false,
    generateStatsFile: false,
    logLevel: 'info',
  }),
  new webpack.HashedModuleIdsPlugin(),
];

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    favicon: 'src/favicon.ico',
  }),
  new Dotenv({
    safe: true,
    systemvars: true,
  }),
];

const plugins = commonPlugins.concat(isProduction ? prodPlugins : devPlugins);

module.exports = {
  mode: isProduction ? 'production' : 'development',

  entry: './src/index',

  output: {
    filename: isProduction ? 'app.[chunkhash:8].js' : 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'eslint-loader',
          'stylelint-custom-processor-loader',
        ],
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
      {
        test: /\.(png|jpg)/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProduction ? '[name].[hash:8].[ext]' : '[name].[ext]',
              outputPath: 'images/',
            },
          },
          isProduction ? 'image-webpack-loader' : undefined,
        ].filter(l => !!l),
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devtool: isProduction ? 'source-map' : 'eval',

  bail: isProduction,

  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT || 8080,
  },

  plugins,
};

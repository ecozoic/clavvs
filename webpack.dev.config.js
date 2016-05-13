var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('src/client'),
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.js',
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'postcss', 'sass']
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

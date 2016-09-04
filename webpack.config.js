var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin'),
    data = require('./data.js'),
    path = require('path');

module.exports = {
  entry: './src/router',
  output: {
    path: './build',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin('main', data.routes, data)
  ]
};
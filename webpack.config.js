var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin'),
    data = require('./data.js'),
    path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './main.js',
    './src/router'
  ],
  output: { 
    path: __dirname + '/build',
    publicPath: "/assets/",
    filename: 'bundle.js' 
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
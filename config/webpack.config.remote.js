/*eslint-disable  func-names, no-param-reassign prefer-arrow-callback, object-shorthand, no-console, prefer-template, vars-on-top */
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractText = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const paths = require('./paths');
const webpackConfig = require('./webpack.config.base');

module.exports = merge.smart(webpackConfig, {
  entry: {
    'scripts/app': paths.appIndexJs,
  },
  output: {
    chunkFilename: 'scripts/[name].js',
    filename: '[name].js',
    path: paths.destination,
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new CleanPlugin(['dist/scripts/app.js', 'dist/scripts/app.js.map'], { root: paths.root }),
    new ExtractText('styles/app.css'),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(paths.destinationDLL + '/app_libs-manifest.json')
    })
  ],
});

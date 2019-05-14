/*eslint-disable  func-names, no-param-reassign prefer-arrow-callback, object-shorthand, no-console, prefer-template, vars-on-top */
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractText = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const paths = require('./paths');


module.exports = {
  entry: {
    // create two library bundles, one with jQuery and
    // another with Angular and related libraries
    'app_libs': ['antd', 'react', 'react-dom', 'react-redux', 'redux', 'redux-form', 'redux-persist', 'redux-saga', 'react-device-detect'],
  },

  output: {
    filename: '[name].dll.js',
    path: paths.destinationDLL,

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: paths.destinationDLL + '/[name]-manifest.json',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: {
        keep_fnames: true,
      },
    }),
  ],
}

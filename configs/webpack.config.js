const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin'); 

const babelConfig = require('./babel.config');

const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.join(srcDir, 'index.tsx')
  },
  output: {
    path: distDir,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx*$/,
        exclude: [/node_modules/, /config/],
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: distDir,
    port: 8000,
  }
};

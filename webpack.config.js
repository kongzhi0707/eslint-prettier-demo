
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  devtool: 'inline-cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin(),
    new EslintWebpackPlugin({
      fix: true
    })
  ],
  devServer: {
    port: 9000
  }
};
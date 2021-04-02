const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const webpack = require('webpack')

// Instantiate the plugin.
// The `template` property defines the source
// of a template file that this plugin will use.
// We will create it later.
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, "./test/public/index.html"),
  filename: 'index.html',
  inject: true
});



module.exports = {
  mode: 'development',
  entry: {
    index: './test/index.js'
  },
  watch: true,
  output: {
    path: path.join(__dirname, 'test/dist'),
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    
  },
  plugins: [
    htmlPlugin,
  ],
  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  devServer: {
    host: '127.0.0.1',
    port: 9000,
    hot: true
  }
};
/* eslint-disable indent */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');
module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.html$/,
      use: [{
        loader: "html-loader",
        options: {
          minimize: true
        }
      }]
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    },
    {
      test: /\.(jpe?g|png|gif)$/i,
      loader: "file-loader",
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/images/'
        //the images will be emited to dist/assets/images/ folder
      }
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./views/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "./views/index.css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    })
  ]
}
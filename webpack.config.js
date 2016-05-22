const webpack = require('webpack');
var path = require('path');

//webpack htmlWebpackPlugin
var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

//webpack dev mode
var DevMode = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify("production"),
  }
});

//webpack
module.exports = {
	entry: [
		'./app/main.js'
	],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [DevMode,htmlWebpackPluginConfig]
};

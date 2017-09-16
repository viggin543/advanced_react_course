const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./lib/components/App.scss','babel-polyfill','./lib/components/Index.jsx',],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  module: {
    rules: [
      { test: /\.(jsx|js)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
           "css-loader", "sass-loader"
        ]),
        exclude: /node_modules/
      },
    ]
  },
  plugins: [new ExtractTextPlugin('style.css')]  
};

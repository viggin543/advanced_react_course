const path = require('path');
module.exports = {
  entry: ['babel-polyfill','./lib/components/Index.jsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};

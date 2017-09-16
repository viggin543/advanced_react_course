const path = require('path');
module.exports = {
  entry: ['babel-polyfill', './lib/components/Index.jsx'],
  entry: ['babel-polyfill', './lib/components/Index.jsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json','.scss']
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};

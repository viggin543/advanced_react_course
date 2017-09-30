const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {// this tells webpacl where to take different modules that will be compilet unto saparate outputs . 
    styles: './lib/components/styles/App.scss',
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'prop-types',
      'lodash.debounce',
      'lodash.pickby'
    ],
    app: './lib/renderers/dom.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['lib', 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/, use:{
          loader:'babel-loader',
          options:{
            presets:[
              'react',
              'env',
              'stage-2'
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          'css-loader', 'sass-loader'
        ]),
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};

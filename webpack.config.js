const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodEnv = process.env.NODE_ENV || 'production';

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            output: { comments: false },
          },
          sourceMap: true
      })
    ],
  },

  devtool: 'source-map',

  output: {
    filename: './build.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', {modules: false}]]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodEnv) }
//      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

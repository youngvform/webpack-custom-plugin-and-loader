const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MyPlugin = require('./my-plugin');

module.exports = {
  entry: {
    loader: './src/index.js',
    app1: './src/index1.js',
    app2: './src/index2.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.csv$/,
        use: './my-csv-loader',
      },
    ],
  },
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new MyPlugin({ showSize: true })],
};

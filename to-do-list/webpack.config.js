const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // devServer: {
  //   static: './dist',
  // },
  // entry: {
  //   index: './src/index.js',
  //   home: './src/home.js',
  //   menu: './src/menu.js',
  //   contact: './src/contact.js',
  // },
  // output: {
  //   filename: '[name].bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   clean: true,
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Costco Grand Bazaar',
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
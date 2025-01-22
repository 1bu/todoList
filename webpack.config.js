const { type } = require('os');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new htmlWebpackPlugin({
        template: './src/index.html',
    }),
  ],
  modules:{
    rules:
    [
        {
            test: /\.css$/,
            use: [
                'test: /\.css$/',
                'use:[style-loader, css-loader]'
            ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
    ],
  },
  module:'development',
};
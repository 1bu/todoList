const { type } = require('os');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Modo de desarrollo
  entry: './src/index.js', // Archivo de entrada
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Limpia la carpeta dist antes de generar nuevos archivos
  },
  
  devtool: 'inline-source-map', // Para facilitar la depuración
  
  devServer: {
    static: './dist',
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Archivo base para HTML
    }),
  ],
  
  module: {
    rules: [
      {
        test: /\.css$/, // Regla para archivos CSS
        use: ['style-loader', 'css-loader'], // Cargadores para CSS
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Regla para imágenes
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Regla para fuentes
        type: 'asset/resource',
      },
    ],
  },

};

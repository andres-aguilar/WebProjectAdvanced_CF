const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './assets/index.template.html',
  filename: 'index.html'
});

module.exports = {
    entry: './assets/scripts/entry.js',
    output: {
      publicPath: '/',
      path: path.join(__dirname, '..'),
      filename: 'dist/scripts/bundle.js'
    },
    mode: 'development',
    plugins: [htmlWebpackPlugin],
    module: {
      rules: [{
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader'
        }]
      }
    };

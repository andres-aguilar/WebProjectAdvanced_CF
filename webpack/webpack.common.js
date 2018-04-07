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
    plugins: [htmlWebpackPlugin],
    module: {
      rules: [{
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader'
        }]
      }
    };

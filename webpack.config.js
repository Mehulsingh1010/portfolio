const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',       // Injects styles into DOM
          'css-loader',         // Turns CSS into CommonJS
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',       // Injects styles into DOM
          'css-loader',         // Turns CSS into CommonJS
          'resolve-url-loader', // Resolves relative URLs in CSS
          'sass-loader',        // Compiles Sass to CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devtool: 'source-map',
};

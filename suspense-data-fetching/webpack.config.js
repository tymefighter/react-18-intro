// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

// Utils
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')]
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/public' }
      ]
    }), 
    new HtmlWebpackPlugin()
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
  }
}

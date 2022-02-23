const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: '代码分离Code Splitting'
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: { // v4起使用SplitChunksPlugin代替了CommonsChunkPlugin
      chunks: 'all'
    }
  }
}
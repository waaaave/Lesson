const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const basePath = __dirname;
console.log(path.join(basePath, "src"), '------------------');
module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  // 入口
  entry: ["./index.tsx"],
  output: {
    path: path.join(basePath, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBable: true,
          babelCore: "@babel/core"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true
    })
  ]
}
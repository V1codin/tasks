const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    watchOptions: {
      poll: true,
    },
    hot: true,
    inline: true,
    host: "localhost",
    watchContentBase: true,
    liveReload: true,
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

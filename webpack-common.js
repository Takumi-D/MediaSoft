const path = require("path");
const webpack = require("webpack");

require("dotenv").config();

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: path.join("icons", "[name].[contenthash][ext]"),
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@store": path.resolve(__dirname, "./src/store"),
      "@type": path.resolve(__dirname, "./src/type"),
      "@images": path.resolve(__dirname, "./src/images"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css", ".scss"],
  },
  plugins: [
    new webpack.DefinePlugin({
      NUMBER_OF_PAGES: JSON.stringify(process.env.NUMBER_OF_PAGES),
      HOME_PAGE: JSON.stringify(process.env.HOME_PAGE),
    }),
  ],
};

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript").default;

const isDevelopment = true;

module.exports = {
  devtool: "source-map",
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            getCustomTransformers: () => ({
              before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
            }),
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
    allowedHosts: "all",
  },
};

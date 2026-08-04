const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript").default;

const isDevelopment = true;

// Мок-данные для /api/users (см. devServer.setupMiddlewares ниже).
// Специально "грязные": дубль по id: 2, пустая (null) запись, разнобой в статусах.
function buildUsersPayload() {
  return {
    meta: { page: 1, totalPages: 1 },
    data: [
      { id: 1, profile: { full_name: "Иванов Иван" }, status: "ACTIVE", department: "Backend" },
      { id: 2, profile: { full_name: "Петрова Мария" }, status: "disabled", department: "Frontend" },
      { id: 2, profile: { full_name: "Петрова Мария" }, status: "disabled", department: "Frontend" },
      { id: 3, profile: { full_name: "Сидоров Пётр" }, status: "ACTIVE", department: "QA" },
      null,
      { id: 4, profile: { full_name: "Кузнецова Анна" }, status: "vacation", department: "Design" },
    ],
  };
}

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
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer || !devServer.app) {
        throw new Error("webpack-dev-server app is not available");
      }

      devServer.app.get("/api/users", (req, res) => {
        const delay = 300 + Math.random() * 900;
        const isServerError = Math.random() < 0.25;

        setTimeout(() => {
          if (isServerError) {
            res.status(500).json({ status: "error", message: "Internal Server Error" });
            return;
          }
          res.json(buildUsersPayload());
        }, delay);
      });

      return middlewares;
    },
  },
};

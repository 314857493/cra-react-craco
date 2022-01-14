const CracoLessPlugin = require("craco-less");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devServer: {
    host: "t.jdcloud.com",
    port: 4000,
    proxy: {
      "/api": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              "primary-color": "#4762fe",
            },
          },
        },
      },
    },
  ],
  eslint: {
    enable: true,
  },
  typescript: {
    enableTypeChecking: true,
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig, { env, paths }) => {
      const customConfig = {
        optimization: {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              extractComments: false,
            }),
          ],
        },
      };
      return process.env.NODE_ENV === "production"
        ? Object.assign(webpackConfig, customConfig)
        : webpackConfig;
    },
  },
};

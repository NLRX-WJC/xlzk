const path = require("path");
const webpack = require("webpack");
const CracoAntDesignPlugin = require("craco-antd");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  devServer: {
    compress: true,
    noInfo: true,
    overlay: true,
    open: true,
    proxy: {
      // 配置跨域
      "/api/v1/": {
        target: "http://192.168.1.70:8080",
      },
    },
  },
  webpack: {
    alias: {
      "@hooks": resolve("src/hooks"),
      "@store": resolve("src/store"),
      "@utils": resolve("src/utils"),
      "@": resolve("src"),
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {},
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#5ABFE7",
          "@layout-sider-background": "#060837",
          "@menu-dark-bg": "#060837",
          "@menu-dark-inline-submenu-bg": "#060837",
        },
      },
    },
  ],
};

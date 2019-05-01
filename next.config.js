const { parsed } = require("dotenv").config();
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  crossOrigin: "anonymous",
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(parsed));

    return config;
  },
});

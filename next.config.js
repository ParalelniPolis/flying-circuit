const { parsed } = require("dotenv").config();
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");

// const isProduction = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  crossOrigin: "anonymous",
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  // assetPrefix: isProduction ? '/flying-circuit/' : '',
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(parsed));

    return config;
  },
});

const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  crossOrigin: 'anonymous',
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "/out"
})

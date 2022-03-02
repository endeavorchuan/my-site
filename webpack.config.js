/**
 * @name: webpack.config
 * @author: chuanchuan
 * @date: 2022-03-02 10:31
 * @description：webpack.config
 * @update: 2022-03-02 10:31
 */

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

if(process.env.NODE_ENV === "production") {   // 生产环境
  module.exports = {
    plugins: [new BundleAnalyzerPlugin()]
  }
} else {    // 开发环境
  module.exports = {}
}
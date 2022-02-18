/**
 * @name: vue.config
 * @author: chuanchuan
 * @date: 2022-02-07 12:08
 * @description：vue.config
 * @update: 2022-02-07 12:08
 */

// vue-cli的配置文件
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                "target": "http://test.my-site.com",
            }
        }
    },
}
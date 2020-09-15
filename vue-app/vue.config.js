module.exports = {

    devServer: {
        /* port: 8080, //端口
        host: 'http://192.168.137.1/', //访问ip
        open: true, //配置浏览器自动访问 */
        proxy: {
            "/api": {
                target: "http://127.0.0.1:7002/",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            }
        }
    }

}
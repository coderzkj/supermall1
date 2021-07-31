/*在成立cli2中：base.config中修改配置*/
/*cli3修改配置*/
module.exports = {
    configureWebpack: {
        resolve: {
            // extensions: []  一些后缀名可以不写
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}

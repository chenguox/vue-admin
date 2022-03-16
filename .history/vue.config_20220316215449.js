const Components = require('unplugin-vue-components/webpack')

module.exports = {
  outputDir: './build', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plu
  }
}

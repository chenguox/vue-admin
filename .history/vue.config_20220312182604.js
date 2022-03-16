module.exports = {
  outputDir: './build', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  publicPath: './', // 部署应用包时的基本 URL
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}

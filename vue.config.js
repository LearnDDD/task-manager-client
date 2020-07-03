module.exports = {
  devServer: {
    port: 8081,
    disableHostCheck: true,
    proxy: {
      '/task/': {
        target: 'http://localhost:8080'
      }
    }
  }
}

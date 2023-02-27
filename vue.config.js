const { defineConfig } = require('@vue/cli-service')
module.exports = { 
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/Portifolio/' 
    : '/' 
}
module.exports =({
  baseUrl:'/Portifolio'
})
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

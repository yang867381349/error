const vuePlugin = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  server:{
    host:'192.168.0.125',
    port:2000,
    open: true, // 项目启动  是否开启浏览器页
    proxy: {
      "/api": "http://124.71.201.151:8080/",
      "/user": "http://124.71.201.151:8080/",
      "/info": "http://124.71.201.151:8080/"
    }
  },
  plugins: [
    vuePlugin(),
    vueJsx(),
    {
      name: 'virtual',
      resolveId(id) {
        if (id === '@foo') {
          return id
        }
      },
      load(id) {
        if (id === '@foo') {
          return `export default { msg: 'hi' }`
        }
      }
    }
  ],
  build: {
    minify: false
  }
}

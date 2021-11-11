/* eslint-disable */
// vue.config.js
const path = require('path');
// const { QuasarResolver } = require('unplugin-vue-components/resolvers');
// const Components = require('unplugin-vue-components/webpack');
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  outputDir: '../../dist/src/render',
  publicPath: process.env.VUE_APP_PUBLIC_PATH,

  configureWebpack: {
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, '../../assets/'),
      },
    },
    plugins: [
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // require('unplugin-element-plus/webpack').default({
      //   // options
      // }),
    ],
  },

  pluginOptions: {
    i18n: {
      locale: 'zh-CN',
      fallbackLocale: 'zh-CN',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
      supportTS: true,
    },
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },

  transpileDependencies: ['quasar'],
};

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#64a262',
            'layout-header-background': '#599055',
            'text-color': '#000',
            'text-color-secondary': '#0d0d0d',
            'font-family': `-apple-system, BlinkMacSystemFont, 'PT Sans', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
  'Segoe UI Emoji', 'Segoe UI Symbol'`,
            'font-size-base': '20px',
            'font-size-sm': '15px'
          },
          javascriptEnabled: true,
        },
      },
      sass: {
        prependData: `@import "./src/assets/styles/_variables.scss";`,
        sassOptions: {
          // sourceMap: true
        }
      }
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
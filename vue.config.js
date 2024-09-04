module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: ` 
        @import '@/assets/css/default/mixin.scss';
        
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "title";
      return args;
    });
  },
};

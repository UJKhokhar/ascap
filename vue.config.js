module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_mixins.scss";
          @import "@/styles/_variables.scss";
        `
      }
    }
  }
};

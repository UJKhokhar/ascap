module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/partials/_mixins.scss";
          @import "@/styles/partials/_variables.scss";
        `
      }
    }
  }
};

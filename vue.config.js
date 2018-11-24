module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
              @import "@/assets/scss/_variables.scss";
              @import "@/assets/scss/_styles.scss";
              @import "@/assets/scss/_mixins.scss";
            `
      }
    }
  }
};
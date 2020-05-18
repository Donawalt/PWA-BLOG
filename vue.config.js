module.exports = {
  pwa: {
    name: "World Chase Tag",
    short_name: "WCT",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      display: "fullscreen"
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
			  @import "@/scss/_variables.scss";
			  @import "@/scss/_mixins.scss";
			`
      }
    }
  }
};

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
    },
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/service-worker.js"
      // ...other Workbox options...
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

/**
 * Require Browsersync
 */
var bs = require('browser-sync').create();

/**
 * Run Browsersync with server config
 */
bs.init({
  server: "dist",
  files: ["dist/*.css"],
  plugins: [
    {
      module: "bs-html-injector",
      options: {
        files: ["dist/*.html"]
      }
    }
  ]
});


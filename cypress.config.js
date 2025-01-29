const { defineConfig } = require("cypress");
/* 
module.exports = {
  projectId: "348fn3",
  // ...rest of the Cypress project config
}
 */
module.exports = defineConfig({
  requestTimeout: 15000,
  projectId: "348fn3",
  chromeWebSecurity: false, 
  e2e: {
    baseUrl: "https://notes-serverless-app.com",
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
});

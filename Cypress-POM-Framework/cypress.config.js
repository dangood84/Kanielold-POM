const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFilesChanges: false,
  chromeWebSecurity: false,
  viewPortWidth: 1000,
  viewPortHeight: 600,
  waitForAnimation: true,
  animationDistanceThreshold: 20,
  defaultCommandTimeout: 6000,
  execTimeout: 6000,
  pageLoadTimeout: 6000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  video: true,
  failOnStatusCode: false,
  projectId: "acaaxv",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

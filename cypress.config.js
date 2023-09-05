const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    supportFile: false,
    baseUrl: 'https://the-internet.herokuapp.com/',
  },
})

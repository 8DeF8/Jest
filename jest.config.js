/** @type {import('jest').Config} */
const config = {
    collectCoverageFrom: [
      '**/*.{js,jsx}',
      '!**/node_modules/**',
      '!**/vendor/**',
      '!**jest.config.js**',
      '!**/coverage/**',
    ],

    "coverageThreshold": {
        "branches": 100,
        "functions": 100,
        "lines": 100
    }
  };
  
  module.exports = config;
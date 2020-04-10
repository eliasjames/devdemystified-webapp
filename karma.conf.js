const commonJs = require('rollup-plugin-commonjs');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.js'
    ],
    preprocessors: {
      'test/**/*.spec.js': ['rollup'],
    },
    reporters: ['progress'],
    rollupPreprocessor: {
      output: {
        format: 'iife', // Helps prevent naming collisions.
        sourcemap: 'inline', // Sensible for testing.
      },
    },
  })
}

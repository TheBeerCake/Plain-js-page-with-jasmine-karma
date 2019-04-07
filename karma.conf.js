module.exports = function (config) {
    config.set({
      frameworks: ['jasmine', 'jasmine-matchers'],
      files: [
        '*.js',
        '*.spec.js'
      ],
      plugins: [
        'karma-jasmine',
        'karma-jasmine-matchers',
        'karma-chrome-launcher',
      ],
      reporters: ['dots'],
      colors: true,
      browsers: ['ChromeHeadless'],
      singleRun: false,
      autowatch:true
    })
  };
  
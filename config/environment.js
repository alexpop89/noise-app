/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'noise-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'self' https://www.youtube.com",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://www.youtube.com/iframe_api https://s.ytimg.com",
      'font-src': "'self' http://fonts.gstatic.com",
      'connect-src': "'self' https://www.youtube.com https://www.googleapis.com",
      'img-src': "'self' https://www.youtube.com/v/*",
      'frame-src': "https://www.youtube.com http://www.youtube.com",
      'style-src': "'self' 'unsafe-eval' http://fonts.googleapis.com",
      'media-src': "'self' https://www.youtube.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

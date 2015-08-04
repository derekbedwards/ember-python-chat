/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'chatdemo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' http://*.gstatic.com http://*.googleapis.com http://use.typekit.net",
      'font-src': "'self' data: http://*.gstatic.com",
      'connect-src': "'self' ws://localhost:7000 localhost:7000",
      'img-src': "'self' http://*.gstatic.com http://*.googleapis.com http://p.typekit.net",
      'style-src': "'self' 'unsafe-inline' http://*.googleapis.com http://use.typekit.net",
      'media-src': "'self' data:"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
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

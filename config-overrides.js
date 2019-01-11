// const rewireEslint = require('react-app-rewire-eslint');
// const rewirePolyfills = require('react-app-rewire-polyfills');

module.exports = function override(config, env) {
  // config = rewireEslint(config, env);
  config = rewirePolyfills(config, env);
  return config;
};

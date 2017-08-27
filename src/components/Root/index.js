/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./component');
} else {
  module.exports = require('./component.dev');
}
/* eslint-enable global-require */

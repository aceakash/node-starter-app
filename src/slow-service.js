const Promise = require('bluebird');

function slowService() {
  return Promise.delay(200).then(() => 42);
}

module.exports = slowService;
const Promise = require('bluebird');
require('must/register');

const slowService = require('../src/slow-service');

describe('slowService', () => {
  it('does not resolve within 100ms', (done) => {
    slowService()
    .timeout(100)
    .then(() => {
      done(new Error('Should not have completed within 100ms'));
    })
    .catch(Promise.TimeoutError, () => {
      done();
    });
  });
});

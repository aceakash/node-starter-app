const expect = require('chai').expect;

const main = require('../src/main');

describe('main', () => {
  it('is version 1.0', () => {
    expect(main.version).to.equal('1.0');
  });
});

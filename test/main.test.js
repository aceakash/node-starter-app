require('must/register');

const main = require('../src/main');


describe('main', () => {
  it('is version 1.0', () => {
    main.version.must.be('1.0');
  });

  describe('funcWithDefaultArgument', () => {
    it('returns what it is called with', () => {
      main.funcWithDefaultArgument(3).must.be(3);
    });
    
    it('returns 1 if passed nothing', () => {
      main.funcWithDefaultArgument().must.be(1);
    });
  });
});

const alwaysAsync = require('./alwaysAsync');

describe('test promise resolution order', () => {
  it('testing with two strings', (done) => {
    const strOne = 'Hello';
    const strTwo = 'World';
    const cbk = (data) => {
      expect(data).toMatch('WorldHello');
      done();
    };
    alwaysAsync(strOne, strTwo, cbk);
  });
});

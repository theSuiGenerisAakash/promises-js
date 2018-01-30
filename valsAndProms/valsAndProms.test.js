const valsAndProms = require('./valsAndProms');

describe('testing value returned from a function chain', () => {
  it('testing the argument console.log was called with when we pass a Promise that resolves a string value', (done) => {
    console.log = jest.fn(console.log);
    const cbk = () => {
      expect(console.log).toHaveBeenCalledWith('DR. Aakash');
      done();
    };
    const prom = Promise.resolve('Aakash');
    valsAndProms(prom, cbk);
  });
});

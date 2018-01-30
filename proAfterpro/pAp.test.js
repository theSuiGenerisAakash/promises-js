const proAfterpro = require('./proAfterpro');

const first = () => Promise.resolve('first');
const second = (fir) => {
  console.log(fir);
  return Promise.resolve('second');
};

describe('testing promise chaining', () => {
  it('passing first and second', (done) => {
    console.log = jest.fn(console.log);
    const cbk = () => {
      expect(console.log).toHaveBeenCalledTimes(2);
      done();
    };
    proAfterpro(first, second, cbk);
  });
});

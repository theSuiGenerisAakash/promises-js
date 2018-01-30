const catchit = require('./catch');

describe('testing Promise.reject, Promise.resolve and .catch', () => {
  it('testing Promise.resolve', () => {
    console.log = jest.fn(console.log);
    catchit.promiseRes.then((data) => {
      console.log(data);
      expect(console.log).toHaveBeenCalledWith('Resolved');
    });
  });
});

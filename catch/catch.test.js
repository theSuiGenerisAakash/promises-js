const catchit = require('./catch');

describe('testing Promise.reject, Promise.resolve and .catch', () => {
  it('testing Promise.resolve', () => {
    catchit.promiseRes.then((data) => {
      expect(data).toBe('Resolvesdad');
    });
  });
  it('testing Promise.reject', () => {
    catchit.promiseRej.then(null, (data) => {
      expect(data).toBe('[Error: Rejected]');
    });
  });
});

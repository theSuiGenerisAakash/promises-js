const resolveIt = require('./resolve');

describe('testing resolve', () => {
  it('testing resolve value with normal string', () => expect(resolveIt).resolves.toBe('hello'));
  it('testing not reject', () => expect(resolveIt).not.rejects);
});

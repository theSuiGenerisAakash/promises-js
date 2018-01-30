const resolveIt = require('./resolve');

describe('testing resolve', () => {
  it('testing resolve value', () => expect(resolveIt).resolves.toBe('hello'));
});

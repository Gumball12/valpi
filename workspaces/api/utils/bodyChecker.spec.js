const assert = require('assert');
const bodyChecker = require('./bodyChecker');

describe('utils/bodyChecker', () => {
  it('check param', () => {
    // valid
    assert.equal(
      bodyChecker({ name: 'name' }, ['name']),
      true,
    );

    // invalid
    assert.equal(
      bodyChecker({ notName: 'name' }, ['name']),
      false,
    );
  });

  it('pass string name', () => {
    assert.equal(
      bodyChecker({ name: 'name' }, 'name'),
      true,
    );
  });
});

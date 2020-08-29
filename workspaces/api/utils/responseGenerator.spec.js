const assert = require('assert');
const responseGenerator = require('./responseGenerator');

describe('utils/responseGenerator', () => {
  it('check generate valid data', () => {
    const gen = responseGenerator(200, 'ok');

    assert.equal(typeof gen, 'object');
    assert.equal(gen.statusCode, 200);
    assert.equal(gen.body, 'ok');
  });
});

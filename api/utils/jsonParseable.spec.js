const assert = require('assert');
const jsonParseable = require('./jsonParseable');

describe('utils/jsonParseable', () => {
  it('parsing check / pass json data...', () => {
    const data1 = JSON.stringify({ value: 'it can be json' });
    const data2 = JSON.stringify(JSON.stringify({ value: 'json-json'} ));

    assert.equal(jsonParseable(data1), true);
    assert.equal(jsonParseable(data2), true);
  });

  it('parsing check / pass non-json data...', () => {
    const data1 = 'pure string';
    const data2 = { value: 'pure object' };
    const data3 = ['pure array'];

    assert.equal(jsonParseable(data1), false);
    assert.equal(jsonParseable(data2), false);
    assert.equal(jsonParseable(data3), false);
  });
});

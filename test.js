const assert = require('assert')
const bool = require('./index')

assert.strictEqual(bool(), 123)
assert.strictEqual(bool(false), true)
console.log('ok')

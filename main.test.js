const math = require('./main')
const assert = require('assert')


assert.strictEqual(math.sum(2, 2), 4)
assert.strictEqual(math.sum([1,2,3,4,5]), 15)
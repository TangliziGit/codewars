const _ = require('lodash');

const duplicateCount = (text) => {
  const dict = _(text.toLowerCase())
    .split('')
    .reduce((acc, x) => (acc[x] = (acc[x] || 0) + 1, acc), {})
    
  return _(dict)
    .filter((value, key) => value !== 1)
    .value().length;
}

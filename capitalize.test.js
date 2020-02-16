const capitalize = require('./capitalize.js');

test('is connected', () => {
  expect(capitalize()).toBe('yes')
})
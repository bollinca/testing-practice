const reverseString = require('./reverseString.js')

test('is connected', () => {
  expect(reverseString()).toBe('yes');
})
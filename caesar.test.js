const caesar = require('./caesar.js');

test('shifts lowercase letters', () => {
  expect(caesar('hello', 3)).toBe('khoor')
})

test('works with upper and lowercase', () => {
  expect(caesar('hElLoOO', 3)).toBe('kHoOrRR')
})

test('retains punctuation', () => {
  expect(caesar('hello, hello.', 3)).toBe('khoor, khoor.')
})
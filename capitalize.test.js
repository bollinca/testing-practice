const capitalize = require('./capitalize.js');

test('works on single lowercase words', () => {
  expect(capitalize('hello'))
    .toBe('Hello')
})

test('retains capitalization', () => {
  expect(capitalize('Hello, Johnny!'))
    .toBe('Hello, Johnny!')
})

test('does not change punctuation', () => {
  expect(capitalize('...nope'))
    .toBe('...nope');
})
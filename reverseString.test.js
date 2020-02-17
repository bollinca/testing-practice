const reverseString = require('./reverseString.js')

test('reverses lowercase string', () => {
  expect(reverseString('hello'))
    .toBe('olleh');
})

test('works with punctuation', () => {
  expect(reverseString('hello, punctuation.'))
    .toBe('.noitautcnup ,olleh')
})

test('retains capitalization', () => {
  expect(reverseString('hElLO'))
    .toBe('OLlEh')
})
const functions = require('./functions');

test('adds 1+2 to equal 3', () => {
  expect(functions.calculator.add(1, 2))
    .toBe(3);
});

test('adds -5+12 to equal 7', () => {
  expect(functions.calculator.add(-5, 12))
    .toBe(7)
});

test('adding strings throws an Error', () => {
  function addString() {
    functions.calculator.add('words', 'more words');
  }
  
  expect(addString)
    .toThrow('Cannot add strings')
});
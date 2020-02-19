const analyze = require('./analyzeArray.js');

test('returns an object', () => {
  expect(analyze([1, 5, 29, 3, 7])).toEqual({
    "average": 9,
    "min": 1,
    "max": 29,
    "length": 5,
  });
});

test('finds array length', () => {
  expect(analyze([1, 4, 3]).length).toBe(3);
})

test('finds average', () => {
  expect(analyze([4, 6, 2, 10]).average).toBeCloseTo(5.5);
})

test('finds maximum value', () => {
  expect(analyze([12, 5, 100, 3, 9]).max).toBe(100);
})

test('finds minimum value', () => {
  expect(analyze([1, -5, -2, 6, 20, 3]).min).toBe(-5)
})
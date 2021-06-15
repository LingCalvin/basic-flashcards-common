import paginationSchema from './pagination.schema';

test('empty object passes', () => {
  expect(paginationSchema.isValidSync({})).toBe(true);
});

test('positive integer take passes', () => {
  expect(paginationSchema.isValidSync({ take: 1 })).toBe(true);
});

test('non-positive take fails', () => {
  expect(paginationSchema.isValidSync({ take: 0 })).toBe(false);
});

test('non-integer take fails', () => {
  expect(paginationSchema.isValidSync({ take: 0.1 })).toBe(false);
});

test('non-negative skip passes', () => {
  expect(paginationSchema.isValidSync({ skip: 0 })).toBe(true);
});

test('negative take fails', () => {
  expect(paginationSchema.isValidSync({ skip: -1 })).toBe(false);
});

test('non-integer take fails', () => {
  expect(paginationSchema.isValidSync({ skip: 0.1 })).toBe(false);
});

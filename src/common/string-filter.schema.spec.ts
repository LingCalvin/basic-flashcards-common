import stringFilterSchema from './string-filter.schema';

test('empty object passes', () => {
  expect(stringFilterSchema.isValidSync({})).toBe(true);
});

test('valid nesting passes', () => {
  expect(
    stringFilterSchema.isValidSync({ equals: '', not: { contains: 'foo' } }),
  ).toBe(true);
});

test('invalid not fails', () => {
  expect(stringFilterSchema.isValidSync({ not: null })).toBe(false);
});

test('invalid mode fails', () => {
  expect(stringFilterSchema.isValidSync({ mode: 'invalid' })).toBe(false);
});

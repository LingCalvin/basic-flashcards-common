import loginSchema from './login.schema';

test('email and non-empty password pass', () => {
  expect(
    loginSchema.isValidSync({
      email: 'person@example.com',
      password: 'password',
    }),
  ).toBe(true);
});

test('non-email fails', () => {
  expect(
    loginSchema.isValidSync({
      email: 'person',
      password: 'password',
    }),
  ).toBe(false);
});

test('empty email fails', () => {
  expect(
    loginSchema.isValidSync({
      email: '',
      password: 'password',
    }),
  ).toBe(false);
});

test('undefined email fails', () => {
  expect(
    loginSchema.isValidSync({
      password: 'password',
    }),
  ).toBe(false);
});

test('null email fails', () => {
  expect(
    loginSchema.isValidSync({
      email: null,
      password: 'password',
    }),
  ).toBe(false);
});

test('empty password fails', () => {
  expect(
    loginSchema.isValidSync({
      email: 'person@example.com',
      password: '',
    }),
  ).toBe(false);
});

test('undefined password fails', () => {
  expect(
    loginSchema.isValidSync({
      email: 'person',
    }),
  ).toBe(false);
});

test('null password fails', () => {
  expect(
    loginSchema.isValidSync({
      email: 'person',
      password: 'null',
    }),
  ).toBe(false);
});

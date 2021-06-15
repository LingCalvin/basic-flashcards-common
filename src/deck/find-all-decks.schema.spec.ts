import findAllDecksSchema from './find-all-decks.schema';

test('empty object passes', () => {
  expect(findAllDecksSchema.isValidSync({})).toBe(true);
});

test('single-level object passes', () => {
  expect(
    findAllDecksSchema.isValidSync({
      authorId: '00000000-0000-0000-0000-000000000000',
    }),
  ).toBe(true);
});

test('nested object passes', () => {
  expect(
    findAllDecksSchema.isValidSync({
      OR: [
        {
          AND: [
            { authorId: { equals: '00000000-0000-0000-0000-000000000000' } },
            { title: { contains: 'a' } },
          ],
        },
      ],
    }),
  ).toBe(true);
});

test('null fails', () => {
  expect(findAllDecksSchema.isValidSync(null)).toBe(false);
});

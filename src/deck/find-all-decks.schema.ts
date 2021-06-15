import * as yup from 'yup';
import paginationSchema from '../common/pagination.schema';
import stringFilterSchema from '../common/string-filter.schema';

const optionalDeckFilterArraySchema = yup
  .array()
  .notRequired()
  .of(yup.lazy(() => deckFilterSchema.default(undefined)) as never);

export const deckFilterSchema: yup.AnyObjectSchema = yup.object().shape({
  AND: optionalDeckFilterArraySchema,
  OR: optionalDeckFilterArraySchema,
  NOT: optionalDeckFilterArraySchema,
  id: stringFilterSchema.notRequired(),
  authorId: stringFilterSchema.notRequired(),
  title: stringFilterSchema.notRequired(),
  description: stringFilterSchema.notRequired(),
});

const findAllDecksSchema = paginationSchema.shape({
  filter: yup.array().notRequired().of(yup.object().shape({})),
});

export default findAllDecksSchema;

import * as yup from 'yup';

const optionalStringArray = yup
  .array()
  .notRequired()
  .of(yup.string().required());

export const nestedStringFilterSchema = yup.object().shape({
  equals: yup.string().notRequired(),
  in: yup.array().notRequired().of(yup.string().required()),
  notIn: yup.array().notRequired().of(yup.string().required()),
  lt: yup.string().notRequired(),
  lte: yup.string().notRequired(),
  gt: yup.string().notRequired(),
  gte: yup.string().notRequired(),
  contains: yup.string().notRequired(),
  endsWith: yup.string().notRequired(),
  mode: yup.string().notRequired().oneOf(['insensitive', 'default']),
});

const stringFilterSchema = yup.object().shape({
  equals: yup.string().notRequired(),
  in: optionalStringArray,
  notIn: optionalStringArray,
  lt: optionalStringArray,
  lte: optionalStringArray,
  gt: optionalStringArray,
  gte: optionalStringArray,
  contains: optionalStringArray,
  startsWith: optionalStringArray,
  endsWith: optionalStringArray,
  mode: yup.string().notRequired().oneOf(['insensitive', 'default']),
  not: nestedStringFilterSchema.notRequired().default(undefined),
});

export default stringFilterSchema;

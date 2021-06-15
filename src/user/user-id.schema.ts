import * as yup from 'yup';

const userIdSchema = yup.string().required().uuid();

export default userIdSchema;

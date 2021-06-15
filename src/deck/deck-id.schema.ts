import * as yup from 'yup';

const deckIdSchema = yup.string().required().uuid();

export default deckIdSchema;

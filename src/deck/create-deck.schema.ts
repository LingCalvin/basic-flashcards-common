import * as limits from '../common/limits';
import * as yup from 'yup';
import CreateDeckDto from './create-deck.dto';
import createCardSchema from '../card/create-card.schema';

const createDeckSchema: yup.SchemaOf<CreateDeckDto> = yup.object().shape({
  authorId: yup.string().required().uuid(),
  title: yup
    .string()
    .required()
    .min(limits.deckTitleMinLength)
    .max(limits.deckTitleMaxLength),
  description: yup
    .string()
    .required()
    .min(limits.deckTitleMinLength)
    .max(limits.deckDescriptionMaxLength),
  cards: yup.array().of(createCardSchema),
});

export default createDeckSchema;

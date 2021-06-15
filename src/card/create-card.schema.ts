import * as limits from '../common/limits';
import * as yup from 'yup';
import CreateCardDto from './create-card.dto';

const createCardSchema: yup.SchemaOf<CreateCardDto> = yup.object().shape({
  frontText: yup
    .string()
    .required()
    .min(limits.cardTextMinLength)
    .max(limits.cardTextMaxLength),
  backText: yup
    .string()
    .required()
    .min(limits.cardTextMinLength)
    .max(limits.cardTextMaxLength),
});

export default createCardSchema;

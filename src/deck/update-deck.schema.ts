import * as yup from 'yup';
import UpdateDeckDto from './update-deck.dto';
import createDeckSchema from './create-deck.schema';

const updateDeckSchema: yup.SchemaOf<UpdateDeckDto> = createDeckSchema;

export default updateDeckSchema;

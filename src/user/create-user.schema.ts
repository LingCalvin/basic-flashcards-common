import * as limits from '../common/limits';
import * as yup from 'yup';
import CreateUserDto from './create-user.dto';

const createUserSchema: yup.SchemaOf<CreateUserDto> = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(limits.passwordMinLength)
    .max(limits.passwordMaxLength),
  displayName: yup
    .string()
    .required()
    .min(limits.displayNameMinLength)
    .max(limits.displayNameMaxLength),
});

export default createUserSchema;

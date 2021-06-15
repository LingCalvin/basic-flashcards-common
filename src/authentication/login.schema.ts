import * as yup from 'yup';
import LoginDto from './login.dto';

const loginSchema: yup.SchemaOf<LoginDto> = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default loginSchema;

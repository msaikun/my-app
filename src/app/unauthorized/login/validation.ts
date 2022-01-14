import * as Yup       from 'yup';
import { rules }      from '../../../shared/rules';

export const signInFormSchema = Yup.object().shape({
  email: rules.email,
  password: rules.password,
});

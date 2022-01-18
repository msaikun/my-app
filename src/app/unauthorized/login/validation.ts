import * as Yup       from 'yup';
import { rules }      from '../../../shared/rules';

export const signInFormSchema = Yup.object().shape({
  email: rules.email.required('Email is required'),
  password: rules.password,
});

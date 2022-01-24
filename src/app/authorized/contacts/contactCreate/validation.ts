import * as Yup       from 'yup';
import { rules } from '../../../shared/rules';

export const contactFormSchema = Yup.object().shape({
  firstName: rules.firstName,
  lastName: rules.lastName,
  email: rules.email,
  phone: rules.phone,
  description: rules.description,
});

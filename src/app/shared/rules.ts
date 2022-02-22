import * as Yup from 'yup';

export const rules = {
  email: Yup.string()
    .email('Please provide a valid email'),
  password: Yup.string()
    .required('Password is required')
    .test('len', 'Password must be from 8 to 50 symbols', (val: any) => val && val.length > 7 && val.length <= 50),
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Please enter valid name')
    .max(20, 'First Name must be to 20 symbols')
    .required('First Name is required'),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Please enter valid last name')
    .max(20, 'Last Name must be to 20 symbols')
    .required('Last Name is required'),
  phone: Yup.string()
    .matches(/^[0-9+\s, -]+$/, 'That does not look like a phone number')
    .min(8, 'A phone number must be greater than or equal to 8')
    .required('A phone number is required'),
  description: Yup.string()
    .required('Description is required')
    .max(250, 'Description must to 250 symbols')
};

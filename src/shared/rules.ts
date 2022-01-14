import * as Yup from 'yup';

export const rules = {
  email: Yup.string()
    .email('Please provide a valid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .test('len', 'Password must be from 8 to 50 symbols', (val: any) => val && val.length > 7 && val.length <= 50),
};
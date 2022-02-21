import * as React                    from 'react';
import { Input, Form }               from 'antd';
import { FieldProps, FastField }     from 'formik';
import { InputProps as $InputProps } from 'antd/lib/input';
import { FormikFieldProps }          from '../../interfaces';

export type InputProps = FormikFieldProps & $InputProps;

interface InputType
  extends React.ForwardRefExoticComponent<
    FormikFieldProps & $InputProps & React.RefAttributes<Input>
  > {}

const TextInput = ({ name, placeholder }: InputProps) => (
  <FastField name={name}>
    {({ field, form }: FieldProps) => (
      <Form.Item
        required
        validateStatus={form.errors[field.name] ? 'error' : 'success'}
        help={form.errors ? form.errors[field.name] : ''}
      >
        {name === 'password' ? (
          <Input.Password
            placeholder={placeholder}
            {...field}
            style={{ height: '50px', borderRadius: '5px' }}
          />
        ) : (
          <Input
            placeholder={placeholder}
            {...field}
            style={{ height: '50px', borderRadius: '5px' }}
          />
        )}
      </Form.Item>
    )}
  </FastField>
);

export const TypedInput = TextInput as unknown as InputType;
export { TypedInput as Input };

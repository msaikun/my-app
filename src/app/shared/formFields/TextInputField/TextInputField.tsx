import { FieldProps, getIn }                  from "formik";
import React, { FC, FocusEvent, useCallback } from "react";
import { TextInput }                          from "../../inputs/TextInput/TextInput";

interface ITextInputFieldProps extends FieldProps {
  id?: string;
  required?: boolean;
}

const styles = {
  helper: {
    position: 'absolute',
    marginTop: 58,
    marginLeft: 1,
  } as React.CSSProperties,
};

export const TextInputField: FC<ITextInputFieldProps> = ({
  form,
  field,
  required,
  ...props
}) => {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const trimmedValue = value.trim();

      form.setFieldValue(field.name, trimmedValue);

      field.onBlur({
        ...event,
        target: {
          name: field.name,
          value: trimmedValue,
        },
      });
    },
    [field, form]
  );

  return (
    <TextInput
      FormHelperTextProps={{ style: styles.helper }}
      {...field}
      {...props}
      id={props.id || field.name}
      required={!!required}
      error={touched && !!error}
      helperText={(touched && error) || ""}
      onBlur={handleBlur}
    />
  );
};

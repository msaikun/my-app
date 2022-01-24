import { StandardTextFieldProps, TextField }                                           from '@material-ui/core';
import { ChangeEvent, forwardRef, ForwardRefRenderFunction, memo, useCallback }        from 'react';
import { TextInputWrapper }                                                            from '../../styles';

export interface ITextInputOwnProps {
  shrink?: boolean;
  required?: boolean;
  displayError?: boolean;
  autofill?: boolean;
  pattern?: string;
}

export interface ITextInputProps
  extends ITextInputOwnProps, StandardTextFieldProps {
}

const TextInputBase: ForwardRefRenderFunction<HTMLDivElement, ITextInputProps> = ({
  value,
  error,
  type = 'text',
  label = '',
  shrink = true,
  autofill = false,
  fullWidth = true,
  displayError = false,
  pattern,
  required,
  helperText,
  onChange,
  ...props
}, ref) => {
  const valueIsMissing = !value && value !== 0;
  const errorRequired = displayError && required && valueIsMissing;
  const errorRequiredText = errorRequired && `${ label } is required`;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;

      const { value: val } = event.target;

      if (pattern && !val.match(new RegExp(pattern, 'g'))) {
        return;
      }

      onChange(event);
    },
    [ onChange, pattern ]
  );

  return (
    <TextInputWrapper
      hasValue={ !!value }
      hasLabel={ !!label }
      fullWidth={ fullWidth }
    >
      { !autofill && (
        <input
          type={ type }
          name={ label as string }
          tabIndex={ -1 }
          className="hidden"
        />
      ) }

      <TextField
        { ...props }
        inputRef={ ref }
        type={ type }
        value={ value ?? '' }
        label={ label }
        error={ error || errorRequired }
        helperText={ helperText || errorRequiredText }
        required={ required }
        fullWidth={ fullWidth }
        data-error={ error }
        onChange={ handleChange }
        variant="outlined"
        InputLabelProps={ {
          shrink,
          tabIndex: -1
        } }
      />
    </TextInputWrapper>
  );
};

export const TextInput = memo(forwardRef(TextInputBase));

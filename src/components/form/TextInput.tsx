import React from 'react';
import { InputHTMLAttributes, ClassAttributes } from 'react';
import { FieldHookConfig } from 'formik';
import { useField } from 'formik';

type TextFieldProps = {
  label: string;
  name: string;
  requiredInput: boolean;
};

const TextInput = ({
  label,
  requiredInput,
  className,
  ...props
}: TextFieldProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div className={`${className ? className + ' ' : ''}form-group`}>
      <label htmlFor={props.id || props.name} className="mb-2">
        {requiredInput && <span className="text-danger">*</span>}
        {label}
      </label>
      <input
        className={`form-control ${
          meta.touched && meta.error ? 'is-invalid' : null
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;

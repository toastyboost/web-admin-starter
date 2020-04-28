import * as React from 'react';
import { useStore } from 'effector-react';
import { Form, Input as AntInput } from 'antd';
import { InputResult } from 'effector-form';

type DefaultFieldProps = {
  store: InputResult;
  config: {
    label?: string;
    required?: boolean;
    type?: string;
    name?: string;
    placeholder?: string;
    prefix?: React.ReactNode | string;
    suffix?: React.ReactNode | string;
    size?: 'large' | 'small';
  };
};

export const Input = ({ store, config }: DefaultFieldProps) => {
  const { label, required, name, placeholder, prefix, suffix, size, type } = config;
  const { $value, $error, changed } = store;

  const value = useStore($value);
  const error = useStore($error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    changed(value)
  }

  const isError = false

  return (
    <Form.Item
      label={label}
      required={required}
      validateStatus={isError ? 'error' : ''}
      help={isError && error}
      className={`form-item-${name}`}
    >
      <AntInput
        value={value}
        prefix={prefix}
        suffix={suffix}
        type={type}
        name={name}
        placeholder={placeholder}
        size={size}
        onChange={handleChange}
      />
    </Form.Item>
  );
};

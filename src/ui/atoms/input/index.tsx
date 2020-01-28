import * as React from 'react';
import { useStore } from 'effector-react';
import { Form, Icon, Input as AntInput } from 'antd';

type DefaultFieldProps = {
  store: any;
  config: {
    placeholder?: string;
    icon?: string;
    name: string;
    touched?: boolean;
  };
};

export const Input = ({ store, config }: DefaultFieldProps) => {
  const { icon, name, placeholder, touched } = config;
  const { $value, $error, changed } = store;

  // const error = useStore($error);
  // const value = useStore($value);

  // const isError = !!error && touched;

  return (
    <Form.Item
      // validateStatus={isError ? 'error' : ''}
      // help={isError && error}
      className={`form-item-${name}`}
    >
      <AntInput
        // value={value}
        prefix={<Icon type={icon} />}
        type={name}
        name={name}
        placeholder={placeholder}
        onChange={changed}
        size="large"
      />
    </Form.Item>
  );
};

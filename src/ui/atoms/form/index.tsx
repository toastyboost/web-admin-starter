import * as React from 'react';
import { Form as AntForm } from 'antd';
import { Event } from 'effector';

type MessageFormProps = {
  handleSubmit: Event<React.FormEvent<HTMLFormElement>>;
};

export const Form: React.FC<MessageFormProps> = ({
  handleSubmit,
  children,
}) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleSubmit) {
      handleSubmit(event);
    }
  };

  return <AntForm onSubmit={onSubmit}>{children}</AntForm>;
};

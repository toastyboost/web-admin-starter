import * as React from 'react';
import { Event } from 'effector';
type MessageFormProps = {
  handleSubmit: Event<void>;
};

export const Form: React.FC<MessageFormProps> = ({
  handleSubmit,
  children,
}) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleSubmit) {
      handleSubmit();
    }
  };

  return <form onSubmit={onSubmit}>
    {children}
  </form>;
};
